export interface ShipmentDetail {
  customerId: number;
  shipmentNo: string;
  shipmentName: string;
  soNo: string;
  shipmentType: number;
  freightMethodType: number;
  status: number;
  state: number;
  mainESTTruckDeliveryDate: string;
  agreement: string;
  transportType: string;
  vessel: string;
  containerTypes: ContainerDisplay[];
  transportClausesId: string;
  transportClausesString: string;
  totalWeightString: string;
  totalVolumeString: string;
  consigneeShow: any;
  shiperShow: any;
  routeDetails: RouteDetails;
  shipmentExceptionEvents: ShipmentEvent[];
  shipmentEvents: ShipmentEvent[];
  shipmentEventGroups: ShipmentEvent[];
  portOfLoading: PortOfDischarge;
  portOfDischarge: PortOfDischarge;
  shipmentBookings: ShipmentBooking[];
  purchaseOrderIds: null;
  id: number;
  _exceptionEvent: ShipmentEvent;
}

interface ContainerDisplay {
  name: string;
  value: string;
}

export interface PortOfDischarge {
  code: string;
  name: string;
  fullName: string;
  regionId: string;
  regionName: string;
  countryName: string;
  countryId: null;
  longitude: null | string;
  latitude: null | string;
  id: string;
}

export interface RouteDetails {
  destinationPlaceDeliveredCount: number;
  containerCount: number;
  shipperInfos: ShipperInfo[];
  shipperDtos: ShipperDto[];
  siCutOffDate: string;
  vgmCutOffDate: string;
  cyCutOffTime: string;
  availableDate: string;
  lastFreeDate: string;
  originPortId: string;
  estTruckDeliveryOrignDate: string;
  actualTruckDeliveryOrignDate: string;
  estDepatureOrginPortDate: string;
  actualDepatureOrginPortDate: null;
  originPort: PortOfDischarge;
  carrierCustomerName: string;
  destinationPortId: string;
  estArrivalDestinationPortDate: string;
  actualArrivalDestinationPortDate: string;
  estPickUpTruckDestinationDate: string;
  actualPickUpTruckDestinationDate: string;
  destinationPort: PortOfDischarge;
  consigneeInfos: ConsigneeInfo[];
  consigneeDtos: ConsigneeDto[];
  truckCustomerName: null;
  destinationPortPickedUpCount: number;
  originPortDeliveredCount: number;
  originPlacePickUpCount: number;
}

export interface ShipperDto {
  customerId: string;
  customerName: string;
  originAddresses: DestinationAddress[];
  deliveryWarehouses: any[];
  containerNos: string;
  containerTotalCount: number;
  containerPickedUpCount: null;
  cargoReadyDate: Date;
}

export interface ConsigneeInfo {
  customerId: string;
  customerName: string;
  consigneeNetWorkInfo: NetWorkInfo;
  containerNo: string;
  estTruckDeliveryDate: null;
  actualTruckDeliveryDate: string;
}

export interface ConsigneeDto {
  customerId: string;
  customerName: string;
  destinationAddresses: DestinationAddress[];
  containerNos: string;
  containerTotalCount: number;
  containerDeliveredCount: null;
  estTruckDeliveryDate: null;
  actualTruckDeliveryDate: null;
}

export interface DestinationAddress {
  country: string;
  province: string;
  city: string;
  streetAddress: string;
  streetAddress2: string;
  name: string;
  longitude: string;
  latitude: string;
  customerName: null;
  id: string;
  _shipmentListItemDisplay: string;
}

interface NetWorkInfo {
  id: number;
  country: string;
  province: null;
  city: string;
  streetAddress: string;
  streetAddress2: string;
  name: string;
  tenantName: string;
  longitude: string;
  latitude: string;
  customerName: string;
  _shipmentListItemDisplay: string;
}

interface NPort {
  id: number;
  code: string;
  name: string;
  fullName: string;
  regionId: number;
  regionName: string;
  countryName: null;
}

export interface ShipperInfo {
  customerId: number;
  shipperNetWorkInfo: NetWorkInfo;
  containerNo: string;
  customerName: string;
  cargoReadyDate: null;
}

interface ShipmentBooking {
  shipmentId: number;
  shipmentName: null;
  shipmentType: number;
  shipperCustomerId: number;
  shipperPartnerId: null;
  consigneeCustomerId: number | null;
  consigneePartnerId: null;
  containerType: null | string;
  incotermsId: number;
  quoteEnquiryId: number | null;
  originAddressId: number | null;
  destinationAddressId: number | null;
  quantity: number;
  quantityUnitId: number;
  weight: number;
  weightUnitId: number;
  volume: number;
  volumeUnitId: number;
  specialInstructions: null | string;
  cargoReadyDate: string | null;
  estTruckDeliveryDate: string | null;
}

export interface ShipmentEvent {
  containerActivityCount?: number;
  containerTotalCount?: number;
  shipmentId: number;
  businessId: number;
  businessEventType: ShipmentBusinessEventType;
  type: number;
  eventCode: string;
  subject: string;
  description: string;
  happenNode: number;
  happenTime: string;
  isException: boolean;
  details: string;
  id: number;
}

export enum ShipmentBusinessEventType {
  Unknown = 0,
  Shipment = 1,
  ShipmentItem = 2,
  ShipmentContainer = 3,
  Bill = 8,
}
