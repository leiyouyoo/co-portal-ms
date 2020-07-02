import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less'],
})
export class OrderListComponent implements OnInit {
  listOfData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  validateForm: FormGroup;
  openBookings = false;
  date = null;
  loading = false;

  constructor( public fb : FormBuilder ) {}

  onStartChange() {
    this.validateForm.patchValue({ creatDate: null });
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      creatDate: [null],
    });
  }
  closeBooking(){
    this.openBookings = false;
  }

  showBooking(): void {
    this.openBookings = true;
    this.validateForm.patchValue({ creatDate: null });
  }

  handleOk(): void {
    this.loading = true;
    console.log(this.validateForm.value.creatDate);
    this.closeBooking();
    this.loading = false;
  }
}
