import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImService } from '../../service/im.service';

@Component({
  selector: 'app-img-element',
  templateUrl: './img-element.component.html',
  styleUrls: ['./img-element.component.less'],
})
export class ImgElementComponent implements OnInit {
  @Input() payload = '';
  @Output() showPreviewImg: EventEmitter<string> = new EventEmitter<string>();

  showPreviewer: boolean;
  constructor(private imTemplateService: ImService) {}

  ngOnInit() {}
  getImgUrl() {
    return this.imTemplateService.getImgUrl(this.payload);
  }
  handlePreview() {
    this.showPreviewImg.emit(this.getImgUrl());
    this.showPreviewer = true;
  }
}
