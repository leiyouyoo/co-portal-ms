import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {

  shipmentData: any = {
    items: [
      {
        "packages": 0,
        "pieces": 0.0,
        "customerId": "32809880-4fc3-447a-b19e-decaacbe8b37",
        "shipmentNo": "OESZGS20060007",
        "shipmentName": "",
        "soNo": "64645654",
        "shipmentType": 0,
        "freightMethodType": 1,
        "status": 3,
        "mainESTTruckDeliveryDate": null,
        "vessel": "CMA CGM VELA/326",
        "vesselVoyage": {
          "name": "CMA CGM VELA",
          "value": "326"
        },
        "preVessel": null,
        "preVesselVoyage": {
          "name": "",
          "value": ""
        },
        "transportClausesId": "bc6cf07b-9bea-4a5b-a1f3-dcbb6bb6bf15",
        "transportClausesString": "CY-CY",
        "containerTypes": [
        ],
        "totalWeightString": "0.0",
        "totalVolumeString": "0.0",
        "routeDetails": {
          "shipperDtos": [
          ],
          "consigneeDtos": [
          ],
          "siCutOffDate": "2020-07-03T00:00:00Z",
          "vgmCutOffDate": null,
          "cyCutOffTime": null,
          "availableDate": null,
          "lastFreeDate": null,
          "originPort": {
            "code": "CNYTN",
            "name": "YANTIAN",
            "fullName": "Guangdong,China",
            "regionId": "cabe32e6-d669-46a0-9fe3-80256c086bc5",
            "regionName": "Guangdong",
            "countryName": "China",
            "countryId": "af94ff33-afac-4d2e-b26d-66df7ad6119e",
            "longitude": "114.236875",
            "latitude": "22.556499",
            "id": "0ba7c2c9-6aa0-4558-b34a-4a238bab8888"
          },
          "estTruckDeliveryOrignDate": null,
          "actualTruckDeliveryOrignDate": null,
          "estDepatureOrginPortDate": "2020-07-05T00:00:00Z",
          "actualDepatureOrginPortDate": null,
          "destinationPlaceDeliveredCount": 0,
          "containerCount": 0,
          "carrierCustomerName": "CMA CGM SHIPPING CO.,LTD.",
          "destinationPortId": "72528faf-4006-4b47-b16f-0dc3b6ae7158",
          "estArrivalDestinationPortDate": "2020-07-25T00:00:00Z",
          "actualArrivalDestinationPortDate": null,
          "estPickUpTruckDestinationDate": null,
          "actualPickUpTruckDestinationDate": null,
          "destinationPort": {
            "code": "USLGB",
            "name": "LONG BEACH,CA",
            "fullName": "California,United States",
            "regionId": "0509a84e-ebe8-43dc-b3a5-08324a0a440f",
            "regionName": "California",
            "countryName": "United States",
            "countryId": "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4",
            "longitude": "-118.1937395",
            "latitude": "33.7700504",
            "id": "72528faf-4006-4b47-b16f-0dc3b6ae7158"
          },
          "truckCustomerName": null,
          "destinationPortPickedUpCount": 0,
          "originPortDeliveredCount": 0,
          "originPlacePickUpCount": 0
        },
        "shipmentEventGroups": [
          {
            "shipmentId": "5dd99d6f-f8b9-ea11-aac7-6cb3110f8be8",
            "businessEventType": 0,
            "type": 0,
            "eventCode": "SOA       ",
            "subject": "Applied SO",
            "description": "申请订舱",
            "happenNode": 0,
            "happenTime": "2020-07-01T03:30:59.433Z",
            "isException": false,
            "details": "申请订舱",
            "shipmentContainers": [
            ],
            "containerActivityCount": 0,
            "containerTotalCount": 0
          }],
        "purchaseOrderIds": [
        ],
        "quoteEnquiryIds": [
        ],
        "productIds": [
        ],
        "billOfLadingNo": "",
        "incotermsId": "d952c54f-5b36-438d-8695-4c2f9edf77d2",
        "containerNos": "",
        "freightTypeString": null,
        "quantityString": "0",
        "incotermsString": "FOB",
        "specialInstructions": "",
        "portOfLoading": {
          "code": "CNYTN",
          "name": "YANTIAN",
          "fullName": "Guangdong,China",
          "regionId": "cabe32e6-d669-46a0-9fe3-80256c086bc5",
          "regionName": "Guangdong",
          "countryName": "China",
          "countryId": "af94ff33-afac-4d2e-b26d-66df7ad6119e",
          "longitude": "114.236875",
          "latitude": "22.556499",
          "id": "0ba7c2c9-6aa0-4558-b34a-4a238bab8888"
        },
        "portOfDischarge": {
          "code": "USLGB",
          "name": "LONG BEACH,CA",
          "fullName": "California,United States",
          "regionId": "0509a84e-ebe8-43dc-b3a5-08324a0a440f",
          "regionName": "California",
          "countryName": "United States",
          "countryId": "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4",
          "longitude": "-118.1937395",
          "latitude": "33.7700504",
          "id": "72528faf-4006-4b47-b16f-0dc3b6ae7158"
        },
        "eta": "2020-07-25T00:00:00Z",
        "etd": "2020-07-05T00:00:00Z",
        "id": "5dd99d6f-f8b9-ea11-aac7-6cb3110f8be8"
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
