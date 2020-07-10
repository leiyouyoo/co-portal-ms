import { Component, OnInit, ViewChild } from '@angular/core';
import { AddOrderComponent } from '../add-order/add-order.component';
import { STColumn, STColumnBadge } from '@co/cbc';
import { EnterWarehouseModalComponent } from './enter-warehouse-modal/enter-warehouse-modal.component';
import { ShipmentService, PreShipmentListInput } from 'src/app/service/fcm';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd';

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

  @ViewChild('st') st: any;

  isAddVisible = false;
  isVisible = false;
  date = null;
  listOfData = [];
  columns: STColumn[] = [
    {
      title: this.translate.instant('Freight Method'),
      index: 'transportationMode',
      width: 80,
      type: 'enum',
      enum: {
        0: this.translate.instant('NotSet'),
        1: this.translate.instant('Ocean'),
        2: this.translate.instant('Air'),
        3: this.translate.instant('Truck'),
        4: this.translate.instant('Rail'),
      },
    },
    { title: this.translate.instant('Shipment No'), index: 'shipmentNo', width: 80 },
    { title: this.translate.instant('Order time'), index: 'creationTime', width: 130, type: 'date', filterType: 'date' },
    { title: this.translate.instant('Sales'), index: 'serviceUser', width: 80 },
    { title: this.translate.instant('Client'), index: 'customerName', width: 80 },
    { title: this.translate.instant('Contact Person'), index: 'contactName', width: 80 },
    { title: this.translate.instant('Delivery Address'), index: 'address', width: 80 },
    {
      title: this.translate.instant('Delivery method'),
      index: 'fbaPickUpMethodType',
      width: 80,
      type: 'enum',
      enum: { 0: 'NotSet', 1: this.translate.instant('DeliveryGoodsByMyself'), 2: this.translate.instant('PickUpByCityocean') },
    },
    { title: this.translate.instant('Delivery time'), index: 'cargoReadyDate', width: 130, type: 'date', filterType: 'date' },
    { title: this.translate.instant('Origin Location'), index: 'originAddress', width: 80 },
    { title: this.translate.instant('Delivery warehouse'), index: 'originWarehouse', width: 80 },
    { title: this.translate.instant('Country'), index: 'country', width: 80 },
    { title: this.translate.instant('Commodity'), index: 'commodity', width: 80 },
    { title: this.translate.instant('Volume(CBN)'), index: 'volume.value', width: 80 },
    { title: this.translate.instant('Packages(CTN)'), index: 'quantity.value', width: 80 },
    { title: this.translate.instant('Weight(KG)'), index: 'weight.value', width: 80 },
    { title: this.translate.instant('Channel'), index: 'channel', width: 80 },
    { title: this.translate.instant('Putaway date'), index: 'cargoPutAwayDate', width: 130, type: 'date', filterType: 'date' },
    { title: this.translate.instant('Shipping Port Office'), index: 'serviceCompany', width: 80 },
    { title: 'FBA NO', index: 'fbano', width: 80 },
    { title: this.translate.instant('Carrier'), index: 'agentCustomer', width: 80 },
    { title: this.translate.instant('Creat By'), index: 'creator', width: 80 },
    {
      title: this.translate.instant('Action'),
      width: 120,
      fixed: 'right',
      buttons: [
        {
          text: this.translate.instant('Edit'),
          type: 'none',
          click: (e) => {
            console.log(e);
          },
        },
        {
          text: this.translate.instant('Delete'),
          type: 'none',
          click: () => { },
        },
      ],
    },
  ];

  listSelectIds: Array<string> = []; // 预报列表选中值
  preListTotal: number = 0; //预报列表总条数

  constructor(private shipmentService: ShipmentService, public translate: TranslateService, private message: NzMessageService) { }

  ngOnInit() {
    this.getPreListData();
  }

  getPreListData(skipCount = 0) {
    let parame: PreShipmentListInput = {
      transportationMode: null,
      creationTime: null,
      serviceUserId: null,
      customerId: null,
      fbaPickUpMethodType: null,
      cargoPutAwayDate: null,
      serviceCompanyId: null,
      agentCustomerId: null,
      contact: null,
      shipmentNo: null,
      destinationAddress: null,
      originAddress: null,
      originWarehouse: null,
      country: null,
      channel: null,
      fbaNo: null,
      creatorUser: null,
      sorting: null,
      skipCount: skipCount,
      maxResultCount: 10,
    }
    this.shipmentService
      .getAllPreShipment(parame)
      .subscribe((res) => {
        this.listOfData = res.items;
        this.preListTotal = res.totalCount;
        console.log(res, 'preList');
      });
  }

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

  refresh(): void {
    this.st.reset();
  }

  enterWareHouse(): void {
    if (this.listSelectIds.length > 0) {
      this.enterWarehouseModalComponent.showModal();
    } else {
      this.message.warning(this.translate.instant('Please selected the order'));
    }
  }

  checkChange(e): void {
    e.type === 'pi' && this.getPreListData((e.pi - 1) * 10);
    e.type === 'checkbox' &&
      (this.listSelectIds =
        e?.checkbox?.length > 0
          ? e.checkbox.map((item) => {
            return item.id;
          })
          : []);
  }
}
