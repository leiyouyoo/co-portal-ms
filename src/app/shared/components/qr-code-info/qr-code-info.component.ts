import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-info',
  templateUrl: './qr-code-info.component.html',
  styleUrls: ['./qr-code-info.component.less']
})
export class QrCodeInfoComponent implements OnInit {

  data :any ={
    waybillNo : "OSEMNB2020C00173",
    FBANo : "FBA15MYNBP2G",
    number : "32CTNS",
    county : "美国",
    shippingAddress: "海外仓",
    address : "4255 E Airport Drive Ontario, CA 91761 USA",
    customer :"某某某",
    tel :"0755-99999999"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
