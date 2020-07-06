import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less'],
})
export class AddOrderComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() isVisible = false;
  addressList = [1]; // 地址数组
  radioValue = 'A';
  selectedValue;
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
      fbaPickUpMethodType: [null],
      country: [null],
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
    this.addressList.push(index++);
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
}
