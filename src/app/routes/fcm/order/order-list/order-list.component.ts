import { Component, OnInit, ViewChild } from '@angular/core';
import { AddOrderComponent } from '../add-order/add-order.component';
import { STColumn, STColumnBadge } from '@co/cbc';
import { EnterWarehouseModalComponent } from './enter-warehouse-modal/enter-warehouse-modal.component';
import { ShipmentService } from 'src/app/service/fcm';
import { TranslateService } from '@ngx-translate/core';

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

  @ViewChild('st', null) st: any;

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
      enum: { 0: 'NotSet', 1: 'Ocean', 2: 'Air', 3: 'Truck', 4: 'Rail' },
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
      enum: { 0: 'NotSet', 1: 'DeliveryGoodsByMyself', 2: 'PickUpByCityocean' },
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
      title: '操作',
      width: 120,
      fixed: 'right',
      buttons: [
        {
          text: '编辑',
          type: 'none',
          click: (e) => {
            this.addOrderComponent.getForUpdate();
            this.addOrderComponent.actionType = 'update';
          },
        },
        {
          text: '删除',
          type: 'none',
          click: () => {},
        },
      ],
    },
  ];

  listSelectIds: Array<string> = []; // 预报列表选中值
  preListTotal: number = 0; //预报列表总条数

  constructor(private shipmentService: ShipmentService, public translate: TranslateService) {}

  ngOnInit() {
    this.getPreListData();
  }

  getPreListData(skipCount = 0) {
    this.shipmentService
      .getAllPreShipment({
        skipCount: skipCount,
        maxResultCount: 10,
      })
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
    this.enterWarehouseModalComponent.showModal();
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
