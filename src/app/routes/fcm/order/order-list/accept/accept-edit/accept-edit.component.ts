import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-order-accept-edit',
  templateUrl: './accept-edit.component.html',
  styleUrls: ['./accept-edit.component.less'],
})
export class AcceptEditComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
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
      addressList: new FormArray([]),
    });
    debugger;
    this.addAddressListRow();
  }

  addAddressListRow() {
    let row: FormGroup = this.fb.group({
      address: ['这是我的地址', [Validators.required]],
      tables: new FormArray([]),
    });

    this.addTablesRow(row);
    (this.validateForm.controls.addressList as FormArray).push(row);
  }

  addTablesRow(row: FormGroup) {
    debugger;
    let table: FormGroup = this.fb.group({
      a: ['123', [Validators.required]],
      b: [null, [Validators.required]],
      c: [null, [Validators.required]],
      d: [null],
      e: [null],
    });

    (row.controls.tables as FormArray).push(table);
  }

  removeTablesRow(index: number, tindex: number) {
    this.validateForm.controls.addressList['controls'][index].controls.tables.removeAt(tindex);
  }
}
