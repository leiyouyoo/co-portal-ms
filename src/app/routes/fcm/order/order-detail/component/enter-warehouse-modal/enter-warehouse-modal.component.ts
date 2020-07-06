import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'enter-warehouse-modal',
  templateUrl: './enter-warehouse-modal.component.html',
  styleUrls: ['./enter-warehouse-modal.component.less']
})
export class EnterWarehouseModalComponent implements OnInit {

  validateForm: FormGroup;
  isVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
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
      console.log(this.validateForm.get('data').value)
      this.isVisible = false;
    }
  }

}
