import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-head-drag',
  templateUrl: './table-head-drag.component.html',
  styleUrls: ['./table-head-drag.component.less']
})
export class TableHeadDragComponent implements OnInit {

  @Input() listData: any;
  @Output() clickSave = new EventEmitter();
  @Output() clickCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clickSave.emit(this.listData);
  }

  cancel() {
    this.clickCancel.emit();
  }

}
