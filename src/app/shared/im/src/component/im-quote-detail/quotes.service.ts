import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
@Injectable({
  providedIn: 'root',
})
export class ImQuotesService {
  constructor(public httpService: _HttpClient) {}
  //获取询价详情
  getQuoteDetail(Id: string) {
    let url = '/CRM/QuoteEnquiry/GetForCSP';
    let params = {
      Id: Id,
    };
    return this.httpService.get(url, params);
  }
}
