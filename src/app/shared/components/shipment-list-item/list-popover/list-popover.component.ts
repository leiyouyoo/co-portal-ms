import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-list-popover',
  templateUrl: './list-popover.component.html',
  styleUrls: ['./list-popover.component.less'],
})
export class ListPopoverComponent implements OnInit {
  @Input() shipment: any;
  @Input() className: string;
  eventList: any[] = [];
  @Input() location = 0; //位置 0：起始门 1：起始港 2：目的港 3：目的门
  readonly ShipmentBusinessEventType = ShipmentBusinessEventType;
  _showPickUp = false;
  @Input() set showPickUp(val: boolean) {
    this._showPickUp = val;
  }
  @Input() active = false;
  get showPickUp(): boolean {
    return this._showPickUp && this.shipment.freightMethodType === 1;
  }
  exceptionMessage = '';
  isDanger = false; //异常
  @Input() totalContainer = 0;
  @Input() pickupCount = 0;

  constructor() { }

  ngOnInit() {
    /* 正常事件 */
    this.eventList = (this.shipment.shipmentEventGroups || []).filter(
      (o) => o.isException === false && o.happenNode === this.location + 1,
    );

    /* 异常事件 */
    const exceptionEvent = this.shipment._exceptionEvent;
    if (exceptionEvent) {
      this.isDanger = exceptionEvent.happenNode === this.location + 1;
      if (this.isDanger) {
        this.exceptionMessage = exceptionEvent.subject;
      }
    }
  }
  isShowEventPopover(): boolean {
    if (this.eventList.length) return true;
    if (this.isDanger) return true;
    if (this.eventList.length) return true;
    if (!(this.shipment && this.shipment.routeDetails)) return false;
    const shipment = this.shipment;
    switch (this.location) {
      case 0:
      case 3:
        return false;
      case 1:
        return !!(
          shipment.routeDetails.siCutOffDate ||
          shipment.routeDetails.vgmCutOffDate ||
          shipment.routeDetails.cyCutOffTime
        );
      case 2:
        return !!(shipment.routeDetails.availableDate || shipment.routeDetails.lastFreeDate);
    }
  }
  onClick() {
    debugger;
  }
}

export enum ShipmentBusinessEventType {
  Unknown = 0,
  Shipment = 1,
  ShipmentItem = 2,
  ShipmentContainer = 3,
  Bill = 8,
}

