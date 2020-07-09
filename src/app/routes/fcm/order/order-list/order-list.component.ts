import { Component, OnInit, ViewChild } from '@angular/core';
import { AddOrderComponent } from '../add-order/add-order.component';
import { STColumn } from '@co/cbc';
import { EnterWarehouseModalComponent } from './enter-warehouse-modal/enter-warehouse-modal.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less'],
})
export class OrderListComponent implements OnInit {

  @ViewChild(EnterWarehouseModalComponent, { static: true })
  enterWarehouseModalComponent: EnterWarehouseModalComponent;

  @ViewChild(AddOrderComponent)
  addOrderComponent: AddOrderComponent;
  isAddVisible = false;
  isVisible = false;
  date = null;
  listOfData = [
    {
      shipmentIds: '1',
      img: 'John Brown',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
    {
      shipmentIds: '2',
      img: 'John Brown',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
    {
      shipmentIds: '3',
      img: 'John Brown',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
  ];
  columns: STColumn[] = [
    { title: '编号', index: 'shipmentIds', width: 80 },
    { title: '头像', type: 'img', width: 80, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone', width: 80 },
    { title: { text: '佣金', optional: '（单位：元）', optionalHelp: '计算公式=订单金额 * 0.6%' }, index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  listSelectIds: Array<string> = [];  // 预报列表选中值

  constructor(
  ) { }

  ngOnInit() { }

  showModal(type): void {
    if (type === 1) {
      this.addOrderComponent.isVisible = true;
    } else {
      this.isVisible = true;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  enterWareHouse(): void {
    this.enterWarehouseModalComponent.showModal()
  }

  checkChange(e): void {
    if (e.type == "checkbox") {
      this.listSelectIds = e?.checkbox?.length > 0 ? e.checkbox.map(e => { return e.shipmentIds }) : [];
    }
  }

}
