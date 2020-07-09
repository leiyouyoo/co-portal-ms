import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ShipmentService } from 'src/app/service/fcm';

@Component({
  selector: 'enter-warehouse-modal',
  templateUrl: './enter-warehouse-modal.component.html',
  styleUrls: ['./enter-warehouse-modal.component.less']
})
export class EnterWarehouseModalComponent implements OnInit {

  validateForm: FormGroup;
  isVisible: boolean = false;

  @Input()
  ids: Array<string>;

  constructor(
    private fb: FormBuilder,
    private shipmentService: ShipmentService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      data: [null, [Validators.required]],
    });
  }

  submitForm() {

  }

  showModal() {
    this.isVisible = true;
  }

  onChange() {

  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      console.log(new Date(this.validateForm.get('data').value).toISOString())
      this.shipmentService.warehousing({ shipmentIds: this.ids, warehousingDate: new Date(this.validateForm.get('data').value).toISOString() }).subscribe(res => {
        console.log(res);
        this.isVisible = false;
      })
    }
  }

}
