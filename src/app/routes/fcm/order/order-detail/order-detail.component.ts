import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentService, ShipmentDto } from 'src/app/service/fcm';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.less']
})
export class OrderDetailComponent implements OnInit {

  id: string = null;
  orderInfo: any;

  bookingId = "09522afc-cf59-401a-2a3a-08d82267d2b6";

  shipmentData: any = {
    "items": [
      {
        "packages": 0,
        "pieces": 0.0,
        "customerId": "32809880-4fc3-447a-b19e-decaacbe8b37",
        "shipmentNo": "OESZGS20070007",
        "shipmentName": "4445445",
        "soNo": "1236547888",
        "shipmentType": 0,
        "freightMethodType": 1,
        "status": 4,
        "mainESTTruckDeliveryDate": "2020-08-02T16:00:00Z",
        "vessel": "CMA CGM TOSCA/4W",
        "vesselVoyage": {
          "name": "CMA CGM TOSCA",
          "value": "4W"
        },
        "preVessel": null,
        "preVesselVoyage": {
          "name": "",
          "value": ""
        },
        "transportClausesId": "bc6cf07b-9bea-4a5b-a1f3-dcbb6bb6bf15",
        "transportClausesString": "CY-CY",
        "containerTypes": [
          {
            "businessIds": [
              "973f7660-34bf-ea11-aac7-6cb3110f8be8"],
            "name": "20GP",
            "value": 1
          }],
        "totalWeightString": "60.000 公斤",
        "totalVolumeString": "523.000 立方米",
        "routeDetails": {
          "shipperDtos": [
            {
              "customerId": "89796121-32f7-466d-898b-f212674d3571",
              "customerName": "卖家客户叁",
              "originAddresses": [
              ],
              "containerTypes": [
                {
                  "businessIds": [
                    "973f7660-34bf-ea11-aac7-6cb3110f8be8"],
                  "name": "20GP",
                  "value": 1
                }],
              "deliveryWarehouses": [
              ],
              "containerNos": "AAAU1234567",
              "containerTotalCount": 1,
              "containerPickedUpCount": 1,
              "cargoReadyDate": "2020-07-05T10:11:40.009Z"
            }],
          "consigneeDtos": [
            {
              "customerId": "32809880-4fc3-447a-b19e-decaacbe8b37",
              "customerName": "买家客户叁",
              "destinationAddresses": [
              ],
              "containerTypes": [
                {
                  "businessIds": [
                    "973f7660-34bf-ea11-aac7-6cb3110f8be8"],
                  "name": "20GP",
                  "value": 1
                }],
              "containerNos": "AAAU1234567",
              "containerTotalCount": 1,
              "containerDeliveredCount": 0,
              "estTruckDeliveryDate": "2020-08-02T16:00:00Z",
              "actualTruckDeliveryDate": null
            }],
          "siCutOffDate": "2020-07-11T00:00:00Z",
          "vgmCutOffDate": null,
          "cyCutOffTime": "2020-07-11T00:00:00Z",
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
          "estTruckDeliveryOrignDate": "2020-07-11T00:00:00Z",
          "actualTruckDeliveryOrignDate": "2020-07-10T16:00:00Z",
          "estDepatureOrginPortDate": "2020-07-13T00:00:00Z",
          "actualDepatureOrginPortDate": "2020-07-10T16:00:00Z",
          "destinationPlaceDeliveredCount": 0,
          "containerCount": 1,
          "carrierCustomerName": "CMA CGM SHIPPING CO.,LTD.",
          "destinationPortId": "3eafeb6f-257c-40f6-8280-13d6a1881984",
          "estArrivalDestinationPortDate": "2020-07-31T00:00:00Z",
          "actualArrivalDestinationPortDate": null,
          "estPickUpTruckDestinationDate": "2020-08-02T16:00:00Z",
          "actualPickUpTruckDestinationDate": null,
          "destinationPort": {
            "code": "USNYC",
            "name": "NEW YORK,NY",
            "fullName": "New York,United States",
            "regionId": "d1c2009c-0d6c-4e19-9c11-da64dd1698d4",
            "regionName": "New York",
            "countryName": "United States",
            "countryId": "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4",
            "longitude": "-74.0059728",
            "latitude": "40.7127753",
            "id": "3eafeb6f-257c-40f6-8280-13d6a1881984"
          },
          "truckCustomerName": null,
          "destinationPortPickedUpCount": 0,
          "originPortDeliveredCount": 1,
          "originPlacePickUpCount": 1
        },
        "shipmentEventGroups": [
          {
            "shipmentId": "36105019-34bf-ea11-aac7-6cb3110f8be8",
            "businessEventType": 3,
            "type": 0,
            "eventCode": "EPU",
            "subject": "已提空柜",
            "description": "已提空柜:AAAU1234567",
            "happenNode": 1,
            "happenTime": "2020-07-06T16:00:00Z",
            "isException": false,
            "details": "已提空柜:AAAU1234567",
            "address": null,
            "shipmentContainers": [
              {
                "shipmentId": "00000000-0000-0000-0000-000000000000",
                "containerNo": "AAAU1234567",
                "sealNo": "GDAE1235745",
                "containerTypeId": "c4d1afb9-94e2-42fd-921e-34ef2d332553",
                "containerTypeName": null,
                "availableDate": null,
                "lastFreeDate": null,
                "id": "00000000-0000-0000-0000-000000000000"
              }],
            "containerActivityCount": 1,
            "containerTotalCount": 1
          },
          {
            "shipmentId": "36105019-34bf-ea11-aac7-6cb3110f8be8",
            "businessEventType": 3,
            "type": 0,
            "eventCode": "GF",
            "subject": "重柜进场",
            "description": "重柜进场:AAAU1234567",
            "happenNode": 2,
            "happenTime": "2020-07-09T16:00:00Z",
            "isException": false,
            "details": "重柜进场:AAAU1234567",
            "address": null,
            "shipmentContainers": [
              {
                "shipmentId": "00000000-0000-0000-0000-000000000000",
                "containerNo": "AAAU1234567",
                "sealNo": "GDAE1235745",
                "containerTypeId": "c4d1afb9-94e2-42fd-921e-34ef2d332553",
                "containerTypeName": null,
                "availableDate": null,
                "lastFreeDate": null,
                "id": "00000000-0000-0000-0000-000000000000"
              }],
            "containerActivityCount": 1,
            "containerTotalCount": 1
          },
          {
            "shipmentId": "36105019-34bf-ea11-aac7-6cb3110f8be8",
            "businessEventType": 3,
            "type": 0,
            "eventCode": "LOA",
            "subject": "已装船",
            "description": "已装船:AAAU1234567",
            "happenNode": 2,
            "happenTime": "2020-07-10T16:00:00Z",
            "isException": false,
            "details": "已装船:AAAU1234567",
            "address": null,
            "shipmentContainers": [
              {
                "shipmentId": "00000000-0000-0000-0000-000000000000",
                "containerNo": "AAAU1234567",
                "sealNo": "GDAE1235745",
                "containerTypeId": "c4d1afb9-94e2-42fd-921e-34ef2d332553",
                "containerTypeName": null,
                "availableDate": null,
                "lastFreeDate": null,
                "id": "00000000-0000-0000-0000-000000000000"
              }],
            "containerActivityCount": 1,
            "containerTotalCount": 1
          }],
        "purchaseOrderIds": [
        ],
        "quoteEnquiryIds": [
        ],
        "productIds": [
        ],
        "billOfLadingNo": "SZNYCTG0007",
        "incotermsId": "d952c54f-5b36-438d-8695-4c2f9edf77d2",
        "containerNos": "AAAU1234567",
        "freightTypeString": "CY-CY",
        "quantityString": "50 CTN",
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
          "code": "USNYC",
          "name": "NEW YORK,NY",
          "fullName": "New York,United States",
          "regionId": "d1c2009c-0d6c-4e19-9c11-da64dd1698d4",
          "regionName": "New York",
          "countryName": "United States",
          "countryId": "37f06c2d-e5f6-4a6f-bb55-9da3ec3b42a4",
          "longitude": "-74.0059728",
          "latitude": "40.7127753",
          "id": "3eafeb6f-257c-40f6-8280-13d6a1881984"
        },
        "eta": "2020-07-31T00:00:00Z",
        "etd": "2020-07-13T00:00:00Z",
        "id": "36105019-34bf-ea11-aac7-6cb3110f8be8"
      }]
  }

  constructor(
    public activeRoute: ActivatedRoute,
    public shipmentService: ShipmentService
  ) {
    this.activeRoute.queryParams.subscribe(queryParam => {
      if (queryParam['id']) {
        this.id = queryParam['id']
      }
    });

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void {
    this.shipmentService.get({ id: this.id }).subscribe(res => {
      console.log(res, "res")
      this.orderInfo = res;
    })
  }

}
