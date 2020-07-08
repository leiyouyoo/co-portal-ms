export const shipmentStatus = {
  0: 'Seller \'s Location / Booked',
1: 'In Transit to Departure Port',
2: 'Departure Port',
3: 'In Transit to Arrival Port',
4: 'Arrival  port',
5: 'In Transit to Final Destination',
6: 'Final destination',
  10: 'Completed',
}

export enum ShipmentStatusEnum {
  SellerLocation,
  OriginStopOff,
  InTransitToDeparturePort,
  DeparturePort,
  InTransitToArrivalPort,
  ArrivalPort,
  InTransitToFinalDestination,
  DestinationStopOff,
  FinalDestination,
  Canceled,
  Completed,
}
