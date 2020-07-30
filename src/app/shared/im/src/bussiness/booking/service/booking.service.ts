import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { BookingTemplateEntity } from '../class/bookingTemplste';
import { BookingEntity } from '../class/booking-entity';
import { identity, Observable } from 'rxjs';
import { BookingQueryEntity } from '../class/bookingQuery.entity';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookingChannels, RecentlyUsed } from '..';
import { FreightMethodType } from '../../shipment/models/FreightMethodType';

@Injectable({
  providedIn: 'root',
})
export class ImBookingLibraryService {
  constructor(public httpService: _HttpClient) {}

  //#region  booking模板
  //获取模板数据
  GetAllTemplate(filterObj: { Sorting?: string; MaxResultCount?: number; SkipCount?: number }) {
    let url = 'CSP/BookingTemplate/GetAll';
    return this.httpService.get(url, filterObj);
  }

  //创建
  createTemplate(templateObj: BookingTemplateEntity) {
    let url = 'CSP/BookingTemplate/Create';
    return this.httpService.post(url, templateObj);
  }
  updateTemplate(templateObj: BookingTemplateEntity) {
    let url = 'CSP/BookingTemplate/Update';
    return this.httpService.put(url, templateObj);
  }

  //删除模板
  deleteTemplate(Id: number) {
    let url = 'CSP/BookingTemplate/Delete';
    let params = {
      Id: Id,
    };
    return this.httpService.delete(url, params);
  }
  Check(name: string) {
    let url = '/CSP/BookingTemplate/Check';
    let params = {
      name: name,
    };
    return this.httpService.post(url, params);
  }
  //#endregion

  //#region   booking
  //获取booking数据
  getAllBooking(bookingObj: BookingQueryEntity): Observable<any> {
    let url = 'CSP/Booking/GetAllList';
    return this.httpService.get(url, bookingObj);
  }

  //创建booking
  createBooking(bookingObj: BookingEntity) {
    let url = 'CSP/Booking/Create';
    return this.httpService.post(url, bookingObj);
  }
  //编辑booking
  updateBooking(bookingObj: BookingEntity) {
    let url = 'CSP/Booking/Update';
    return this.httpService.put(url, bookingObj);
  }

  //获取预订用于编辑
  GetBookingForUpdate(Id: string) {
    let url = '/CSP/Booking/Get';
    let params = {
      id: Id,
    };
    return this.httpService.get(url, params);
  }

  //预定详情
  getBookingDetail(Id: string) {
    let url = 'CSP/Booking/Get';
    let params = {
      id: Id,
    };
    return this.httpService.get(url, params);
  }

  //取消预订
  cancelBooking(bookingObj: BookingEntity) {
    let url = 'CSP/Booking/Cancel';
    return this.httpService.post(url, bookingObj);
  }

  //从booking模板或者quote创建booking
  GetBookingInfoByTemplate(Id?: string) {
    let params = {
      Id: Id,
    };
    let url = '/CSP/BookingTemplate/GetDetailById';
    return this.httpService.get(url, params);
  }

  //create booking 从orders
  UseOrderForBooking(orderIds: any[]): Observable<any> {
    let params = {
      orderIds: orderIds,
      toBooking: true,
    };
    return this.httpService.post('/CSP/PurchaseOrder/Booking', params);
  }
  bookingSearch(searchKeyword: string) {
    let params = {
      searchKeyword: searchKeyword,
    };
    return this.httpService.post('/CSP/PurchaseOrder/BookingSearch', params);
  }

  bookingCheck(purchaseOrderIds: Array<number>, name: string) {
    let params = {
      purchaseOrderIds: [...purchaseOrderIds],
      name,
    };
    return this.httpService.post('/CSP/Booking/Check', params);
  }
  cspBookingCheck(purchaseOrderIds: Array<number>, name: string, shipperCustomerId, consigneeCustomerId?) {
    let params = {
      purchaseOrderIds,
      name,
      shipperCustomerId,
      consigneeCustomerId,
    };
    return this.httpService.post('/CSP/Booking/IsExists', params);
  }
  //获取FBA地址
  GetAmazonAll(SearchText: any): Observable<any> {
    let params = {
      SearchText: SearchText,
    };
    return this.httpService.get('CSP/Customer/GetAmazonAll', params);
  }

  //获取FBM地址
  GetCityoceanAll(SearchText: any): Observable<any> {
    let params = {
      SearchText: SearchText,
    };
    return this.httpService.get('CSP/Customer/GetCityoceanAll', params);
  }
  //#endregion

  //获取SKU列表
  getSkuList(skuInput: { SearchText?: string; MaxResultCount?: number; SkipCount?: number }) {
    return this.httpService.get('CSP/Product/GetSkuList', skuInput);
  }

  //解析EXCEL
  AnalysisExcel(params: any) {
    // todo  server_url删掉
    return this.httpService.post('/Storage/CSPExcel/AnalysisExcel', params);
    // return this.httpService.http.post('http://192.168.1.206:8002/Storage/CSPExcel/AnalysisExcel', params);
  }

  //导出EXCEL
  ExportExcel(params: any) {
    // todo  server_url删掉
    let headerFormParams: any = {
      'Abp.TenantId': '8',
    };
    let formHeaders = new HttpHeaders(headerFormParams);
    return this.httpService.post('/Storage/CSPExcel/CusClearanceInvoiceExportExcelAsync', params, {
      headers: formHeaders,
    });
  }

  //获取最近使用的
  GetRecentlyUsed(tradeType: 0 | 1 | 2 | 3, freightMethodType: FreightMethodType): Observable<RecentlyUsed> {
    return this.httpService.get('CSP/Booking/GetRecentlyUsed', { tradeType, freightMethodType }) as any;
  }
  //获取贸易类型
  getTradeTypes() {
    return this.httpService.get('PUB/DataDictionary/GetTradeTypes');
  }

  //根据贸易类型获取贸易条款
  GetIncotermsByTradeType(tradeType: number) {
    return (this.httpService.get('PUB/DataDictionary/GetIncotermsByTradeType', { tradeType }) as Observable<
      { key: string; value: string }[]
    >).pipe(
      map(list => {
        const index = list.findIndex(p => p.key === 'FOB');
        if (index !== -1) {
          list[0] = list.splice(index, 1, list[0])[0];
        }
        return list;
      }),
    );
  }

  // FBA channel list
  getChannelList(freightMethodType: FreightMethodType): Observable<BookingChannels[]> {
    const url = `/CSP/Booking/GetChannelList`;
    return this.httpService.get(url, { freightMethodType }).pipe(map((o: any) => o.items)) as any;
  }

  // CRM-BOOKING 口岸数据获取
  //获取贸易类型
  getByPlaceOrLocation() {
    return this.httpService.get('Platform/CompanyConfigure/GetByPlaceOrLocation');
  }
  // 获取收发货人(CRM 创booking)
  getMyCustomerAndPartners() {
    return this.httpService.get('CRM/Customer/GetMyCustomerAndPartners');
  }
}
