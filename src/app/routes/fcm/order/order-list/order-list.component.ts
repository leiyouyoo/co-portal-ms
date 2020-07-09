import { Component, OnInit, ViewChild } from '@angular/core';
import { AddOrderComponent } from '../add-order/add-order.component';
import { STColumn, STColumnBadge } from '@co/cbc';
import { EnterWarehouseModalComponent } from './enter-warehouse-modal/enter-warehouse-modal.component';
import { ShipmentService } from 'src/app/service/fcm';

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
  listOfData = [];
  columns: STColumn[] = [
    { title: '运输方式', index: 'transportationMode', width: 80, type: 'enum', enum: { 0: 'NotSet', 1: 'Ocean', 2: 'Air', 3: 'Truck', 4: 'Rail' } },
    { title: '运单号', index: 'shipmentNo', width: 80 },
    { title: '下单日期', index: 'creationTime', width: 80 },
    { title: '业务员', index: 'serviceUser', width: 80 },
    { title: '客户', index: 'customerName', width: 80 },
    { title: '联系人', index: 'contactName', width: 80 },
    { title: '送货地址', index: 'address', width: 80 },
    { title: '送货方式', index: 'fbaPickUpMethodType', width: 80, type: 'enum', enum: { 0: 'NotSet', 1: 'DeliveryGoodsByMyself', 2: 'PickUpByCityocean' } },
    { title: '交货时间', index: 'cargoReadyDate', width: 80 },
    { title: '交货位置', index: 'originAddress', width: 80 },
    { title: '交货仓库', index: 'originWarehouse', width: 80 },
    { title: '国家', index: 'country', width: 80 },
    { title: '品名', index: 'commodity', width: 80 },
    { title: '体积(CBN)', index: 'volume.value', width: 80 },
    { title: '件数(CTN)', index: 'quantity.value', width: 80 },
    { title: '重量KG', index: 'weight.value', width: 80 },
    { title: '渠道', index: 'channel', width: 80 },
    { title: '入仓时间', index: 'cargoPutAwayDate', width: 80 },
    { title: '操作口岸', index: 'serviceCompany', width: 80 },
    { title: 'FBA NO', index: 'fbano', width: 80 },
    { title: '承运人', index: 'agentCustomer', width: 80 },
    { title: '创建人', index: 'creator', width: 80 },
  ];

  listSelectIds: Array<string> = [];  // 预报列表选中值
  preListTotal: number = 0;

  constructor(
    private shipmentService: ShipmentService
  ) { }

  ngOnInit() {
    this.getPreListData();
  }

  getPreListData(skipCount = 0) {
    this.shipmentService.getAllPreShipment({
      skipCount: skipCount,
      maxResultCount: 10
    }).subscribe(res => {
      this.listOfData = res.items;
      this.preListTotal = res.totalCount
      console.log(res, "preList");
    })
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

  enterWareHouse(): void {
    this.enterWarehouseModalComponent.showModal()
  }

  checkChange(e): void {
    console.log(e);
    e.type === 'pi' && this.getPreListData((e.pi - 1) * 10)
    e.type === 'checkbox' && (this.listSelectIds = e?.checkbox?.length > 0 ? e.checkbox.map(item => { return item.id }) : []);
  }

}
