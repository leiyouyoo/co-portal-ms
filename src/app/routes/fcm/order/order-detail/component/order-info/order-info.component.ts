import { Component, OnInit, Input } from '@angular/core';
import { ShipmentDto } from 'src/app/service/fcm';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.less']
})
export class OrderInfoComponent implements OnInit {

  @Input()
  orderInfo: ShipmentDto;

  fbaPickUpMethodTypePipe = {
    0: this.translate.instant('NotSet'),
    1: this.translate.instant('DeliveryGoodsByMyself'),
    2: this.translate.instant('PickUpByCityocean')
  }

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
