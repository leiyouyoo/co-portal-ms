import { Component, ElementRef, Inject, Injector, Renderer2, ViewChild } from '@angular/core';
import { ACLService } from '@co/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
import { StorageFileService } from '@co/cds';
import { Planet, ReuseTabService } from '@co/cms';
import { CoPageBase } from '@co/core';
import { logOut } from '@co/im';
import { TranslateService } from '@ngx-translate/core';
import html2canvas from 'html2canvas';
import { NzModalService } from 'ng-zorro-antd';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'csp-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.less'],
})
export class FeedbackComponent extends CoPageBase {
  @ViewChild('capture_box', { static: true }) captureBox: ElementRef<HTMLElement>;

  isOpen = false;
  loading = false;
  showCaptureBox = false;
  form = {
    feedbackTypeId: '1',
    contents: '',
    navigationUrl: '',
    id: '00000000-0000-0000-0000-000000000000',
  };
  pics: string[][] = []; // 每张截图编辑步骤，最后一步就是最终截图
  snapShots: string[] = []; // 当前编辑的截图
  fileIds: string[] = []; // 截图上传后的文件id
  feedbackTypes = [];
  private canvas: HTMLCanvasElement; // 当前编辑canvas
  private drawingSquare = false;
  private drawingEllipse = false;
  private startPoint;

  constructor(
    injector: Injector,
    private renderer2: Renderer2,
    private modal: NzModalService,
    private translate: TranslateService,
    private feedbackService: FeedbackService,
    private storageFileService: StorageFileService,
    private aclService: ACLService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private planet: Planet,
    private reuseTabService: ReuseTabService,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.feedbackService.getFeedTypeList().subscribe((value) => {
      this.feedbackTypes = Object.entries(value).map(([key, value]) => ({ id: key, text: value }));
    });
  }

  // @HostListener('document:click', ['$event.target'])
  // onBackClick(el: HTMLElement) {
  //   if (!this.el.nativeElement.contains(el)) {
  //     this.close();
  //   }
  // }

  open() {
    if (!this.isOpen) {
      this.form.navigationUrl = window.location.href;
      this.isOpen = true;
      this.loading = true;
      html2canvas(document.body).then((canvas) => {
        this.renderer2.setStyle(canvas, 'width', '100%');
        this.renderer2.setStyle(canvas, 'height', '100%');
        const snapShots = [canvas.toDataURL('image/png')];
        snapShots['canvas'] = canvas;
        this.pics = [snapShots];
        this.loading = false;
        this.fullscreen(snapShots);
      });
    }
  }

  close() {
    if (this.isOpen) {
      this.canvas?.parentElement?.removeChild(this.canvas);
      this.drawingEllipse = false;
      this.drawingSquare = false;
      this.pics = [];
      this.snapShots = [];
      this.isOpen = false;
    }
  }

  fullscreen(snapShots: string[]) {
    this.canvas = snapShots['canvas'];
    this.snapShots = snapShots;
    const captureBox = this.captureBox.nativeElement;
    captureBox.insertBefore(this.canvas, captureBox.lastChild);
    this.showCaptureBox = true;
  }

  closeFullscreen() {
    const imgFile = new File([this.dataURLtoBlob(this.snapShots[this.snapShots.length - 1])], new Date().getTime().toString() + '.png');
    this.storageFileService.upload({ file: imgFile }).subscribe((res: any) => {
      this.snapShots['fileId'] = res.fileId;
    });
    this.canvas?.parentElement.removeChild(this.canvas);
    this.showCaptureBox = false;
  }

  delete(pic) {
    this.pics = this.pics.filter(i => i !== pic);
  }

  newCapture() {
    this.loading = true;
    html2canvas(document.body).then((canvas) => {
      this.renderer2.setStyle(canvas, 'width', '100%');
      this.renderer2.setStyle(canvas, 'height', '100%');
      const snapShots = [canvas.toDataURL('image/png')];
      snapShots['canvas'] = canvas;
      this.pics.unshift(snapShots);
      this.loading = false;
      this.fullscreen(snapShots);
    });
  }

  startDraw(type: 'drawingSquare' | 'drawingEllipse') {
    const canvas = this.canvas;
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const operation = {
      drawingSquare: (v) => this.drawSquare(v),
      drawingEllipse: (v) => this.drawEllipse(v),
    };

    canvas.onmousedown = (e) => {
      this[type] = true;
      this.startPoint = {
        x: (e.clientX - rect.left) * scale,
        y: (e.clientY - rect.top) * scale,
      };
    };
    canvas.onmousemove = (e) => {
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
    const fileIds = this.pics.map(snapShots => snapShots['fileId']).filter(v => !!v);
    const data = {
      fileIds: fileIds,
      feedbackSource: 'CSP',
      ...this.form,
    };
    this.feedbackService.createOrUpdate(data).subscribe(() => {
      this.$message.success(this.translate.instant('Submit successfully,thanks for your feedback'));
      this.form.contents = null;
      this.form.id = null;
      this.form.feedbackTypeId = '1';
      this.close();
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

  frame = {
    translate: [0, 0],
  };

  onDragStart({ set }) {
    set(this.frame.translate);
  }

  onDrag({ target, beforeTranslate }) {
    this.frame.translate = beforeTranslate;
    target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
  }

  onDragEnd({ target, isDrag, clientX, clientY }) {
    console.log('onDragEnd', target, isDrag, this.frame.translate);
    if (this.frame.translate[0] + document.body.clientWidth < 200 * target.childElementCount) {
      this.frame.translate[0] = 200 * target.childElementCount - document.body.clientWidth;
    } else if (this.frame.translate[0] > 0) {
      this.frame.translate[0] = 0;
    }
    if (this.frame.translate[1] + document.body.clientHeight < 32) {
      this.frame.translate[1] = 32 - document.body.clientHeight;
    } else if (this.frame.translate[1] > 0) {
      this.frame.translate[1] = 0;
    }
    target.style.transform = `translate(${this.frame.translate[0]}px, ${this.frame.translate[1]}px)`;
    !isDrag && this.showImLayout();
  }

  ImSDKReady: boolean;

  showImLayout() {
    // 判断是否为访客模式
    // if (this.checkAnonymous()) return;
    this.open();
  }

  checkAnonymous(): boolean {
    if (this.aclService.can(['Anonymous'])) {
      this.modal.confirm({
        nzTitle: this.translate.instant('This operation need to login first'),
        nzIconType: 'info-circle',
        nzOkText: this.translate.instant('Login'),
        nzOnOk: () => {
          this.onLogout();
        },
        nzOnCancel: () => {
        },
      });
      return true;
    }
    return false;
  }

  onLogout() {
    localStorage.removeItem('co.session');
    this.tokenService.clear();
    this.reuseTabService.clear(true);
    this.planet.clear();
    try {
      logOut();
    } catch (e) {
      console.log('im logout error');
    }
    window.location.href = `/#/passport/login`;
  }
}
