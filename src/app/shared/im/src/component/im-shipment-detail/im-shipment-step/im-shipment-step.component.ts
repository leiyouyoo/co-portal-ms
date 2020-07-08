import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ShipmentDetail, ShipmentStatusEnum, FreightMethodType } from '../../../bussiness/shipment/shipment-library.module';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'im-shipment-step',
  templateUrl: './im-shipment-step.component.html',
  styleUrls: ['./im-shipment-step.component.less'],
})
export class ImShipmentStepComponent implements OnInit, OnChanges {
  @Input() shipment: ShipmentDetail = {} as any;
  @Input() @InputBoolean() statusHighlight = false;

  nzCurrent = 0;

  readonly ShipmentStatusEnum = ShipmentStatusEnum;
  readonly freightMethodType = FreightMethodType;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.shipment.status) {
      case ShipmentStatusEnum.SellerLocation:
      case ShipmentStatusEnum.OriginStopOff:
      case ShipmentStatusEnum.InTransitToDeparturePort:
        this.nzCurrent = 0;
        break;
      case ShipmentStatusEnum.DeparturePort:
      case ShipmentStatusEnum.InTransitToArrivalPort:
        this.nzCurrent = 1;
        break;
      case ShipmentStatusEnum.ArrivalPort:
      case ShipmentStatusEnum.InTransitToFinalDestination:
        this.nzCurrent = 2;
        break;
      case ShipmentStatusEnum.DestinationStopOff:
      case ShipmentStatusEnum.FinalDestination:
      case ShipmentStatusEnum.Completed:
        this.nzCurrent = 3;
        break;
      default:
    }
  }

  getCompanyName(key: string) {
    let resultArr = [];

    try {
      return this.shipment.routeDetails[key].map(o => o.customerName).join(', ');
    } catch (e) {}
  }
}
