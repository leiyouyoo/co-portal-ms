import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../../service/crm/customer.service';
import { CompanyConfigureService } from '../../../../service/platform/company-configure.service';
import { LocationExternalService } from '../../../../service/crm/location-external.service';
import { CommodityService } from '../../../../service/pub/commodity.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less'],
})
export class AddOrderComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() isVisible = false;
  addressList = [
    {
      address: null,
      tableList: [
        {
          shipmentId: 'string',
          totalQuantity: {
            value: 0,
            unit: 'string',
          },
          totalWeight: {
            value: 0,
            unit: 'string',
          },
          totalVolume: {
            value: 0,
            unit: 'string',
          },
          purchaseOrderNo: 'string',
          productName: 'string',
          productSku: 'string',
          address: {
            name: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
            countryCode: 'string',
            zip: 'string',
            unlocode: 'string',
            timezone: 'string',
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
  transportationModeList = [
    { name: '海运', id: 1 },
    { name: '空运', id: 2 },
  ];
  serviceCompanyList = [];
  destinationWarehouseList = [];
  agentCustomerList = [];
  customerFilter: any = {
    scope: CustomerService.Department,
  };
  channelList = [
    { name: '海卡', id: 1 },
    { name: '海卡（包税）', id: 2 },
  ];
  portReq = { isOcean: false, regionIds: [], isPaged: false, maxResultCount: 1000 };
  country;
  commitData: {
    customerId: 'string';
    serviceUserId: 0;
    transportationMode: 0;
    agentCustomerId: 'string';
    transferNo: 'string';
    customsCustomerId: 'string';
    customsClearanceCustomerId: 'string';
    booking: {
      serviceCompanyId: 'string';
      channel: 'string';
      fbaPickUpMethodType: 'string';
      contactId: 'string';
      destinationWarehouseId: 'string';
      deliveryDate: '2020-07-06T06:17:44.095Z';
      commodity: 'string';
    };
    oceanShipment: {
      carrierBookingNo: 'string';
    };
    fbaShipment: {
      expressNo: 'string';
      warehouseNo: 'string';
      expressNoRemark: 'string';
      huoLalaOrderNo: 'string';
      fbaDeliveryType: 'string';
      fbaDeliveryTypeRemark: 'string';
      cargoPutAwayDate: '2020-07-06T06:17:44.095Z';
    };
    lineItems: [
      {
        shipmentId: 'string';
        totalQuantity: {
          value: 0;
          unit: 'string';
        };
        totalWeight: {
          value: 0;
          unit: 'string';
        };
        totalVolume: {
          value: 0;
          unit: 'string';
        };
        purchaseOrderNo: 'string';
        productName: 'string';
        productSku: 'string';
        address: {
          name: 'string';
          city: 'string';
          state: 'string';
          country: 'string';
          countryCode: 'string';
          zip: 'string';
          unlocode: 'string';
          timezone: 'string';
        };
      },
    ];
    id: 'string';
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
    this.getCustomerList();
    this.getAgentCustomerList();
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      customerId: [null, [Validators.required]],
      transportationMode: [null, [Validators.required]],
      contactId: [null],
      transferNo: [null],
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
    });
  }
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private locationExternalService: LocationExternalService,
    private companyConfigureService: CompanyConfigureService,
    private commodityService: CommodityService,
  ) {}
  getCustomerList(name = null, id = null) {
    this.customerService.getDepartmentCustomer({ name: name, customerId: id }).subscribe((res) => {
      this.customerList = res.items;
    });
  }
  // 获取承运人
  getAgentCustomerList(name = null, id = null) {
    this.customerService
      .getForwardingCompanies({
        searchText: name,
        // IsOwnDepartment: true,
        maxResultCount: 1000,
        skipCount: 0,
      })
      .subscribe((res) => {
        this.agentCustomerList = res.items;
      });
  }
  // 获取联系人
  getContactList(id) {
    this.locationExternalService.getLocationByCustomer({ customerId: id }).subscribe((res) => {
      this.cantactList = res.items;
    });
  }

  // 获取口岸
  getByPlaceOrLocation(id) {
    let obj = { isActive: true, placeId: id, locationId: null };
    this.companyConfigureService.getByPlaceOrLocation(obj).subscribe((res) => {
      this.serviceCompanyList = res.items;
    });
  }
  // 获取地址
  getCustomerLocationAndFBALocations(id) {
    this.locationExternalService.getCustomerLocationAndFBALocations({ customerId: id }).subscribe((res) => {
      this.addressItemList = res.items;
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
        this.addressItemList = res.items;
      });
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  addAddress(index) {
    this.addressList.push({
      address: null,
      tableList: [
        {
          shipmentId: 'string',
          totalQuantity: {
            value: 0,
            unit: 'string',
          },
          totalWeight: {
            value: 0,
            unit: 'string',
          },
          totalVolume: {
            value: 0,
            unit: 'string',
          },
          purchaseOrderNo: 'string',
          productName: 'string',
          productSku: 'string',
          address: {
            name: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
            countryCode: 'string',
            zip: 'string',
            unlocode: 'string',
            timezone: 'string',
          },
        },
      ],
    });
  }
  deleteAddress(index) {
    if (this.addressList.length > 1) {
      this.addressList.splice(index, 1);
    }
  }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  addLine(index) {
    this.addressList[index].tableList.push({
      shipmentId: 'string',
      totalQuantity: {
        value: 0,
        unit: 'string',
      },
      totalWeight: {
        value: 0,
        unit: 'string',
      },
      totalVolume: {
        value: 0,
        unit: 'string',
      },
      purchaseOrderNo: 'string',
      productName: 'string',
      productSku: 'string',
      address: {
        name: 'string',
        city: 'string',
        state: 'string',
        country: 'string',
        countryCode: 'string',
        zip: 'string',
        unlocode: 'string',
        timezone: 'string',
      },
    });
  }
  deleteLine(index, childIndex) {
    this.addressList[index].tableList.splice(childIndex, 1);
  }
  resetModal() {}
}
