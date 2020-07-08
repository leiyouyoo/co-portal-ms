import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';

import { map } from 'rxjs/operators';
import { ContactDto } from '..';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkContactService {
  constructor(private httpService: _HttpClient) {}

  getAll(param = {}) {
    return this.httpService.get('/CRM/ContactExternal/GetByCustomerOrPartner', param);
  }
  // 获取当前客户所有的合作伙伴（包含客户自己的信息）
  getCustomerAndPartner(param = {}) {
    return this.httpService.get('/CRM/ContactExternal/GetByCustomerAndPartner', param);
  }
  get(id: string): Observable<ContactDto> {
    const url = `/CRM/ContactExternal/Get`;
    return this.httpService.get(url, { id }).pipe(
      map((o: ContactDto) => {
        o.name = o.nameLocalization || o.name;
        o.surname = o.surnameLocalization || o.surname;
        return o;
      }),
    );
  }

  getByLocationId(locationId: string) {
    const url = `/CRM/ContactExternal/GetByLocationId`;
    return this.httpService.get(url, { locationId });
  }

  getShared(param = {}) {
    const url = `/CRM/ContactExternal/GetSharedList`;
    return this.httpService.get(url, param);
  }

  createContact(param) {
    const customerUrl = `/CRM/ContactExternal/CreateForCustomer`;
    const partnerUrl = `/CRM/ContactExternal/CreateForPartner`;
    const contactWithLocation = `/CRM/ContactExternal/AddUsersToLocation`;

    if (param.locationId) {
      return this.httpService.post(contactWithLocation, param);
    }
    if (!param.partnerId) {
      return this.httpService.post(customerUrl, param);
    } else {
      return this.httpService.post(partnerUrl, param);
    }
  }

  update(param) {
    const url = `/CRM/ContactExternal/Update`;
    return this.httpService.put(url, param);
  }

  assignToLocations(param) {
    const url = `/CRM/LocationExternal/AssignLocationsToUser`;
    return this.httpService.post(url, param);
  }

  delete(id: string) {
    const url = '/CRM/ContactExternal/Delete';
    return this.httpService.delete(url, { id });
  }
}
