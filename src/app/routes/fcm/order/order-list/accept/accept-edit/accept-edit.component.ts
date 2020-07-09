import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-order-accept-edit',
  templateUrl: './accept-edit.component.html',
  styleUrls: ['./accept-edit.component.less'],
})
export class AcceptEditComponent implements OnInit {
  validateForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      agentCustomerId: [null, [Validators.required]],
      serviceUserId: [null, [Validators.required]],
      cargoPutAwayDate: [null, [Validators.required]],
      transportationMode: [1, [Validators.required]],
      channel: [null, [Validators.required]],
      shipmentNo: [null],
      carrierBookingNo: [null],
      customerId: [null, [Validators.required]],
      customsCustomerId: [],
      customsClearanceCustomerId: [],
      contactId: [],
      fbaPickUpMethodType: [1],
      originAddressId: [],
      deliveryDate: [],
      fbaDeliveryType: [1],
      fbaDeliveryTypeRemark: [],
      commodity: [],
      expressNo: [],
      expressNoRemark: [],
      lineItems: new FormArray([]),
    });
    debugger;
    this.addAddressListRow();
  }

  addAddressListRow() {
    let row: FormGroup = this.fb.group({
      address: ['这是我的地址', [Validators.required]],
      shipmentLineItem: new FormArray([]),
    });

    this.addTablesRow(row);
    (this.validateForm.controls.lineItems as FormArray).push(row);
  }

  addTablesRow(row: FormGroup) {
    let table: FormGroup = this.fb.group({
      fbaNo: [],
      referenceId: [null],
      totalQuantity: [null, [Validators.required]],
      totalWeight: [null, [Validators.required]],
      totalVolume: [null, [Validators.required]],
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
}
