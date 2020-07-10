import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CustomerService, CustomerListDto, ContactExternalService, LocationExternalService } from 'src/app/service/crm';

import { OrganizationUnitService, CompanyConfigureService } from '@co/cds';
import { BookingService } from 'src/app/service/csp';
import { ShipmentService } from 'src/app/service/fcm';

@Component({
  selector: 'app-order-accept-edit',
  templateUrl: './accept-edit.component.html',
  styleUrls: ['./accept-edit.component.less'],
})
export class AcceptEditComponent implements OnInit {
  validateForm: any;
  customerList: any;
  cantactList: any;
  addressList: any;
  originAddressList: any;
  saleUserList: any;
  channelList: any;
  serviceCompanyList: any;
  agentCustomerList: any;
  customsCustomerList: any;
  destinationWarehouseList: any;
  editModal = false;
  fbaNo: any;
  constructor(
    private locationExternalService: LocationExternalService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private customerService: CustomerService,
    private organizationUnitService: OrganizationUnitService,
    private contactExternalService: ContactExternalService,
    private companyConfigureService: CompanyConfigureService,
    private shipmentService: ShipmentService,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      agentCustomerId: [null, [Validators.required]],
      serviceUserId: [null, [Validators.required]],
      cargoPutAwayDate: [null, [Validators.required]],
      transportationMode: [null, [Validators.required]],
      channel: [null, [Validators.required]],
      shipmentNo: [null],
      country: [null],
      customerType: [null],
      serviceCompanyId: [null],
      carrierBookingNo: [null],
      customerId: [null, [Validators.required]],
      customsCustomerId: [],
      customsClearanceCustomerId: [],
      contactId: [],
      tradeType: [3],
      fbaPickUpMethodType: [1],
      originAddressId: [],
      originWarehouseId: [],
      deliveryDate: [],
      fbaDeliveryType: [1],
      fbaDeliveryTypeRemark: [],
      commodity: [],
      expressNo: [],
      expressNoRemark: [],
      lineItems: new FormArray([]),
    });

    this.addAddressListRow();

    // 获取服务
    this.getCustomerList();
    this.getSaleUsers();
    this.getAgentCustomerList();
    this.getByPlaceOrLocation();
    this.getCustomerByType();
    this.getDestinationWarehouseList();
  }

  // 获取交货仓库
  getDestinationWarehouseList() {
    this.locationExternalService.getFBALocations({ isCityocean: true }).subscribe((res) => {
      this.destinationWarehouseList = res.items;
    });
  }

  // 获取联系人
  getContactList(id) {
    this.contactExternalService
      .getByCustomerAndPartner({
        customerId: id,
      })
      .subscribe((res) => {
        this.cantactList = res.items;
      });
  }

  // 获取渠道
  getChannelList() {
    this.validateForm.get('channel').setValue(null);
    this.bookingService.getChannelList({ freightMethodType: this.validateForm.value.transportationMode }).subscribe((res) => {
      this.channelList = res.items;
    });
  }

  // 获取地址
  getCustomerLocationAndFBALocations(id) {
    this.locationExternalService.getCustomerLocationAndFBALocations({ customerId: id }).subscribe((res) => {
      this.addressList = res.items;
    });
  }

  // 获取口岸
  getByPlaceOrLocation() {
    this.companyConfigureService.getByPlaceOrLocation({}).subscribe((res) => {
      this.serviceCompanyList = res.items;
    });
  }

  getCustomerByType() {
    this.customerService.getPageCustomerByType({ customerType: 6 }).subscribe((res) => {
      this.customsCustomerList = res.items;
    });
  }

  getBIndData(id) {
    this.shipmentService.getForUpdate({ id: id }).subscribe((res) => {
      res.addressItems?.forEach((e) => {
        this.addAddressListRow(e);
      });

      this.fbaNo = res.shipmentNo;
      this.validateForm.patchValue({
        agentCustomerId: res.agentCustomerId,
        serviceUserId: res.serviceUserId,
        cargoPutAwayDate: res.pickUpTimeRange,
        transportationMode: res.transportationMode,
        channel: res.booking.channel,
        shipmentNo: res.shipmentNo,
        serviceCompanyId: res.booking.serviceCompanyId,
        carrierBookingNo: res.oceanShipment.carrierBookingNo,
        customerId: res.customerId,
        customsCustomerId: res.customsCustomerId,
        customsClearanceCustomerId: res.customsClearanceCustomerId,
        contactId: res.booking.contactId,
        tradeType: res.tradeType,
        fbaPickUpMethodType: res.booking.fbaPickUpMethodType,
        originAddressId: res.booking.originAddressId,
        originWarehouseId: res.booking.originWarehouseId,
        deliveryDate: res.booking.deliveryDate,
        fbaDeliveryType: res.fbaShipment.fbaDeliveryType,
        fbaDeliveryTypeRemark: res.fbaShipment.fbaDeliveryTypeRemark,
        commodity: res.booking.commodity,
        expressNo: res.fbaShipment.expressNo,
        expressNoRemark: res.fbaShipment.expressNoRemark,
      });
    });
  }

  // 获取交货位置
  getLocationByCustomer(id) {
    this.locationExternalService.getLocationByCustomer({ customerId: id }).subscribe((res) => {
      this.originAddressList = res.items;
    });
  }

  // 获取业务员
  getSaleUsers(name = '') {
    this.organizationUnitService.getSaleUsers({ searchText: name, maxResultCount: 1000, skipCount: 0 }).subscribe((res) => {
      this.saleUserList = res.items;
    });
  }

  // 获取承运人
  getAgentCustomerList(name = '') {
    this.customerService
      .getForwardingCompanies({
        searchText: name,
        maxResultCount: 400,
        skipCount: 0,
      })
      .subscribe((res) => {
        this.agentCustomerList = res.items;
      });
  }

  getCustomerList(name = null, id = null) {
    this.customerService.getDepartmentCustomer({ name: name, customerId: id }).subscribe((res) => {
      this.customerList = res;
    });
  }

  onSearchCustomerList(name) {
    if (!name) {
      return;
    }
    this.customerService.getPageCustomerByType({ customerType: 6, name: name }).subscribe((res) => {
      this.customsCustomerList = res.items;
    });
  }

  bindCustomerData(customerId) {
    if (customerId) {
      const data = this.customerList?.items.find((e) => e.id === customerId);
      if (data) {
        let key = '';
        switch (data.customerType) {
          case 1:
            key = '船东';
            break;
          case 2:
            key = '航空公司';
            break;
          case 3:
            key = '货代';
            break;
          case 4:
            key = '直客';
            break;
          case 5:
            key = '拖车行';
            break;
          case 6:
            key = '报关行';
            break;
          case 7:
            key = '仓储';
            break;
          case 8:
            key = '堆场';
            break;
          case 9:
            key = '铁路';
            break;
          case 10:
            key = '快递';
            break;
          case 11:
            key = '码头';
            break;
          case 12:
            key = '其他';
            break;
          default:
            break;
        }

        this.validateForm.patchValue({
          customerType: key,
        });
      }
      this.getCustomerLocationAndFBALocations(customerId);
      this.getContactList(customerId);
      this.getLocationByCustomer(customerId);
    }
  }

  addAddressListRow(data?: any) {
    let row: FormGroup = this.fb.group({
      address: [data?.address || null, [Validators.required]],
      shipmentLineItem: new FormArray([]),
    });

    if (data) {
      data.lineItems.forEach((e) => {
        this.addTablesRow(row, e);
      });
    } else {
      this.addTablesRow(row);
    }

    (this.validateForm.controls.lineItems as FormArray).push(row);
  }

  addTablesRow(row: FormGroup, data?: any) {
    let table: FormGroup = this.fb.group({
      fbaNo: [data?.fbaNo || null],
      referenceId: [data?.referenceId || null],
      totalQuantity: [data?.totalQuantity?.value || null, [Validators.required]],
      totalWeight: [data?.totalWeight?.value || null, [Validators.required]],
      totalVolume: [data?.totalVolume?.value || null, [Validators.required]],
    });

    (row.controls.shipmentLineItem as FormArray).push(table);
  }

  removeTablesRow(index: number, tindex: number) {
    this.validateForm.controls.lineItems['controls'][index].controls.shipmentLineItem.removeAt(tindex);
  }

  removeAddressListRow(index: number) {
    this.validateForm.controls.lineItems.removeAt(index);
  }

  validate() {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      if (i === 'lineItems') {
        const controls = (this.validateForm.controls[i] as FormArray).controls;
        for (const z in controls) {
          const formGroup = controls[z] as FormGroup;
          // tslint:disable-next-line: forin
          for (const q in formGroup.controls) {
            if (q === 'shipmentLineItem') {
              const mControls = (formGroup.controls[q] as FormArray).controls;
              // tslint:disable-next-line: forin
              for (const l in mControls) {
                const lControls = (mControls[l] as FormArray).controls;
                // tslint:disable-next-line: forin
                for (const b in lControls) {
                  lControls[b].markAsDirty();
                  lControls[b].updateValueAndValidity();
                }
              }
            } else {
              formGroup.controls[q].markAsDirty();
              formGroup.controls[q].updateValueAndValidity();
            }
          }
        }
      } else {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    return this.validateForm.valid;
  }

  addressChanged(event, index) {
    // 产品说取第一个为准
    if (event && index === 0) {
      const detail = this.addressList?.find((e) => e.id === event);
      if (detail) {
        var tradeType = 3;
        if (detail.IsForeign) {
          tradeType = 2;
        }
        this.validateForm.patchValue({
          country: detail.country,
          tradeType: tradeType,
        });
      }
    }
  }

  changeFbaPickUpMethodType(data) {
    this.validateForm.patchValue({
      originWarehouseId: null,
    });
  }
}
