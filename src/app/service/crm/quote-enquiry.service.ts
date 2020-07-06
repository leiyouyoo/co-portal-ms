import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { QuoteEnquiryDto,QuoteEnquiryListForCRMOutput,QuoteEnquiryListForCRMInput,CustomerListModel,GetRelatedQuoteForCRMOutput,QuoteEnquiryListForCSPInput,QuoteEnquiryListForCSPOutput,Object, } from './crm.types';

@BaseUrl('/crm/QuoteEnquiry')
@Injectable({ providedIn: 'root' })
export class QuoteEnquiryService extends BaseApi {

   
    /**
     * @param url /CRM/QuoteEnquiry/GetForCRM
     * CRM获取详情页（询报价均有返回）
     */

    @GET('getForCRM')
    getForCRM(
        @Payload
        _req: {id?:string} 

    ): Observable<QuoteEnquiryDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetAllForCRM
     * CRM获取询价列表
     */

    @GET('getAllForCRM')
    getAllForCRM(
        @Payload
        _req: {status?:number,tradeTypes?:string,historyDataType?:number,userId?:number,customerId?:string,name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<QuoteEnquiryListForCRMOutput>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetCRMCustomerAndUserHistorys
     * CRM获取所有客户用户历史数据(条件检索)
     */

    @GET('getCRMCustomerAndUserHistorys')
    getCRMCustomerAndUserHistorys(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<QuoteEnquiryListForCRMInput>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetCRMCustomerBindUserHistorys
     * CRM获取客户最近5条数据联动用户
     */

    @GET('getCRMCustomerBindUserHistorys')
    getCRMCustomerBindUserHistorys(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<CustomerListModel>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetRelatedQuoteForCRM
     * CRM获取相关的报价（询价路线和订舱路线全匹配），用来选择报价（只有沟通中、已接受的）
     */

    @GET('getRelatedQuoteForCRM')
    getRelatedQuoteForCRM(
        @Payload
        _req: {originPortId?:string,originAddressId?:string,destinationPortId?:string,destinationAddressId?:string,incotermsString:string,shipperCustomerId?:string,consigneeCustomerId?:string} 

    ): Observable<GetRelatedQuoteForCRMOutput> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/Create
     * CSP创建询价 / CRM创建询报价
     */

    @POST('create')
    create(
        @Payload
        _req:QuoteEnquiryDto

    ): Observable<QuoteEnquiryDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetTeamUser
     * 根据询价Id获取拥有者和绑定销售
     */

    @GET('getTeamUser')
    getTeamUser(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetListByIds
     * 根据多个QuoteEnquiryId获取对应详情
     */

    @POST('getListByIds')
    getListByIds(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<QuoteEnquiryDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetForCSP
     * CSP获取详情页（询报价均有返回）
     */

    @GET('getForCSP')
    getForCSP(
        @Payload
        _req: {id?:string} 

    ): Observable<QuoteEnquiryDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetAllForCSP
     * CSP获取询价列表
     */

    @POST('getAllForCSP')
    getAllForCSP(
        @Payload
        _req:QuoteEnquiryListForCSPInput

    ): Observable<PagedResultDto<QuoteEnquiryListForCSPOutput>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetHistorys
     * CSP获取历史包括（港口、地址、FBA地址等）
     */

    @GET('getHistorys')
    getHistorys(
        @Payload
        _req: {historyDataType?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<Object>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<QuoteEnquiryDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {status?:any[],freightMethodTypes?:string,location.Id?:string,location.Country?:string,location.Province?:string,location.City?:string,location.Name?:string,location.HistoryDataType?:number,ownerIds?:any[],searchKey?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<QuoteEnquiryDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:QuoteEnquiryDto

    ): Observable<QuoteEnquiryDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/QuoteEnquiry/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
