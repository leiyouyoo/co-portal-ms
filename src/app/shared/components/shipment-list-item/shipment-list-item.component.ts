import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShipmentStatusEnum, ShipmentDetail, FreightMethodType, ShipmentEvent } from '@cityocean/basicdata-library';
import { InputBoolean } from 'ng-zorro-antd';
import { ImBroadcastService } from '@cityocean/im-template-library';

@Component({
  selector: 'shipment-list-item',
  templateUrl: './shipment-list-item.component.html',
  styleUrls: ['./shipment-list-item.component.less'],
})
export class ShipmentListItemComponent implements OnInit {
  private _shipment: ShipmentDetail;
  @Input() set shipment(val) {
    this._shipment = val;
    if (val) {
      this.setNzCurrent();
    }
  }
  get shipment() {
    return this._shipment;
  }
  @Input() @InputBoolean() simple = false;
  @Input() @InputBoolean() showDetailInfo = true;
  readonly FreightMethodType = FreightMethodType;
  readonly ShipmentStatusEnum = ShipmentStatusEnum;
  nzCurrent = 0;
  constructor(public router: Router, private imBroadcastService: ImBroadcastService) { }

  ngOnInit() { }

  goDetail() {
    // if (this.simple) return;
    // this.router.navigate(['/shipments/detail', this.shipment.id]);
  }
  getContainerString() {
    const items = this.shipment.containerTypes;
    if (this.shipment.freightMethodType === FreightMethodType.Ocean) {
      if (this.shipment.shipmentType === 0) {
        return items
          .filter((o) => o.value !== '0')
          .map((o) => `${o.value}*${o.name}`)
          .join(' ');
      }
    }
  }
  setNzCurrent() {
    this.nzCurrent = this.shipment.status;
    if (this.nzCurrent > ShipmentStatusEnum.OriginStopOff) {
      this.nzCurrent -= 1;
    }
    if (this.nzCurrent > ShipmentStatusEnum.DestinationStopOff) {
      this.nzCurrent -= 1;
    }
  }
  onCustomerServiceClick(e: MouseEvent) {
    e.stopPropagation();
    this.imBroadcastService.broadcast('shipment', {
      customerserviceType: 'Shipment',
      customerserviceId: this.shipment.id,
    });
  }
}
