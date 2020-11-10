import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { quoteEntity } from './class/quoteEntity';
import { FreightMethodType } from '../../bussiness/shipment/models/FreightMethodType';
import { ImQuotesService } from './quotes.service';
import { groupBy } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Component({
  selector: 'lib-im-quote-detail',
  templateUrl: './im-quote-detail.component.html',
  styleUrls: ['./im-quote-detail.component.less'],
})
export class ImQuoteDetailComponent implements OnInit, OnChanges {
  @Input() id = '';
  @Output() showBussinessNo: EventEmitter<any> = new EventEmitter<any>();
  quotesDetail: quoteEntity;
  FreightMethodType = FreightMethodType;
  freightList: Array<any> = [];
  OriginList: Array<any> = [];
  DestinationList: Array<any> = [];
  freightRemarkList: Array<any> = [];
  OriginRemarklist: Array<any> = [];
  DestinationRemarkList: Array<any> = [];
  controlDestinationOpen = true;
  controlOriginOpen = true;
  controlSpecialGoodsOpen = true;
  controlCargoOpen = true;
  routeLocations: Array<any> = [];
  constructor(private imQuotesService: ImQuotesService, private translate: TranslateService) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.imQuotesService.getQuoteDetail(this.id).subscribe(
      (res: any) => {
        this.routeLocations = [];
        this.quotesDetail = res;
        this.showBussinessNo.emit(res.quoteNo);
        this.quotesDetail['containsSpecialGoodsTypesArr'] = this.quotesDetail.containsSpecialGoodsTypes
          ? JSON.parse(this.quotesDetail.containsSpecialGoodsTypes)
          : [];
        if (this.quotesDetail?.quoteReplys) {
          this.quotesDetail['totalChargeArr'] = this.quotesDetail?.quoteReplys[0]?.totalCharge
            ? JSON.parse(this.quotesDetail?.quoteReplys[0]?.totalCharge)
            : [];
        }
        this.handleData(res);
        this.handleRouteData();
      },
      (error) => {},
    );
  }
  // 处理数据
  handleData(res: any) {
    if (this.quotesDetail?.quoteReplys) {
      this.quotesDetail.quoteReplys.forEach((element) => {
        if (element.quoteReplyItems) {
          this.freightList = element.quoteReplyItems.filter((c) => c.priceProduceNode == 1);
          this.OriginList = element.quoteReplyItems.filter((c) => c.priceProduceNode == 2);
          this.DestinationList = element.quoteReplyItems.filter((c) => c.priceProduceNode == 3);
        }
        this.OriginRemarklist = this.objToArray(groupBy(this.OriginList, 'chargingCodeId'));
        this.DestinationRemarkList = this.objToArray(groupBy(this.DestinationList, 'chargingCodeId'));
      });
    }
  }
  // 对象转数组
  objToArray(list: any) {
    let array = Array<any>();
    for (let key in list) {
      array.push({
        chargeId: key,
        remark: list[key][0].remark,
        list: list[key],
      });
    }
    return array;
  }
  getTotalCharge(totalCharge) {
    if (!totalCharge && _.isString(totalCharge)) {
      return [];
    } else {
      return JSON.parse(totalCharge);
    }
  }

  getTime(time, farmat = 'MMM D, YYYY') {
    if (!time) {
      return '';
    }
    return moment(time).format(farmat);
  }
  getContainsSpecialGoodsTypes() {
    if (this.quotesDetail && this.quotesDetail.containsSpecialGoodsTypes) {
      return JSON.parse(this.quotesDetail.containsSpecialGoodsTypes);
    }
    return [];
  }
  onSpecialGoodsChang() {
    this.controlSpecialGoodsOpen = !this.controlSpecialGoodsOpen;
  }
  getContainerType() {
    let str: Array<any> = [];
    if (this.quotesDetail.containerType) {
      const containerType = JSON.parse(this.quotesDetail.containerType);
      containerType.forEach((element: any) => {
        if (element.value != 0) {
          str.push(element.value + 'X' + element.name);
        }
      });
    }
    return str;
  }

  handleRouteData() {
    const originPort = this.quotesDetail.originPort;
    const originAddress = this.quotesDetail.originAddress;
    const originAddressName = this.quotesDetail.originAddressName;
    const destinationPort = this.quotesDetail.destinationPort;
    const destinationAddress = this.quotesDetail.destinationAddress;
    const destinationAddressName = this.quotesDetail.destinationAddressName;
    if (originPort) {
      this.routeLocations.push(
        Object.assign(originPort, {
          icon: 'icon-portim',
          showName: `${originPort.name},${originPort.regionName} ${originPort.countryName ? originPort.countryName : ''}`,
        }),
      );
    }

    if (destinationPort) {
      this.routeLocations.push(
        Object.assign(destinationPort, {
          icon: 'icon-portim',
          showName: `${destinationPort.name},${destinationPort.regionName} ${
            destinationPort.countryName ? destinationPort.countryName : ''
          }`,
        }),
      );
    }

    if (originAddressName || originAddress) {
      if (originAddress) {
        this.routeLocations.unshift(
          Object.assign(originAddress, {
            icon: 'icon-locationim',
            showName: `${originAddress.streetAddress},${originAddress.city},${originAddress.province}, ${originAddress.country}`,
          }),
        );
      } else {
        this.routeLocations.unshift(
          Object.assign(
            {},
            {
              icon: 'icon-locationim',
              showName: originAddressName,
            },
          ),
        );
      }
    }
    if (destinationAddressName || destinationAddress) {
      if (destinationAddress) {
        this.routeLocations.push(
          Object.assign(destinationAddress, {
            icon: 'icon-locationim',
            showName: `${destinationAddress.streetAddress},${destinationAddress.city},${destinationAddress.province}, ${destinationAddress.country}`,
          }),
        );
      } else {
        this.routeLocations.push(
          Object.assign(
            {},
            {
              icon: 'icon-locationim',
              showName: destinationAddressName,
            },
          ),
        );
      }
    }
  }
}
