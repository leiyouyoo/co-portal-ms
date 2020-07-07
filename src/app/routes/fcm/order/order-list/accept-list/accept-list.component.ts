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
    },
    {
      id: '2';
      img: 'John Brown';
      email: 32;
      address: 'New York No. 1 Lake Park';
      phone: '1212';
      date: 'date';
    },
    {
      id: '3';
      img: 'John Brown';
      email: 32;
      address: 'New York No. 1 Lake Park';
      phone: '1212';
      date: 'date';
    },
  ];
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', type: 'img', width: 80, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone', width: 80 },
    { title: { text: '佣金', optional: '（单位：元）', optionalHelp: '计算公式=订单金额 * 0.6%' }, index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
