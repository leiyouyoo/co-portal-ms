import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ContactDto,ContactListDto,CheckContactEmailInput,CheckContactEmailOutput,CheckMainContact,CommonResponse,CreateOrUpdateContactInput,ResetUserPasswordInput, } from './crm.types';

@BaseUrl('/crm/Contact')
@Injectable({ providedIn: 'root' })
export class ContactService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CRM/Contact/Get
     * 获取联系人详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ContactDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/GetByIds
     * 根据联系人id集合获取联系人集合
     */

    @GET('getByIds')
    getByIds(
        @Payload
        _req: {ids?:any[]} 

    ): Observable<ListResultDto<ContactDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/GetAllByCustomer
     * 客户或合作伙伴的所有联系人(仅限业务员自己创建的)
     */

    @GET('getAllByCustomer')
    getAllByCustomer(
        @Payload
        _req: {partnerId?:string,customerId?:string,isRegistered?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<ListResultDto<ContactListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/GetByCustomerOrPartner
     * 分页获取客户或合作伙伴的联系人
     */

    @GET('getByCustomerOrPartner')
    getByCustomerOrPartner(
        @Payload
        _req: {partnerId?:string,customerId?:string,isRegistered?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<ContactListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/GetByLocationId
     * 获取地点下的联系人
     */

    @GET('getByLocationId')
    getByLocationId(
        @Payload
        _req: {locationId?:string} 

    ): Observable<ListResultDto<ContactListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/GetByNameOrTel
     * 根据联系人名称或电话搜索当前登录人的
     */

    @GET('getByNameOrTel')
    getByNameOrTel(
        @Payload
        _req: {searchText?:string,type?:number} 

    ): Observable<ListResultDto<ContactListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/CheckEmailRepeat
     * 验证email是否注册过
     */

    @POST('checkEmailRepeat')
    checkEmailRepeat(
        @Payload
        _req:CheckContactEmailInput

    ): Observable<CheckContactEmailOutput> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/CheckHasMainContact
     * 验证是否已有主联系人
     */

    @POST('checkHasMainContact')
    checkHasMainContact(
        @Payload
        _req:CheckMainContact

    ): Observable<CommonResponse> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/CreateForCustomer
     * 创建客户联系人(可选同步开通租户账号)
     */

    @POST('createForCustomer')
    createForCustomer(
        @Payload
        _req:CreateOrUpdateContactInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/CreateForPartner
     * 创建合作伙伴联系人
     */

    @POST('createForPartner')
    createForPartner(
        @Payload
        _req:CreateOrUpdateContactInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/Update
     * 更新联系人
     */

    @PUT('update')
    update(
        @Payload
        _req:CreateOrUpdateContactInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/Delete
     * 删除联系人
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/UnbindOrDeleteUser
     * 解绑/删除用户
     */

    @POST('unbindOrDeleteUser')
    unbindOrDeleteUser(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/Contact/ResetUserPassword
     * 重置密码
     */

    @POST('resetUserPassword')
    resetUserPassword(
        @Payload
        _req:ResetUserPasswordInput

    ): Observable<any> {
        return null as any
    }



  }
