import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FreightMethodType, ShipmentService, ShipmentStatusEnum, ShipmentDetail } from '../../bussiness/shipment/shipment-library.module';

interface LineItem {
  imo: string;
  mmsiNumber: string;
  vesselName: string;
  vesselCallNumber: string;
  countryOfDestination: string;
  navistatus: string;
  estimatedArrivalDateTime: string;
  latitudeDegree: string;
  longitudeDegree: string;
  postTime: string;
  id: number;
}

@Component({
  selector: 'lib-im-shipment-detail',
  templateUrl: './im-shipment-detail.component.html',
  styleUrls: ['./im-shipment-detail.component.less'],
})
export class ImShipmentDetailComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isShare = false;
  @Input() id = '';
  @Input() sample: boolean = false;
  @Input() set _RouteData(item: any) {
    this.__RouteData = item;
    this.ngOnInit();
  }
  @Output() showBussinessNo: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('map') mapDivElement: ElementRef<HTMLDivElement>;

  private __RouteData;
  public transportType: string = 'ship'; //'ship' 'air'
  public agreement: string = 'door-cy'; //'cy-cy' 'door-door' 'cy-door' 'door-cy'
  public state: number;

  public ExpectedDeliveryDate: any;
  public iconList: any[];
  lines: any[];
  icons: any[];
  dashedLines: any[];
  currentPositions: number[][];
  public route: ShipmentDetail;
  readonly ShipmentStatusEnum = ShipmentStatusEnum;
  mapHeight: number;
  readonly FreightMethodType = FreightMethodType;

  constructor(public shipmentService: ShipmentService) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }
  ngOnInit() {
    const fillData = data => {
      this.ExpectedDeliveryDate = data.mainESTTruckDeliveryDate;
      this.agreement = data.agreement;
      this.transportType =
        data.freightMethodType == FreightMethodType.Ocean ? 'ship' : data.freightMethodType == FreightMethodType.Air ? 'air' : '';
      this.agreement = data.agreement = (data.transportClausesString || '').toLowerCase();
      this.state = data.status;
      this.route = data;
    };

    if (this.__RouteData && this.__RouteData.routeDetails) {
      fillData(this.__RouteData);
      return;
    }

    if (this.id) {
      this.shipmentService.GetDetail(this.id).subscribe((res: any) => {
        this.showBussinessNo.emit(res.shipmentNo);
        fillData(res);
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.mapDivElement && this.mapDivElement.nativeElement) {
      setTimeout(() => {
        this.mapHeight = this.mapDivElement.nativeElement.clientWidth * (9 / 16);
      });
    }
  }
}
