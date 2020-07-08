import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { CustomerAccessAllowOutput, } from './crm.types';

@BaseUrl('/crm/CustomerAccessAllow')
@Injectable({ providedIn: 'root' })
export class CustomerAccessAllowService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CRM/CustomerAccessAllow/GetAll
     * 客户访问权限列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerAccessAllowOutput>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerAccessAllow/Create
     * 添加客户访问权限
     */

    @POST('create')
    create(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
