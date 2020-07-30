import { Component, OnInit, ElementRef, Input, SimpleChanges, OnChanges, Renderer2, Output, EventEmitter } from '@angular/core';
import Cropper from 'cropperjs';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.less'],
})
export class ImageCropperComponent implements OnInit, OnChanges {
  @Input() file;
  @Input() showCropper = false;
  @Input() minContainerWidth = 500;
  @Input() minContainerHeight = 500;
  @Input() minCropBoxHeight = 48;
  @Input() minCropBoxWidth = 48;
  @Output() emitFile: EventEmitter<any> = new EventEmitter<any>();
  image: any;
  cropper: any;
  imgData: string | ArrayBuffer;
  constructor(
    private el: ElementRef,
    private renderer2: Renderer2,
    private nzMessageService: NzMessageService,
    private translate: TranslateService,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.file);
    if (!changes.file.currentValue) {
      return;
    }
    this.file = changes.file.currentValue;
    const matchType = (fileName) => {
      // 后缀获取
      let suffix = '';
      // 获取类型结果
      let result = true;
      try {
        const flieArr = fileName.split('.');
        suffix = flieArr[flieArr.length - 1];
      } catch (err) {
        suffix = '';
      }
      // fileName无后缀返回 false
      if (!suffix) {
        result = false;
        return result;
      }
      // 图片格式
      const imglist = ['png', 'jpg', 'jpeg'];
      // 进行图片匹配
      result = imglist.some((item) => {
        return item == suffix;
      });
      return result;
    };
    if (!matchType(this.file.name)) {
      this.showCropper = false;
      this.nzMessageService.error(this.translate.instant('Unsupported file format') + '!');
      return;
    }
    this.showCropper = true;
    this.select();
  }
  ngOnInit(): void {}
  select() {
    const fr = new FileReader();
    const file = this.file;
    fr.readAsDataURL(file);
    fr.onload = () => {
      this.image = this.el.nativeElement.querySelector('#js_image');
      if (this.cropper && this.imgData != fr.result) {
        this.cropper.replace(fr.result as string, false);
      } else {
        this.imgData = fr.result;
        this.renderer2.setAttribute(this.image, 'src', fr.result as string);
        this.iniCropper();
      }
    };
  }
  iniCropper() {
    this.cropper = new Cropper(this.image, {
      viewMode: 1,
      dragMode: 'move',
      initialAspectRatio: 1,
      modal: true,
      highlight: true,
      aspectRatio: 1,
      preview: '.before',
      background: true,
      movable: true,
      autoCropArea: 0.6,
      zoomOnWheel: true,
      zoomOnTouch: true,
      cropBoxResizable: true,
      minContainerWidth: this.minContainerWidth,
      minContainerHeight: this.minContainerHeight,
      minCropBoxHeight: this.minCropBoxHeight,
      minCropBoxWidth: this.minCropBoxWidth,
      crop(event) {},
    });
  }
  // 裁剪图片
  cutImage() {
    const dataURL = this.getRoundedCanvas();
    const data = dataURL.toDataURL(this.file.type);
    const file = this.dataURLtoFile(data.split(';base64,')[1]);
    this.clearData();
    this.emitFile.emit(file);
  }
  clearData() {
    this.showCropper = false;
    this.image = null;
    this.cropper = null;
    this.imgData = null;
  }
  // 获取圆形canvas
  getRoundedCanvas() {
    const sourceCanvas = this.image.cropper['getCroppedCanvas']('');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.clip(); //裁剪上面的圆形
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    return canvas;
  }
  /**
   * 转为file对象
   *
   * @param {string} dataurl
   * @returns
   * @memberof ChatPage
   */
  dataURLtoFile(dataurl: string) {
    const data = atob(dataurl);
    let n = data.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = data.charCodeAt(n);
    }
    return new (window as any).File([u8arr], this.file.name, { type: this.file.type });
  }
}
