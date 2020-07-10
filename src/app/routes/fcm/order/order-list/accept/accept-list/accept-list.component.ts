import { Component, OnInit, ViewChild } from '@angular/core';

import { STColumn } from '@co/cbc';
import { AcceptEditComponent } from '../accept-edit/accept-edit.component';
import { ShipmentService, ChangeShipmentInvalidStatusInput, GetShipmentListInput } from 'src/app/service/fcm';
import { NzMessageService } from 'ng-zorro-antd';
import { BookingService } from 'src/app/service/csp';
import { CustomerService } from 'src/app/service/crm';

@Component({
  selector: 'app-order-accept-list',
  templateUrl: './accept-list.component.html',
  styleUrls: ['./accept-list.component.less'],
})
export class AcceptListComponent implements OnInit {
  @ViewChild('edit', { static: false }) acceptEditComponent: AcceptEditComponent;
  editModal = false;
  listOfData: any;
  choosedId: any;
  columns: STColumn[] = [
    { width: '120px', title: '业务进度', index: 'shipmentNo' },
    { width: '120px', title: '操作进度', type: 'img' },
    { width: '120px', title: '承运人', index: 'agentCustomer' },
    { width: '120px', title: '报关行', index: 'phone' },
    { width: '120px', title: '清关行', index: 'aaa' },
    { width: '120px', title: '代理', index: 'bbb' },
    { width: '120px', title: '下单时间', index: 'creationTime' },
    { width: '120px', title: '业务类型', index: 'ddd' },
    { width: '120px', title: '渠道', index: 'eee' },
    { width: '120px', title: '运单号', index: 'shipmentNo' },
    { width: '120px', title: 'SO号', index: 'ggg' },
    { width: '120px', title: '国家', index: 'country' },
    { width: '120px', title: '送货地址', index: 'address' },
    { width: '120px', title: '出货口岸', index: 'serviceCompany' },
    { width: '120px', title: '业务员', index: 'serviceUser' },
    { width: '120px', title: '客户', index: 'customerName' },
    { width: '120px', title: '性质', index: 'mmm' },
    { width: '120px', title: '联系人', index: 'contactName' },
    {
      width: '120px',
      title: '交货方式',
      index: 'fbaPickUpMethodType',
      enum: {
        0: 'NotSet',
        1: 'DeliveryGoodsByMyself',
        2: 'PickUpByCityocean',
      },
      type: 'enum',
    },
    { width: '120px', title: '交货位置', index: '' },
    { width: '120px', title: '交货仓库', index: 'originAddress' },
    { width: '120px', title: '交货/提货时间', index: 'cargoReadyDate' },
    { width: '120px', title: '品名', index: 'commodity' },
    { width: '120px', title: '体积（CBM）', index: 'volume.value' },
    { width: '120px', title: '件数（CTN）', index: 'quantity.value' },
    { width: '120px', title: '重量', index: 'ttt' },
    { width: '120px', title: '入仓时间', index: 'cargoPutAwayDate' },
    { width: '120px', title: '装柜时间', index: 'mmm' },
    { width: '120px', title: '柜号', index: 'nnn' },
    { width: '120px', title: '柜型', index: 'ooo' },
    { width: '120px', title: '提单号码', index: 'ppp' },
    { width: '120px', title: '目的港', index: 'qqq' },
    { width: '120px', title: '码头名称', index: 'rrr' },
    { width: '120px', title: 'FBA号', index: 'fbano' },
    { width: '120px', title: 'Reference ID', index: 'ttt' },
    { width: '120px', title: '快递号', index: 'ttt' },
    { width: '120px', title: '备注', index: 'ttt' },
    { width: '120px', title: 'ETD', index: 'ttt' },
    { width: '120px', title: 'ETA', index: 'ttt' },
    { width: '120px', title: 'FBA运输方式', index: 'ttt' },
    { width: '120px', title: '备注', index: 'ttt' },
    {
      title: 'Action',
      width: 120,
      fixed: 'right',
      buttons: [
        {
          text: 'Edit',
          type: 'none',
          click: (e) => {
            this.choosedId = e.id;
            this.showEdit(e.id);
          },
        },
      ],
    },
  ];

  searchDate: any;
  channelList: any;
  agentCustomerList: any;
  shipmentData: GetShipmentListInput = {
    searchText: '',
    agentCustomerIds: [],
    channel: '',
    startTime: null,
    endTime: null,
    sorting: null,
    maxResultCount: 20,
    skipCount: 0,
  };
  advancedSearch = false;
  constructor(
    private bookingService: BookingService,
    private shipmentService: ShipmentService,
    private message: NzMessageService,
    private customerService: CustomerService,
  ) {}

  handleOk() {
    if (!this.acceptEditComponent.validate()) {
      return;
    }

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
        customer: null,
        agentCustomer: null,
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
          isCustomerCreate: false,
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
        id: this.choosedId,
      })
      .subscribe((res) => {
        this.message.success('Edit Success');
        this.getTableList();
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

  showEdit(id) {
    this.editModal = true;
    this.acceptEditComponent.validateForm.reset();
    while (this.acceptEditComponent.validateForm.controls?.lineItems.length !== 0) {
      this.acceptEditComponent.validateForm.controls.lineItems.removeAt(0);
    }
    this.acceptEditComponent.getBIndData(id);
  }

  handleCancel() {
    this.editModal = false;
  }

  ngOnInit() {
    this.getTableList();
    this.getChannelList();
    this.getAgentCustomerList('');
  }

  // 获取渠道
  getChannelList() {
    this.bookingService.getChannelList({}).subscribe((res) => {
      this.channelList = res.items;
    });
  }

  // 获取承运人
  getAgentCustomerList(name = '') {
    this.customerService
      .getForwardingCompanies({
        searchText: name,
        maxResultCount: 100,
        skipCount: 0,
      })
      .subscribe((res) => {
        this.agentCustomerList = res.items;
      });
  }

  getTableList() {
    this.shipmentService.getShipmentList(this.shipmentData).subscribe((res) => {
      this.listOfData = res;
    });
  }

  dateChange(data) {
    if (data) {
      this.shipmentData.startTime = data[0];
    }
    this.shipmentData.endTime = data[1];
  }

  onSearch() {
    this.shipmentData.skipCount = 0;
    this.shipmentData.maxResultCount = 20;
    this.getTableList();
  }

  onClear() {
    this.shipmentData.searchText = '';
    this.shipmentData.agentCustomerIds = [];
    this.shipmentData.channel = '';
    this.shipmentData.startTime = null;
    this.shipmentData.endTime = null;
    this.shipmentData.sorting = null;
    this.searchDate = null;
  }
}
