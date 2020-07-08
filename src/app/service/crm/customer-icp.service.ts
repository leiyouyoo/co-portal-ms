import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { IcpCreateOrUpdateCustomerInput,CustomerOutput,IcpUpdateCustomerCodeInput, } from './crm.types';

@BaseUrl('/crm/CustomerIcp')
@Injectable({ providedIn: 'root' })
export class CustomerIcpService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CRM/CustomerIcp/CreateOrUpdate
     * 新增或者修改客户
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:IcpCreateOrUpdateCustomerInput

    ): Observable<CustomerOutput> {
        return null as any
    }

 
    /**
     * @param url /CRM/CustomerIcp/UpdateCode
     * 更新Code
     */

    @POST('updateCode')
    updateCode(
        @Payload
        _req:IcpUpdateCustomerCodeInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/CustomerIcp/Delete
     * 删除客户
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
