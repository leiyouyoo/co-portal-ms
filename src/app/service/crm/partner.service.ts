import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { PartnerDto,PartnerListDto,CreateOrUpdatePartnerDto,PartnerBindCustomerInput,UnBindCustomerInput, } from './crm.types';

@BaseUrl('/crm/Partner')
@Injectable({ providedIn: 'root' })
export class PartnerService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CRM/Partner/Get
     * 根据合作伙伴id获取合作伙伴
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PartnerDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/Partner/GetAll
     * 分页获取客户下的合作伙伴
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<PartnerListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Partner/Create
     * 创建客户并创建合作伙伴(转为客户也可用)
     */

    @POST('create')
    create(
        @Payload
        _req:CreateOrUpdatePartnerDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Partner/BindCustomer
     * 给合作伙伴绑定客户
     */

    @POST('bindCustomer')
    bindCustomer(
        @Payload
        _req:PartnerBindCustomerInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Partner/UnBindCustomer
     * 解除合作伙伴绑定的客户
     */

    @POST('unBindCustomer')
    unBindCustomer(
        @Payload
        _req:UnBindCustomerInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Partner/Delete
     * 删除合作伙伴
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
