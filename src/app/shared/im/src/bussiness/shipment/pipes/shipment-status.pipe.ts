import { Pipe, PipeTransform } from '@angular/core';
import { ShipmentStatusEnum } from '../entities/shipmentStatus';

@Pipe({
  name: 'shipmentStatus'
})
export class ShipmentStatusPipe implements PipeTransform {

  transform(value: ShipmentStatusEnum, ...args: any[]): any {
    switch (value) {
      case ShipmentStatusEnum.SellerLocation:
        return `Seller's Location / Booked`;
      case ShipmentStatusEnum.InTransitToDeparturePort:
        return `In Transit to Departure Port`;
      case ShipmentStatusEnum.DeparturePort:
        return `Departure Port`;
      case ShipmentStatusEnum.InTransitToArrivalPort:
        return `In Transit to Arrival Port`;
      case ShipmentStatusEnum.ArrivalPort:
        return `Arrival  port`;
      case ShipmentStatusEnum.InTransitToFinalDestination:
        return `In Transit to Final Destination`;
      case ShipmentStatusEnum.FinalDestination:
        return `Final destination`;
      default:
        return '';
    }
  }

}
