import { Component, OnInit, ViewChild } from '@angular/core';

import { STColumn } from '@co/cbc';
import { AcceptEditComponent } from '../accept-edit/accept-edit.component';
import { ShipmentService, ChangeShipmentInvalidStatusInput } from 'src/app/service/fcm';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-order-accept-list',
  templateUrl: './accept-list.component.html',
  styleUrls: ['./accept-list.component.less'],
})
export class AcceptListComponent implements OnInit {
  @ViewChild('edit', { static: false }) acceptEditComponent: AcceptEditComponent;
  listOfData = [
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
    {
      id: '客户提交了订单，等待处理',
      img: '海运',
      email: 'FONB20060001',
      address: '2020/6/8 下午12:21:00',
      phone: 'Alfred',
      date: '通达',
      aaa: 'King',
      bbb: 'Peln',
      ccc: 'China',
      ddd: '自送货',
      eee: '2020/12/22 12:00-13:00',
      fff: 'China',
      ggg: 'Taiwan',
      hhh: 'Yantian',
      iii: 'China',
      jjj: '威士忌杯',
      kkk: '8.57',
      lll: '63',
      mmm: '12',
      nnn: '海卡',
      ooo: '2020/6/8 下午12:21:00',
      ppp: '',
    },
  ];
  columns: STColumn[] = [
    { title: '操作进度', index: 'id' },
    { title: '运输方式', type: 'img' },
    { title: '运单号', index: 'email' },
    { title: '下单日期', index: 'phone' },
    { title: '业务员', index: 'aaa' },
    { title: '客户', index: 'bbb' },
    { title: '联系人', index: 'ccc' },
    { title: '送货地址', index: 'ddd' },
    { title: '交货方式', index: 'eee' },
    { title: '交货时间', index: 'fff' },
    { title: '交货位置', index: 'ggg' },
    { title: '交货仓库', index: 'hhh' },
    { title: '国家', index: 'iii' },
    { title: '品名', index: 'jjj' },
    { title: '体积（CBN）', index: 'kkk' },
    { title: '件数(CTN)', index: 'lll' },
    { title: '重量（KG）', index: 'mmm' },
    { title: '渠道', index: 'nnn' },
    { title: '入仓时间', index: 'ooo' },
    { title: '是否进仓', index: 'ppp' },
    { title: '操作口岸', index: 'qqq' },
    { title: 'FBA NO', index: 'rrr' },
    { title: '承运人', index: 'sss' },
    { title: '创建人', index: 'ttt' },
  ];

  editModal = false;
  advancedSearch = false;
  constructor(private shipmentService: ShipmentService, private message: NzMessageService) {}

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
        pickUpTimeRange: data.deliveryDate,
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
          commodity: data.commodity,
          deliveryDate: null,
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
        addressItems: [],
        lineItems: arr,
        id: null,
      })
      .subscribe((res) => {
        debugger;
        this.message.success('Edit Success');
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
