import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { CustomerDto,CustomerListDto,MergeCustomerListInput,GetAllForUiPickerInput,ExternalPartnerAndCustomerDto,SearchCustomerOutput,CustomerOutput,CreateOrUpdateCustomerInput,GetCustomerByNameInput,CheckDeleteOutput,FollowCustomerInput,AssignCustomerInput,CustomerAndPartnerListDto,CustomerAuthenticateDto,AuditCustomerInput,MergeCustomerInput, } from './crm.types';

@BaseUrl('/crm/Customer')
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CRM/Customer/Get
     * 客户详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CustomerDto> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetAll
     * 分页获取我的客户
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,customerOwnerIds?:any[],isCooperation?:boolean,includeTaxes?:boolean,includeContacts?:boolean,includeShareOwner?:boolean,isUserContact?:boolean,isOwn?:boolean,customerId?:string,isPassedAudit?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetAllForMerge
     * 获取用于合并的客户
     */

    @POST('getAllForMerge')
    getAllForMerge(
        @Payload
        _req:MergeCustomerListInput

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetAllForUiPicker
     * 获取客户列表
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllForUiPickerInput

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetMyCustomerAndPartners
     * 获取业务员的客户及合作伙伴
     */

    @GET('getMyCustomerAndPartners')
    getMyCustomerAndPartners(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<ExternalPartnerAndCustomerDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetShares
     * 分页获取共享客户
     */

    @GET('getShares')
    getShares(
        @Payload
        _req: {searchText?:string,customerOwnerIds?:any[],isCooperation?:boolean,includeTaxes?:boolean,includeContacts?:boolean,includeShareOwner?:boolean,isUserContact?:boolean,isOwn?:boolean,customerId?:string,isPassedAudit?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetShareSources
     * 分页获取共享资源库
     */

    @GET('getShareSources')
    getShareSources(
        @Payload
        _req: {searchText?:string,customerOwnerIds?:any[],isCooperation?:boolean,includeTaxes?:boolean,includeContacts?:boolean,includeShareOwner?:boolean,isUserContact?:boolean,isOwn?:boolean,customerId?:string,isPassedAudit?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetOwnerlessCustomer
     * 获取无主客户
     */

    @GET('getOwnerlessCustomer')
    getOwnerlessCustomer(
        @Payload
        _req: {searchText?:string,customerOwnerIds?:any[],isCooperation?:boolean,includeTaxes?:boolean,includeContacts?:boolean,includeShareOwner?:boolean,isUserContact?:boolean,isOwn?:boolean,customerId?:string,isPassedAudit?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<OwnerLessPagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetOwnerCustomers
     * 获取当前业务员拥有的所有客户(开通租户的，包含联系人集合、地点集合)
     */

    @GET('getOwnerCustomers')
    getOwnerCustomers(
        @Payload
        _req: {userId?:number} 

    ): Observable<ListResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetOwnerCustomersBySalesId
     * 获取当前业务员拥有的所有客户(开通账号的)
     */

    @GET('getOwnerCustomersBySalesId')
    getOwnerCustomersBySalesId(
        @Payload
        _req: {userId?:number,isRegistered?:boolean} 

    ): Observable<ListResultDto<CustomerDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetAllBySearch
     * 分页搜索客户
     */

    @GET('getAllBySearch')
    getAllBySearch(
        @Payload
        _req: {name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetPeerAndDirectClient
     * 分页搜索直客跟同行客户（Rate用）
     */

    @GET('getPeerAndDirectClient')
    getPeerAndDirectClient(
        @Payload
        _req: {customerType?:number,name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetForwardingCompanies
     * 分页搜索同行客户
     */

    @GET('getForwardingCompanies')
    getForwardingCompanies(
        @Payload
        _req: {searchText?:string,includeDefault?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<SearchCustomerOutput>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCustomerPartners
     * 获取客户的合作伙伴对应的客户集合
     */

    @GET('getCustomerPartners')
    getCustomerPartners(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCustomerByName
     * 根据名称搜索客户（绑定合作伙伴搜索客户可用）
     */

    @GET('getCustomerByName')
    getCustomerByName(
        @Payload
        _req: {name?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCustomerByNameOrCode
     * 根据名称或代码搜索客户
     */

    @GET('getCustomerByNameOrCode')
    getCustomerByNameOrCode(
        @Payload
        _req: {searchText?:string,customerStatus?:number,isShared?:boolean,isOwnerLess?:boolean} 

    ): Observable<ListResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetForUpdate
     * 获取客户用于更新
     */

    @GET('getForUpdate')
    getForUpdate(
        @Payload
        _req: {customerId?:string} 

    ): Observable<CreateOrUpdateCustomerInput> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/Create
     * 创建客户
     */

    @POST('create')
    create(
        @Payload
        _req:CreateOrUpdateCustomerInput

    ): Observable<CustomerOutput> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/CheckDuplicateName
     * 校验客户重复名称
     */

    @POST('checkDuplicateName')
    checkDuplicateName(
        @Payload
        _req:GetCustomerByNameInput

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/Update
     * 更新客户
     */

    @PUT('update')
    update(
        @Payload
        _req:CreateOrUpdateCustomerInput

    ): Observable<CustomerOutput> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/CheckDelete
     * 验证删除
     */

    @POST('checkDelete')
    checkDelete(
        @Payload
        _req: {customerId?:string} 

    ): Observable<CheckDeleteOutput> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/Delete
     * 删除客户
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/ClaimCustomer
     * 认领客户（认领无主客户）
     */

    @POST('claimCustomer')
    claimCustomer(
        @Payload
        _req:FollowCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/FollowCustomer
     * 跟进客户（获取共享客户权限）
     */

    @POST('followCustomer')
    followCustomer(
        @Payload
        _req:FollowCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/TransferCustomer
     * 转让客户/指派客户
     */

    @POST('transferCustomer')
    transferCustomer(
        @Payload
        _req:AssignCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCustomerByType
     * 根据类型获取客户（船东、航空等类型）
     */

    @GET('getCustomerByType')
    getCustomerByType(
        @Payload
        _req: {customerType:number,name?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<ListResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetPageCustomerByType
     * 根据类型获取客户（分页）
     */

    @GET('getPageCustomerByType')
    getPageCustomerByType(
        @Payload
        _req: {customerType:number,name?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetDepartmentCustomer
     * 获取部门所有人员的客户
     */

    @GET('getDepartmentCustomer')
    getDepartmentCustomer(
        @Payload
        _req: {name?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCurrentCustomerAndPartner
     * 获取当前业务员所拥有的客户及合作伙伴(Rate创建询价用)
     */

    @GET('getCurrentCustomerAndPartner')
    getCurrentCustomerAndPartner(
        @Payload
        _req: {includePartner?:boolean} 

    ): Observable<ListResultDto<CustomerAndPartnerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/GetCustomerConfigure
     * 获取客户配置
     */

    @GET('getCustomerConfigure')
    getCustomerConfigure(
        @Payload
        _req: {customerId?:string} 

    ): Observable<CustomerAuthenticateDto> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/CustomerConfigure
     * 客户配置\开通租户
     */

    @POST('customerConfigure')
    customerConfigure(
        @Payload
        _req:CustomerAuthenticateDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/UpdateCustomerConfigure
     * 更新客户配置
     */

    @PUT('updateCustomerConfigure')
    updateCustomerConfigure(
        @Payload
        _req:CustomerAuthenticateDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/AuditCustomer
     * 提交审核客户
     */

    @POST('auditCustomer')
    auditCustomer(
        @Payload
        _req:AuditCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/Customer/MergeCustomer
     * 合并客户
     */

    @POST('mergeCustomer')
    mergeCustomer(
        @Payload
        _req:MergeCustomerInput

    ): Observable<any> {
        return null as any
    }



  }
