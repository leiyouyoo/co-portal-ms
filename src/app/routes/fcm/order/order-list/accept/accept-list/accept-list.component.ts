import { Component, OnInit, ViewChild } from '@angular/core';

import { STColumn } from '@co/cbc';
import { ShipmentService, ChangeShipmentInvalidStatusInput, CreateOrUpdateShipmentInput } from '../../../../../../service/fcm';
import { AcceptEditComponent } from '../accept-edit/accept-edit.component';

@Component({
  selector: 'app-order-accept-list',
  templateUrl: './accept-list.component.html',
  styleUrls: ['./accept-list.component.less'],
})
export class AcceptListComponent implements OnInit {
  @ViewChild('edit', { static: false }) acceptEditComponent: AcceptEditComponent;
  listOfData = [
    {
      id: '1',
      img: 'http://192.168.1.5:8000/Storage/File/GetDownLoadFile?fileId=71f54a66-fc76-59c5-21a6-39f5d4837a05&Handler=image',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
    {
      id: '2',
      img: 'http://192.168.1.5:8000/Storage/File/GetDownLoadFile?fileId=71f54a66-fc76-59c5-21a6-39f5d4837a05&Handler=image',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
    {
      id: '3',
      img: 'http://192.168.1.5:8000/Storage/File/GetDownLoadFile?fileId=71f54a66-fc76-59c5-21a6-39f5d4837a05&Handler=image',
      email: 32,
      address: 'New York No. 1 Lake Park',
      phone: '1212',
      date: 'date',
      aaa: 'zzzz',
    },
  ];
  columns: STColumn[] = [
    { title: '操作进度', index: 'id' },
    { title: '运输方式', type: 'img' },
    { title: '运单号', index: 'email' },
    { title: '下单日期', index: 'phone' },
    { title: '业务员', index: 'aaa' },
    { title: '客户', index: 'registered' },
    { title: '联系人', index: 'id' },
    { title: '送货地址', type: 'img' },
    { title: '交货方式', index: 'email' },
    { title: '交货时间', index: 'phone' },
    { title: '交货位置', index: 'aaa' },
    { title: '交货仓库', index: 'registered' },
    { title: '国家', index: 'id' },
    { title: '品名', type: 'img' },
    { title: '体积（CBN）', index: 'email' },
    { title: '件数(CTN)', index: 'phone' },
    { title: '重量（KG）', index: 'aaa' },
    { title: '渠道', index: 'registered' },
    { title: '入仓时间', index: 'id' },
    { title: '是否进仓', type: 'img' },
    { title: '操作口岸', index: 'email' },
    { title: 'FBA NO', index: 'phone' },
    { title: '承运人', index: 'aaa' },
    { title: '创建人', index: 'registered' },
  ];

  editModal = false;
  advancedSearch = false;
  constructor(private shipmentService: ShipmentService) {}

  ngOnInit(): void {}

  handleCancel() {
    this.editModal = false;
  }

  handleOk() {
    if (!this.acceptEditComponent.validate()) {
      return;
    }

    debugger;
    const data = this.acceptEditComponent.validateForm.value;
    var arr = [];

    let address = null;
    if (data.lineItems) {
      address = data.lineItems[0].address;
    }
    data.lineItems.forEach((e) => {
      delete e.address;

      e.shipmentLineItem.forEach((z) => {
        z.address = address;
        z.totalQuantity = {
          value: z.totalQuantity,
          unit: 'CTN',
        };

        z.totalWeight = {
          value: z.totalWeight,
          unit: 'KG',
        };

        z.totalVolume = {
          value: z.totalVolume,
          unit: 'CBM',
        };
        arr.push(z);
      });
    });

    this.shipmentService
      .createOrUpdate({
        customerId: data.customerId,
        serviceUserId: data.serviceUserId,
        transportationMode: data.transportationMode,
        agentCustomerId: data.agentCustomerId,
        cargoReadyDate: null,
        incoterm: null,
        freightType: null,
        tradeType: 0,
        shipmentNo: data.shipmentNo,
        transferNo: null,
        customsCustomerId: data.customsCustomerId,
        customsClearanceCustomerId: data.customsClearanceCustomerId,
        booking: {
          customerBookingId: null,
          serviceCompanyId: data.serviceCompanyId,
          channel: data.channel,
          fbaPickUpMethodType: data.fbaPickUpMethodType,
          contactId: data.contactId,
          originAddressId: data.originAddressId,
          originWarehouseId: null,
          destinationPortId: null,
          originPortId: null,
          destinationWarehouseId: null,
          destinationAddressId: null,
          deliveryDate: data.deliveryDate,
          commodity: data.commodity,
          id: null,
        },
        oceanShipment: {
          carrierBookingNo: data.carrierBookingNo,
        },
        fbaShipment: {
          expressNo: data.expressNo,
          expressNoRemark: data.expressNoRemark,
          warehouseNo: null,
          huoLalaOrderNo: null,
          fbaDeliveryType: data.fbaDeliveryType,
          fbaDeliveryTypeRemark: data.fbaDeliveryTypeRemark,
          cargoPutAwayDate: data.cargoPutAwayDate ? new Date(data.cargoPutAwayDate).toISOString() : null,
        },
        lineItems: arr,
        id: null,
      })
      .subscribe((res) => {
        debugger;
        this.editModal = false;
      });
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

  showEdit() {
    this.editModal = true;
    this.acceptEditComponent.validateForm.reset();
  }
}
