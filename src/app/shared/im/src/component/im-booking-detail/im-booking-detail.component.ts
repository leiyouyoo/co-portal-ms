import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { BookingStatusType, bookingStatus, ImBookingLibraryService } from '../../bussiness/booking/index';
import * as moment from 'moment';

@Component({
  selector: 'lib-im-booking-detail',
  templateUrl: './im-booking-detail.component.html',
  styleUrls: ['./im-booking-detail.component.less'],
})
export class ImBookingDetailComponent implements OnInit, OnChanges {
  requestProcess = [
    {
      name: 'Booking is received by City Ocean Staff.',
      status: 'received',
      checked: false,
    },
    {
      name: 'Shipping order is requested with the carrier.',
      status: 'requested',
      checked: false,
    },
    {
      name: 'Notified SO successfully with the customer.',
      status: 'Notified',
      checked: false,
    },
    {
      name: 'Shipping order is done.',
      status: 'done',
      checked: false,
    },
  ];
  @Output() showBussinessNo: EventEmitter<any> = new EventEmitter<any>();

  baseShow = true;
  instructionsShow = true;
  statusType: typeof BookingStatusType = BookingStatusType;
  bookingDetail = {
    bookingNo: null,
    cancelReason: 0,
    cancelRemark: null,
    shipmentNo: null,
    quoteEnquiryId: 0,
    status: -1,
    processingStatus: 0,
    customsDeclarationDocumentIds: [null],
    containsSpecialGoodsTypesArr: [],
    isCustomerUpdate: true,
    customerUpdateLastDataJson: null,
    lastData: {
      originPort: {
        id: 0,
        code: null,
        name: null,
        fullName: null,
        regionId: 0,
        regionName: null,
        countryName: null,
      },
      destinationPort: {
        id: 0,
        code: null,
        name: null,
        fullName: null,
        regionId: 0,
        regionName: null,
        countryName: null,
      },
      shipperAddress: {
        id: 0,
        country: null,
        province: null,
        city: null,
        streetAddress: null,
        streetAddress2: null,
        name: null,
        tenantName: null,
      },
      consigneeAddress: {
        id: 0,
        country: null,
        province: null,
        city: null,
        streetAddress: null,
        streetAddress2: null,
        name: null,
        tenantName: null,
      },
      cargoReadyDate: '2020-02-21T09:18:34.601Z',
      freightType: 0,
      tradeType: 0,
      incotermsString: null,
      containerType: null,
      quantityUnitString: null,
      weightUnitString: null,
      volumeUnitString: null,
      quantity: 0,
      weight: 0,
      volume: 0,
      description: null,
      specialInstructions: null,
    },
    bookingTemplateId: 0,
    purchaseOrderIds: [0],
    incotermsString: null,
    quantityUnitString: null,
    weightUnitString: '',
    volumeUnitString: '',
    shipperCustomerName: '',
    consigneeCustomerName: '',
    originPort: {
      id: 0,
      code: null,
      name: null,
      fullName: null,
      regionId: 0,
      regionName: null,
      countryName: null,
    },
    destinationPort: {
      id: 0,
      code: null,
      name: null,
      fullName: null,
      regionId: 0,
      regionName: null,
      countryName: null,
    },
    originAddress: {
      id: 0,
      country: null,
      province: null,
      city: null,
      streetAddress: null,
      streetAddress2: null,
      name: null,
      tenantName: null,
    },
    destinationAddress: {
      id: 0,
      country: null,
      province: null,
      city: null,
      streetAddress: null,
      streetAddress2: null,
      name: null,
      tenantName: null,
    },
    deliveryWarehouse: {
      id: 0,
      zip: null,
      streetAddress: null,
      streetAddress2: null,
      name: null,
      country: null,
      province: null,
      city: null,
      viewableType: 0,
      partnerId: 0,
      customerId: 0,
      tenantName: null,
      unlocode: null,
      isVerifiedCompany: true,
    },
    pickUpAddress: {
      id: 0,
      country: null,
      province: null,
      city: null,
      streetAddress: null,
      streetAddress2: null,
      name: null,
      tenantName: null,
    },
    deliveryTimeRange: null,
    pickUpTimeRange: null,
    contactName: null,
    contactPhone: null,
    fbaFreightMethodString: null,
    channelString: null,
    cusClearanceInvoices: [
      {
        bookingId: 0,
        cusClearanceProductId: 0,
        referenceId: null,
        fbaNo: null,
        sku: null,
        quantity: 0,
        unitId: 0,
        unitPriceValue: 0,
        unitPriceUnitId: 0,
        totalPriceValue: 0,
        totalPriceUnitId: 0,
        commodityEnglishDesc: null,
        commodityChineseDesc: null,
        brand: null,
        material: null,
        uses: null,
        hsCode: null,
        asin: null,
        isContainsBattery: true,
        model: null,
        imageId: null,
        id: 0,
      },
    ],
    packingLists: [
      {
        packageNo: null,
        fbaNo: null,
        codeRules: null,
        startNo: null,
        endNo: null,
        grossWeight: 0,
        grossWeightUnitId: 0,
        grossWeightUnitString: null,
        netWeight: 0,
        netWeightUnitId: 0,
        netWeightUnitString: null,
        dimensions: null,
        dimensionsUnitId: 0,
        dimensionsUnitString: null,
        bookingId: 0,
        packingListItems: [
          {
            packingListId: 0,
            sku: null,
            quantities: 0,
            totalQuantities: 0,
            commodityChineseDesc: null,
            id: 0,
          },
        ],
        id: 0,
      },
    ],
    serviceCompanyId: 0,
    quantity: 0,
    quantityUnitId: 0,
    weight: 0,
    weightUnitId: 0,
    volume: 0,
    volumeUnitId: 0,
    unitConvertType: 0,
    isContainsSpecialGoods: true,
    containsSpecialGoodsTypes: '',
    description: null,
    specialInstructions: null,
    containerType: null,
    declareCurrencyId: 0,
    name: null,
    consigneeLocationId: 0,
    consigneeCustomerId: 0,
    consigneePartnerId: 0,
    shipperLocationId: 0,
    shipperCustomerId: 0,
    shipperPartnerId: 0,
    cargoReadyDate: '2020-02-21T09:18:34.601Z',
    incotermsId: 0,
    tradeType: 0,
    freightType: 0,
    freightMethodType: 0,
    shipmentType: 0,
    originPortId: 0,
    originIsRequireTruck: true,
    originAddressId: 0,
    isDeclaration: true,
    isInsurance: true,
    destinationPortId: 0,
    destinationAddressId: 0,
    deliveryDate: '2020-02-21T09:18:34.601Z',
    destinationIsRequireTruck: true,
    isClearance: true,
    isTaxIncluded: true,
    contactId: 0,
    deliveryMethodType: 0,
    deliveryWarehouseId: 0,
    fbaFreightMethodId: 0,
    channelId: 0,
    customerId: 0,
    id: 0,
    creationTime: '2020-02-21T09:18:34.602Z',
    creatorUserId: 0,
    lastModificationTime: '2020-02-21T09:18:34.602Z',
    lastModifierUserId: 0,
    deletionTime: '2020-02-21T09:18:34.602Z',
    deleterUserId: 0,
    isDeleted: true,
  };
  @Input() id = '';
  statusStep: number;
  constructor(private bookingLibraryService: ImBookingLibraryService) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.bookingLibraryService.GetBookingForUpdate(this.id).subscribe((res: any) => {
      this.bookingDetail = res;
      this.showBussinessNo.emit(res.bookingNo);
      this.bookingDetail['containsSpecialGoodsTypesArr'] = this.bookingDetail.containsSpecialGoodsTypes
        ? JSON.parse(this.bookingDetail.containsSpecialGoodsTypes)
        : [];
      switch (res.status) {
        case bookingStatus.BookingDraft:
          this.statusStep = 0;
          break;
        case bookingStatus.BookingSubmitted:
          this.statusStep = 0;
          break;
        case bookingStatus.ShippingDone:
          this.statusStep = 5;
          break;
        case bookingStatus.PriceConfirmedByCustomer:
          this.statusStep = 3;
          break;
        case bookingStatus.ShippingSubmittedToCarrier:
          this.statusStep = 3;
          break;
        case bookingStatus.SoNumberNotifiedToCustomer:
          this.statusStep = 4;
          break;
        case bookingStatus.WaitingForPricing:
          if (res.tradeType != 1) {
            this.statusStep = -1;
          } else {
            this.statusStep = 0;
          }
          break;
        case bookingStatus.WaitingForBuyer:
          this.statusStep = 1;
          break;
        case bookingStatus.WaitingForSeller:
          this.statusStep = 1;
          break;
        case bookingStatus.WaitingForCancelling:
          this.statusStep = -1;
          break;
        case bookingStatus.BookingCancelled:
          this.statusStep = -1;
          break;
        case bookingStatus.ShippingCancelled:
          this.statusStep = 2;
          break;
        default:
          this.statusStep = 0;
          break;
      }
      this.setRequestProcess();
    });
  }
  setRequestProcess() {
    if (this.bookingDetail.status != 4 && this.bookingDetail.status != 5 && this.bookingDetail.status != 6) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    } else if (this.bookingDetail.status == 4) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Freight quote is sended to the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    } else if (this.bookingDetail.status == 5 || this.bookingDetail.status == 6) {
      this.requestProcess = [
        {
          name: 'Booking is received by City Ocean Staff.',
          status: 'received',
          checked: false,
        },
        {
          name: 'Freight quote is sended to the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Quote is comfirmed by the customer.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Shipping order is requested with the carrier.',
          status: 'requested',
          checked: false,
        },
        {
          name: 'Notified SO successfully with the customer.',
          status: 'Notified',
          checked: false,
        },
        {
          name: 'Shipping order is done.',
          status: 'done',
          checked: false,
        },
      ];
    }
    for (let index = 0; index <= this.statusStep && this.requestProcess[index]; index++) {
      this.requestProcess[index].checked = true;
    }
  }
  getContainerType(data) {
    let str = '';
    try {
      if (data.containerType) {
        let containerType = JSON.parse(data.containerType);
        containerType.forEach((element) => {
          if (element.value) {
            str += ' ' + element.value + 'X' + element.name;
          }
        });
      }
    } catch (error) {
      // console.log(error);
    }
    return str;
  }
  getSpecialGoodsName(): Array<any> {
    if (this.bookingDetail && this.bookingDetail.containsSpecialGoodsTypes) {
      return JSON.parse(this.bookingDetail.containsSpecialGoodsTypes);
    }
    return [];
  }
  getTime(time) {
    if (!time) {
      return '';
    }
    return moment(time).format('MMM D YYYY');
  }
}
