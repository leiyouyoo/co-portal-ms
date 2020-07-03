import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { IMContactGroupDto,IMContactDto, } from './crm.types';

@BaseUrl('/crm/ContactIM')
@Injectable({ providedIn: 'root' })
export class ContactIMService extends BaseApi {

   
    /**
     * @param url /CRM/ContactIM/GetPartnerContacts
     * 获取所有合作伙伴的所有联系人
     */

    @GET('getPartnerContacts')
    getPartnerContacts(
        @Payload
        _req: {customerId?:string,searchText?:string} 

    ): Observable<ListResultDto<IMContactGroupDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/ContactIM/GetCustomerContacts
     * 获取客户下所有联系人
     */

    @GET('getCustomerContacts')
    getCustomerContacts(
        @Payload
        _req: {customerId?:string,searchText?:string} 

    ): Observable<ListResultDto<IMContactDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/ContactIM/GetSaleCustomerContacts
     * 获取业务员所跟进的所有客户的所有联系人
     */

    @GET('getSaleCustomerContacts')
    getSaleCustomerContacts(
        @Payload
        _req: {customerId?:string,searchText?:string} 

    ): Observable<ListResultDto<IMContactGroupDto>> {
        return null as any
    }



  }
