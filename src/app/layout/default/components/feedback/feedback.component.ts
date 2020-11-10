import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { NzModalService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { FeedbackService } from './feedback.service';
import { I18nMessageService } from '@co/common';
import { StorageFileService } from '@co/cds';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less'],
})
export class FeedbackComponent implements OnInit {

  @ViewChild('capture_box', { static: true }) captureBox: ElementRef<HTMLElement>;

  isOpen = false;
  loading = false;
  showCaptureBox = false;
  form = {
    feedbackTypeId: '1',
    contents: '',
    id: '00000000-0000-0000-0000-000000000000',
  };
  snapShots = []; // 储存编辑步骤
  feedbackTypes = [];
  private canvas: HTMLCanvasElement;
  private drawingSquare = false;
  private drawingEllipse = false;
  private startPoint;

  constructor(private renderer2: Renderer2, private modal: NzModalService, private translate: TranslateService,
              private feedbackService: FeedbackService, private storageFileService: StorageFileService,
              private msg: I18nMessageService, private el: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.feedbackService.getFeedTypeList().subscribe(value => {
      this.feedbackTypes = Object.entries(value).map(([key, value]) => ({ id: key, text: value }));
    });
  }

  @HostListener('document:click', ['$event.target'])
  onBackClick(el: HTMLElement) {
    if (!this.el.nativeElement.contains(el)) {
      this.close();
    }
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.loading = true;
      html2canvas(document.body).then(canvas => {
        this.renderer2.setStyle(canvas, 'width', '100%');
        this.renderer2.setStyle(canvas, 'height', '100%');
        this.canvas = canvas;
        this.snapShots = [canvas.toDataURL('image/png')];
        const captureBox = this.captureBox.nativeElement;
        captureBox.insertBefore(this.canvas, captureBox.lastChild);
        this.loading = false;
      });
    }
  }

  close() {
    if (this.isOpen) {
      this.canvas?.parentElement.removeChild(this.canvas);
      this.drawingEllipse = false;
      this.drawingSquare = false;
      this.snapShots = [];
      this.isOpen = false;
    }
  }

  fullscreen() {
    this.showCaptureBox = true;
  }

  closeFullscreen() {
    this.showCaptureBox = false;
  }

  startDrawSquare(type: 'drawingSquare' | 'drawingEllipse') {
    const canvas = this.canvas;
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const operation = {
      drawingSquare: v => this.drawSquare(v),
      drawingEllipse: v => this.drawEllipse(v),
    };

    canvas.onmousedown = e => {
      this[type] = true;
      this.startPoint = {
        x: (e.clientX - rect.left) * scale,
        y: (e.clientY - rect.top) * scale,
      };
    };
    canvas.onmousemove = e => {
      const point = {
        x: (e.clientX - rect.left) * scale,
        y: (e.clientY - rect.top) * scale,
      };
      operation[type](point);
    };
    canvas.onmouseup = () => {
      canvas.onmousedown = null;
      canvas.onmousemove = null;
      canvas.onmouseup = null;
      this[type] = false;
      this.snapShots.push(canvas.toDataURL('image/png'));
    };
  }

  undo() {
    if (this.snapShots.length > 1) {
      const img = new Image();
      img.src = this.snapShots[this.snapShots.length - 2];
      this.canvas.getContext('2d').drawImage(img, 0, 0);
      this.snapShots.pop();
    }
  }

  editDone() {
    this.closeFullscreen();
  }

  submit() {
    const imgFile = new File([this.dataURLtoBlob(this.snapShots[this.snapShots.length - 1])], new Date().getTime().toString() + '.png');
    console.log(imgFile);
    this.storageFileService.upload({ file: imgFile }).subscribe((res: any) => {
      const data = {
        fileId: res.fileId,
        ...this.form,
      };
      this.feedbackService.createOrUpdate(data).subscribe(() => {
        this.msg.success(this.translate.instant('Submit successfully,thanks for your feedback'));
        this.close();
      });
    });
  }

  // 清除画布
  private clearDrawContext() {
    const context = this.canvas.getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const img = new Image();
    img.src = this.snapShots[this.snapShots.length - 1];
    context.drawImage(img, 0, 0);
  }

  // 画矩形
  private drawSquare({ x, y }) {
    if (!this.drawingSquare) {
      return;
    }
    const height = y - this.startPoint.y;
    const width = x - this.startPoint.x;
    this.clearDrawContext();
    const context = this.canvas.getContext('2d');
    context.strokeStyle = 'red';
    context.lineWidth = 4;
    context.strokeRect(this.startPoint.x, this.startPoint.y, width, height);
  }

  // 画椭圆
  private drawEllipse({ x, y }) {
    if (!this.drawingEllipse) {
      return;
    }
    const startY = this.startPoint.y;
    const startX = this.startPoint.x;
    this.clearDrawContext();
    const context = this.canvas.getContext('2d');
    context.beginPath();
    context.moveTo(startX, startY + (y - startY) / 2);
    context.bezierCurveTo(startX, startY, x, startY, x, startY + (y - startY) / 2);
    context.bezierCurveTo(x, y, startX, y, startX, startY + (y - startY) / 2);
    context.closePath();
    context.strokeStyle = 'red';
    context.lineWidth = 4;
    context.stroke();
  }

  //将base64转换为blob
  private dataURLtoBlob(dataurl) {
    let binStr = atob(dataurl.split(',')[1]),
      len = binStr.length,
      arr = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
    return new Blob([arr], { type: 'image/png' });
  }
}
