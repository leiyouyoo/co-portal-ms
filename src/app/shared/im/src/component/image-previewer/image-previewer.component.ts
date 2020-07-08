import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-previewer',
  templateUrl: './image-previewer.component.html',
  styleUrls: ['./image-previewer.component.less'],
})
export class ImagePreviewerComponent implements OnInit {
  url = '';
  index = 0;
  visible = true;
  zoom = 1;
  rotate = 0;
  minZoom = 0.1;
  el: HTMLElement;
  @Input() imgUrlList = [];
  constructor(private elRef: ElementRef, private render2: Renderer2) {
    this.el = this.elRef.nativeElement;
  }

  ngOnInit() {}
  imageStyle() {
    return {
      transform: `scale(${this.zoom});`,
    };
  }
  getStyle() {
    return `transform:scale(${this.zoom}) rotate(${this.rotate}deg)`;
  }
  previewUrl() {
    return this.formatUrl(this.imgUrlList[this.index]);
  }
  handlePreview({ url }) {
    this.url = url;
    this.index = this.imgUrlList.findIndex((item) => item === url);
    this.visible = true;
  }
  handleMouseWheel(event) {
    if (event.wheelDelta > 0) {
      this.zoomIn();
    } else {
      this.zoomOut();
    }
  }
  zoomIn() {
    this.zoom += 0.1;
    const img = this.el.querySelector('.image-preview');
    this.render2.setStyle(img, 'transform', `scale(${this.zoom}) rotate(${this.rotate}deg`);
  }
  zoomOut() {
    this.zoom = this.zoom - 0.1 > this.minZoom ? this.zoom - 0.1 : this.minZoom;
    const img = this.el.querySelector('.image-preview');
    this.render2.setStyle(img, 'transform', `scale(${this.zoom}) rotate(${this.rotate}deg`);
  }
  close() {
    Object.assign(this, { zoom: 1 });
    this.visible = false;
    this.imgUrlList = [];
  }
  rotateLeft() {
    this.rotate -= 90;
  }
  rotateRight() {
    this.rotate += 90;
  }
  goNext() {
    this.index = (this.index + 1) % this.imgUrlList.length;
  }
  goPrev() {
    this.index = this.index - 1 >= 0 ? this.index - 1 : this.imgUrlList.length - 1;
  }
  formatUrl(url) {
    if (!url) {
      return '';
    }
    return url.slice(0, 2) === '//' ? `https:${url}` : url;
  }
}
