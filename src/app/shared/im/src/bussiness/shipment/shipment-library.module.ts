import { NgModule } from '@angular/core';
import { ShipmentStatusPipe } from './pipes/shipment-status.pipe';

const pipes = [ShipmentStatusPipe];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes],
})
export class ImShipmentLibraryModule {}

export * from './class/TransportationMode';
export * from './entities/ShipmentDetail';
export * from './entities/shipmentStatus';
export * from './entities/VesselTrackPoint';
export * from './models/FreightMethodType';
export * from './service/shipment.service';
