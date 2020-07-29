import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkPartnerService {
  constructor(private httpService: _HttpClient) {}

  create(name: string) {
    const url = `/CRM/PartnerExternal/Create`;
    return this.httpService.post(url, { name });
  }

  get(id: string) {
    const url = `/CRM/PartnerExternal/Get`;
    return this.httpService.get(url, { id });
  }

  getAll(param = {}) {
    const url = `/CRM/PartnerExternal/GetAll`;
    return this.httpService.get(url, param);
  }

  getAllForTenant(param = {}) {
    const url = `/CRM/PartnerExternal/GetRegisteredPartners`;
    return this.httpService.get(url, param);
  }

  getMyCustomerAndPartners(): Observable<{ name: string; partnerId: string; customerId: string }[]> {
    const url = `/CRM/PartnerExternal/GetMyCustomerAndPartners`;
    return this.httpService.get(url, {}).pipe(map((o: any) => o.items));
  }

  update(param: { id: string; name: string }) {
    const url = `/CRM/PartnerExternal/Update`;
    return this.httpService.put(url, param);
  }

  delete(id: string) {
    const url = `/CRM/PartnerExternal/Delete`;
    return this.httpService.delete(url, { id });
  }
}
