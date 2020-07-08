import { Component, OnInit, ViewChild } from '@angular/core';

import { STColumn } from '@co/cbc';
import { ShipmentService, ChangeShipmentInvalidStatusInput } from '../../../../../../service/fcm';
import { AcceptEditComponent } from '../accept-edit/accept-edit.component';

@Component({
  selector: 'app-order-accept-list',
  templateUrl: './accept-list.component.html',
  styleUrls: ['./accept-list.component.less'],
})
export class AcceptListComponent implements OnInit {
  @ViewChild('edit', { static: false }) acceptEditComponent: AcceptEditComponent;
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
  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {}

  handleCancel() {
    this.editModal = false;
  }

  handleOk() {
    if (!this.acceptEditComponent.validate()) {
      return;
    }
    this.editModal = false;
  }

  /**
   * 是否作废
   * @param isTrue
   */
  isChangeStatus(isTrue?: boolean) {
    let req: ChangeShipmentInvalidStatusInput = {
      shipmentIds: ['7D48A4A3-FF11-4C9A-EA9E-08D8225DBB70', 'AD2C9E19-F807-4D04-7D81-08D822F1207F'],
      isSetInvalid: isTrue ? true : false,
    };
    this.shipmentService.changeInvalidStatus(req).subscribe((res) => {
      console.log(res);
    });
  }
}
