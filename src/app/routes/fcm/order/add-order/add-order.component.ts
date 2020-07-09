import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../../service/crm/customer.service';
import { CompanyConfigureService } from '../../../../service/platform/company-configure.service';
import { LocationExternalService } from '../../../../service/crm/location-external.service';
import { CommodityService } from '../../../../service/pub/commodity.service';
import { OrganizationUnitService } from '../../../../service/platform/organization-unit.service';
import { ShipmentService } from '../../../../service/fcm/shipment.service';
import { CreateOrUpdateShipmentInput } from 'src/app/service/fcm';
import { BookingService } from '../../../../service/csp/booking.service';
import { ContactExternalService } from '../../../../service/crm/contact-external.service';
import { CustomerSearchScope } from '@co/cds';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less'],
})
export class AddOrderComponent implements OnInit {
  @Input() isVisible = false;
  validateForm!: FormGroup;
  addressList = [
    {
      address: null,
      tableList: [
        {
          shipmentId: null,
          totalQuantity: {
            value: 0,
            unit: 'CTN',
          },
          totalWeight: {
            value: 0,
            unit: 'KG',
          },
          totalVolume: {
            value: 0,
            unit: 'CBM',
          },
          purchaseOrderNo: null,
          productName: null,
          productSku: null,
          referenceId: null,
          FBANo: null,
          address: {
            name: null,
            city: null,
            state: null,
            country: null,
            countryCode: null,
            zip: null,
            unlocode: null,
            timezone: null,
          },
        },
      ],
    },
  ]; // 地址数组
  customerList = [];
  cantactList = [];
  serviceUserList = [];
  addressItemList = [];
  commodityList = [];
  originAddressList = []; //交货位置
  transportationModeList = [
    { name: '海运', id: 1 },
    { name: '空运', id: 2 },
  ];
  serviceCompanyList = [];
  destinationWarehouseList = [];
  agentCustomerList = [];
  customerFilter: any = {
    scope: CustomerSearchScope.Department,
  };
  channelList = [];
  portReq = { isOcean: false, regionIds: [], isPaged: false, maxResultCount: 1000 };
  country;
  totalQuantity = 0; // 总件数
  totalWeight = 0; // 总重量
  totalVolume = 0; //总体积

  commitData: CreateOrUpdateShipmentInput = {
    agentCustomerId: null,
    tradeType: null,
    transferNo: null,
    customsCustomerId: null,
    customsClearanceCustomerId: null,
    serviceUserId: null,
    cargoReadyDate: null,
    incoterm: null,
    freightType: null,
    shipmentNo: null,
    booking: {
      fbaPickUpMethodType: null,
      contactId: null,
      destinationWarehouseId: null,
      deliveryDate: null,
      commodity: null,
      customerBookingId: null,
      originAddressId: null,
      originWarehouseId: null,
      destinationPortId: null,
      originPortId: null,
      destinationAddressId: null,
      id: null,
    },
    oceanShipment: { carrierBookingNo: null },
    fbaShipment: {
      expressNo: null,
      warehouseNo: null,
      expressNoRemark: null,
      huoLalaOrderNo: null,
      fbaDeliveryType: null,
      fbaDeliveryTypeRemark: null,
      cargoPutAwayDate: null,
    },
    lineItems: [],
    id: null,
  };

