import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NetworkLocationService {
  constructor(private httpService: _HttpClient) {}

  getAll(param = {}) {
    const url = `/CRM/LocationExternal/GetAll`;
    return this.httpService.get(url, param);
  }

  getById(id: number) {
    const url = `/CRM/LocationExternal/Get`;
    return this.httpService.get(url, { id });
  }

  getForUpdate(param: { locationId: number; partnerId?: number }) {
    const url = `/CRM/LocationExternal/GetForUpdate`;
    return this.httpService.get(url, param);
  }

  getShared(param = {}) {
    const url = `/CRM/LocationExternal/GetSharedList`;
    return this.httpService.get(url, param);
  }

  getByContactId(contactId: string) {
    const url = `/CRM/LocationExternal/GetByContactId`;
    return this.httpService.get(url, { contactId });
  }

  create(param) {
    const customerUrl = `/CRM/LocationExternal/CreateCustomerLocation`;
    const partnerUrl = `/CRM/LocationExternal/CreatePartnerLocation`;
    if (!param.partnerId) {
      return this.httpService.post(customerUrl, param);
    } else {
      return this.httpService.post(partnerUrl, param);
    }
  }

  update(param) {
    const customerUrl = `/CRM/LocationExternal/UpdateForCustomerLocation`;
    const partnerUrl = `/CRM/LocationExternal/UpdateForPartnerLocation`;
    if (!param.partnerId) {
      return this.httpService.put(customerUrl, param);
    } else {
      return this.httpService.put(partnerUrl, param);
    }
  }

  assignToLocations(param) {
    const url = `/CRM/LocationExternal/AssignUsersToLocation`;
    return this.httpService.post(url, param);
  }

  delete(id: number) {
    const url = '/CRM/LocationExternal/Delete';
    return this.httpService.delete(url, { id });
  }

  //获取客户下以及客户的合作伙伴的location
  GetLocationByCustomer() {
    const url = '/CRM/LocationExternal/GetLocationByCustomer';
    return this.httpService.get(url);
  }

  // 获取FBA地址
  GetFBALocations(isCityocean: boolean) {
    let params = {
      isCityocean: isCityocean,
    };
    const url = '/CRM/LocationExternal/GetFBALocations';
    return this.httpService.get(url, params);
  }

  GetFBALocationsByCustomer(customerId: string) {
    const url = `/CRM/LocationExternal/GetFBALocationsByCustomer`;
    return this.httpService.get(url, { customerId }).pipe(map((o: any) => o.items));
  }

  // 获取客户自己的全部地址
  GetLocationByCustomerOwn(customerId?) {
    const url = '/CRM/LocationExternal/GetLocationByCustomerOwn';
    return this.httpService.get(url, { customerId });
  }
  // 根据客户ID获取客户的全部地址
  getLocationByCustomerId(customerId) {
    const url = '/CRM/LocationExternal/GetLocationByCustomer';
    return this.httpService.get(url, { customerId });
  }

  UnbindUserLocation(param: { locationId: string; contactId: string }) {
    const url = `/CRM/LocationExternal/UnbindUserLocation`;
    return this.httpService.post(url, param);
  }

  globalSearch(searchText: string) {
    const url = `/CRM/LocationExternal/GlobalSearch`;
    return this.httpService.post(url, { searchText });
  }
}
