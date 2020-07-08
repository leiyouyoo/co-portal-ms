import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { ExternalLocationListDto,ExternalLocationDto,FBALocationListDto,CreateOrUpdateLocationExternalInput,AssignUsersToLocationDto,AssignLocationsToUserDto,UnbindUsersLocationDto,GlobalSearchInput,GlobalSearchOutput, } from './crm.types';

@BaseUrl('/crm/LocationExternal')
@Injectable({ providedIn: 'root' })
export class LocationExternalService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CRM/LocationExternal/GetLocationByCustomer
     * 获取客户下以及客户的合作伙伴的location、别人共享的地点
     */

    @GET('getLocationByCustomer')
    getLocationByCustomer(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetLocationByCustomerOwn
     * 获取客户自己的全部地址
     */

    @GET('getLocationByCustomerOwn')
    getLocationByCustomerOwn(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/Get
     * 根据Id查location
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ExternalLocationDto> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetForUpdate
     * 根据Id获取用于更新的location
     */

    @GET('getForUpdate')
    getForUpdate(
        @Payload
        _req: {locationId?:string,partnerId?:string} 

    ): Observable<ExternalLocationDto> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetAll
     * 获取地点列表（客户自己的或者合作伙伴的）
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {partnerId?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetLocationByIds
     * 根据地点集合查找地点
     */

    @POST('getLocationByIds')
    getLocationByIds(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetSharedList
     * 获取客户的共享地点(数据包含客户自己的、客户合作伙伴的、别人共享给客户的)
     */

    @GET('getSharedList')
    getSharedList(
        @Payload
        _req: {sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetFBALocations
     * 获取FBA地址
     */

    @GET('getFBALocations')
    getFBALocations(
        @Payload
        _req: {isCityocean?:boolean} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetFBALocationsByCustomer
     * 根据客户获取FBA地址
     */

    @GET('getFBALocationsByCustomer')
    getFBALocationsByCustomer(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetCustomerLocationAndFBALocations
     * 获取客户的地址以及海外仓
     */

    @GET('getCustomerLocationAndFBALocations')
    getCustomerLocationAndFBALocations(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<FBALocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/CreateCustomerLocation
     * 创建客户地点
     */

    @POST('createCustomerLocation')
    createCustomerLocation(
        @Payload
        _req:CreateOrUpdateLocationExternalInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/UpdateForCustomerLocation
     * 更新客户地点
     */

    @PUT('updateForCustomerLocation')
    updateForCustomerLocation(
        @Payload
        _req:CreateOrUpdateLocationExternalInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/CreatePartnerLocation
     * 创建合作伙伴地点
     */

    @POST('createPartnerLocation')
    createPartnerLocation(
        @Payload
        _req:CreateOrUpdateLocationExternalInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/UpdateForPartnerLocation
     * 更新合作伙伴地点
     */

    @PUT('updateForPartnerLocation')
    updateForPartnerLocation(
        @Payload
        _req:CreateOrUpdateLocationExternalInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GetByContactId
     * 获取联系人的地点
     */

    @GET('getByContactId')
    getByContactId(
        @Payload
        _req: {contactId?:string} 

    ): Observable<ListResultDto<ExternalLocationListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/AssignUsersToLocation
     * 赋值用户（联系人）到地点
     */

    @POST('assignUsersToLocation')
    assignUsersToLocation(
        @Payload
        _req:AssignUsersToLocationDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/AssignLocationsToUser
     * 赋值地点给用户（联系人）
     */

    @POST('assignLocationsToUser')
    assignLocationsToUser(
        @Payload
        _req:AssignLocationsToUserDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/UnbindUserLocation
     * 解除联系人地点绑定关系
     */

    @POST('unbindUserLocation')
    unbindUserLocation(
        @Payload
        _req:UnbindUsersLocationDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/Delete
     * 删除地点
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/LocationExternal/GlobalSearch
     * 全局搜索
     */

    @POST('globalSearch')
    globalSearch(
        @Payload
        _req:GlobalSearchInput

    ): Observable<ListResultDto<GlobalSearchOutput>> {
        return null as any
    }



  }