  listOfColumn = [
    {
      title: 'FBA号',
    },
    {
      title: 'Reference ID',

      priority: 3,
    },
    {
      title: '件数',

      priority: 2,
    },
    {
      title: '重量',

      priority: 1,
    },
    {
      title: '体积',

      priority: 1,
    },
    {
      title: '操作',

      priority: 1,
    },
  ];
  listOfData = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      customerId: [null, [Validators.required]],
      transportationMode: [null, [Validators.required]],
      contactId: [null],
      transferNo: [null],
      tradeType: [null],
      channel: [null, [Validators.required]],
      serviceUserId: [null, [Validators.required]], // 业务员
      serviceCompanyId: [null], //口岸
      agentCustomerId: [null], //承运人
      customsCustomerId: [null], //报关行客户Id
      customsClearanceCustomerId: [null], //清关行客户Id
      destinationWarehouseId: [null], // 交货仓库
      deliveryDate: [null],
      commodity: [null, [Validators.required]],
      carrierBookingNo: [null],
      expressNo: [null],
      warehouseNo: [null],
      expressNoRemark: [null],
      huoLalaOrderNo: [null],
      fbaDeliveryType: [null],
      fbaDeliveryTypeRemark: [null],
      cargoPutAwayDate: [null],
      fbaPickUpMethodType: [1],
      country: [null],
      originAddressId: [null],
    });
    this.getByPlaceOrLocation(); // 获取口岸
    this.getChannelList(); // 获取渠道
    this.getDestinationWarehouseList(); //交货仓库
  }
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private locationExternalService: LocationExternalService,
    private companyConfigureService: CompanyConfigureService,
    private organizationUnitService: OrganizationUnitService,
    private commodityService: CommodityService,
    private shipmentService: ShipmentService,
    private bookingService: BookingService,
    private contactExternalService: ContactExternalService,
  ) {}

  // 获取承运人
  getAgentCustomerList(name = null) {
    this.customerService
      .getForwardingCompanies({
        searchText: name,
        maxResultCount: 1000,
        skipCount: 0,
      })
      .subscribe((res) => {
        this.agentCustomerList = res.items;
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
  // 获取口岸
  getByPlaceOrLocation() {
    // let obj = { isActive: true, placeId: id, locationId: null };
    this.companyConfigureService.getByPlaceOrLocation({}).subscribe((res) => {
      this.serviceCompanyList = res.items;
    });
  }
  // 获取地址
  getCustomerLocationAndFBALocations(id) {
    this.locationExternalService.getCustomerLocationAndFBALocations({ customerId: id }).subscribe((res) => {
      this.addressItemList = res.items;
    });
  }
  // 获取交货仓库
  getDestinationWarehouseList() {
    this.locationExternalService.getFBALocations({ isCityocean: true }).subscribe((res) => {
      this.destinationWarehouseList = res.items;
    });
  }
  // 获取交货位置
  getLocationByCustomer(id) {
    this.locationExternalService.getLocationByCustomer({ customerId: id }).subscribe((res) => {
      this.originAddressList = res.items;
    });
  }
  // 获取业务员
  getSaleUsers(name = '', id) {
    this.organizationUnitService
      .getSaleUsers({ searchText: name, isOwnDepartment: true, sorting: '', maxResultCount: 1000, skipCount: 0 })
      .subscribe((res) => {
        this.serviceUserList = res.items;
      });
  }

  // 品名选择器
  getAllForUiPicker(text) {
    this.commodityService
      .getAllForUiPicker({
        searchText: text,
        maxResultCount: 1000,
        skipCount: 0,
        includeChildren: false,
        includeInvalid: false,
        ids: null,
        includeDeleted: false,
        sorting: '',
      })
      .subscribe((res) => {
        this.commodityList = res.items;
      });
  }
  //  根据客户获取其他信息
  getOtherData() {
    const id = this.validateForm.value.customerId;
    if (id) {
      this.getCustomerLocationAndFBALocations(id);
      this.getContactList(id);
      this.getLocationByCustomer(id);
    }
  }

  handleOk(): void {
    const reg = new RegExp(',', 'g');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.commitData.customerId = this.validateForm.value.customerId;
      this.commitData.serviceUserId = this.validateForm.value.serviceUserId;
      this.commitData.transportationMode = this.validateForm.value.transportationMode;
      this.commitData.agentCustomerId = this.validateForm.value.agentCustomerId;
      this.commitData.tradeType = this.validateForm.value.tradeType;
      this.commitData.transferNo = this.validateForm.value.transferNo;
      this.commitData.customsCustomerId = this.validateForm.value.customsCustomerId;
      this.commitData.booking.serviceCompanyId = this.validateForm.value.serviceCompanyId;
      this.commitData.booking.fbaPickUpMethodType = this.validateForm.value.fbaPickUpMethodType;
      this.commitData.booking.contactId = this.validateForm.value.contactId;
      if (this.validateForm.value.destinationWarehouseId) {
        this.commitData.booking.destinationWarehouseId = this.validateForm.value.destinationWarehouseId.id;
      }
      this.commitData.booking.deliveryDate = this.validateForm.value.deliveryDate;
      this.commitData.booking.commodity = this.validateForm.value.commodity.toString().replace(reg, '/');
      this.commitData.oceanShipment.carrierBookingNo = this.validateForm.value?.carrierBookingNo;
      this.commitData.lineItems = this.addressList;
      this.shipmentService.createOrUpdate(this.commitData).subscribe((res) => {
        this.isVisible = false;
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
    this.resetModal();
  }
  addAddress(index) {
    this.addressList.push({
      address: null,
      tableList: [
        {
          shipmentId: null,
          totalQuantity: {
            value: 0,
            unit: 'CTN',
          },
          totalWeight: {
            value: 0,
            unit: 'KG',
          },
          totalVolume: {
            value: 0,
            unit: 'CBM',
          },
          purchaseOrderNo: null,
          productName: null,
          productSku: null,
          referenceId: null,
          FBANo: null,
          address: {
            name: null,
            city: null,
            state: null,
            country: null,
            countryCode: null,
            zip: null,
            unlocode: null,
            timezone: null,
          },
        },
      ],
    });
  }
  deleteAddress(index) {
    if (this.addressList.length > 1) {
      this.addressList.splice(index, 1);
      this.count();
    }
  }

  addLine(index) {
    this.addressList[index].tableList.push({
      shipmentId: null,
      totalQuantity: {
        value: 0,
        unit: 'CTN',
      },
      totalWeight: {
        value: 0,
        unit: 'KG',
      },
      totalVolume: {
        value: 0,
        unit: 'CBM',
      },
      purchaseOrderNo: null,
      productName: null,
      productSku: null,
      referenceId: null,
      FBANo: null,
      address: {
        name: null,
        city: null,
        state: null,
        country: null,
        countryCode: null,
        zip: null,
        unlocode: null,
        timezone: null,
      },
    });
  }
  deleteLine(index, childIndex) {
    if (this.addressList[index].tableList.length > 1) {
      this.addressList[index].tableList.splice(childIndex, 1);
      this.count();
    }
  }
  resetModal() {
    this.validateForm.reset();
    this.validateForm.get('fbaPickUpMethodType').setValue(1);
    this.addressList = [
      {
        address: null,
        tableList: [
          {
            shipmentId: null,
            totalQuantity: {
              value: 0,
              unit: null,
            },
            totalWeight: {
              value: 0,
              unit: null,
            },
            totalVolume: {
              value: 0,
              unit: null,
            },
            purchaseOrderNo: null,
            productName: null,
            productSku: null,
            referenceId: null,
            FBANo: null,
            address: {
              name: null,
              city: null,
              state: null,
              country: null,
              countryCode: null,
              zip: null,
              unlocode: null,
              timezone: null,
            },
          },
        ],
      },
    ];
  }
  // 计算总数
  count() {
    const q = [],
      w = [],
      v = [];
    this.addressList.forEach((element) => {
      element.tableList.forEach((t) => {
        q.push(t.totalQuantity.value);
        w.push(t.totalWeight.value);
        v.push(t.totalVolume.value);
      });
    });
    this.totalQuantity = q.reduce((t, c) => {
      return (t += c);
    });
    this.totalVolume = v.reduce((t, c) => {
      return (t += c);
    });
    this.totalWeight = w.reduce((t, c) => {
      return (t += c);
    });
  }
  // 获取国家
  getData(value) {
    if (value) {
      this.validateForm.get('country').setValue(value.country);
    }
  }
}
