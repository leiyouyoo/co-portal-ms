import { Component, OnInit, ViewChild } from '@angular/core';

import { STColumn } from '@co/cbc';
@Component({
  selector: 'app-order-accept-list',
  templateUrl: './accept-list.component.html',
  styleUrls: ['./accept-list.component.less'],
})
export class AcceptListComponent implements OnInit {
  listOfData: [
    {
      id: '1';
      img: 'John Brown';
      email: 32;
      address: 'New York No. 1 Lake Park';
      phone: '1212';
      date: 'date';
      aaa: 'zzzz';
    },
    {
      id: '2';
      img: 'John Brown';
      email: 32;
      address: 'New York No. 1 Lake Park';
      phone: '1212';
      date: 'date';
      aaa: 'zzzz';
    },
    {
      id: '3';
      img: 'John Brown';
      email: 32;
      address: 'New York No. 1 Lake Park';
      phone: '1212';
      date: 'date';
      aaa: 'zzzz';
    },
  ];
  columns: STColumn[] = [
    { title: '业务进度', index: 'id', width: 120 },
    { title: '操作进度', type: 'img', width: 120 },
    { title: '承运人', index: 'email', width: 120 },
    { title: '报关行', index: 'phone', width: 120 },
    { title: '清关行', index: 'aaa', width: 120 },
    { title: '代理', index: 'registered', width: 120 },
    { title: '业务进度', index: 'id', width: 120 },
    { title: '操作进度', type: 'img', width: 120 },
    { title: '承运人', index: 'email', width: 120 },
    { title: '报关行', index: 'phone', width: 120 },
    { title: '清关行', index: 'aaa', width: 120 },
    { title: '代理', index: 'registered', width: 120 },
  ];

  editModal = false;
  constructor() {}

  ngOnInit(): void {}

  handleCancel() {
    this.editModal = false;
  }

  handleOk() {
    this.editModal = false;
  }
}
