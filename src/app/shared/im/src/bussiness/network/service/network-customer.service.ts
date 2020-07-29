import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { map } from 'rxjs/operators';
import { CustomerPartner } from '../dto/customer-partner';
import { Observable } from 'rxjs';
import { Customer } from '..';

@Injectable({
  providedIn: 'root',
})
export class NetworkCustomerService {
  constructor(private httpService: _HttpClient) {}

  get(customerId: string): Observable<Customer> {
    const url = `/CRM/CustomerExternal/Get`;
    return this.httpService.get(url, { id: customerId }) as any;
  }

  getCustomerAndPartner(customerId: any): Observable<CustomerPartner[]> {
    const url = `/CRM/CustomerExternal/GetCustomerAndPartner`;
    return this.httpService.get(url, { customerId }).pipe(map((o: any) => o.items)) as any;
  }
}
