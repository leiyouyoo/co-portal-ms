import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { PurchaseOrderDetailOutput,GetPurchaseOrderListInput,PurchaseOrderListDto,PurchaseOrderListToProductDto,ProductDto,PurchaseOrderListDetailOutput,PurchaseOrderChangeDetailOutput,ViewChangeInput,PurchaseOrderDto,PurchaseOrderConfirmInput,PurchaseOrderRejectInput,PurchaseOrderBookingInput,PurchaseOrderBookingOutput,PurchaseOrderBookingSearchInput,PurchaseOrderBookingSearchOutput,PurchaseOrderImportInput,ImportResult,PurchaseOrderExportInput,ConditionItemAttribute,PurchaseOrderFilterDto,DeleteByItemIdInput, } from './csp.types';

@BaseUrl('/csp/PurchaseOrder')
@Injectable({ providedIn: 'root' })
export class PurchaseOrderService extends BaseApi {

   
    /**
     * @param url /CSP/PurchaseOrder/Get
     * 获取采购订单明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PurchaseOrderDetailOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetAll
     * 获取采购订单列表
     */

    @POST('getAll')
    getAll(
        @Payload
        _req:GetPurchaseOrderListInput

    ): Observable<PagedResultDto<PurchaseOrderListDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetAllByProductId
     * 根据产品Id获取采购订单列表
     */

    @GET('getAllByProductId')
    getAllByProductId(
        @Payload
        _req: {productId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<PurchaseOrderListToProductDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetListDetailByProductId
     * 根据产品Id获取采购订单列表明细
     */

    @GET('getListDetailByProductId')
    getListDetailByProductId(
        @Payload
        _req: {productId?:string,id?:string} 

    ): Observable<ListResultDto<PurchaseOrderListDetailOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetListDetail
     * 获取采购订单列表明细
     */

    @GET('getListDetail')
    getListDetail(
        @Payload
        _req: {id?:string} 

    ): Observable<ListResultDto<PurchaseOrderListDetailOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetChangeDetail
     * 获取采购订单修改记录.
     */

    @GET('getChangeDetail')
    getChangeDetail(
        @Payload
        _req: {id?:string} 

    ): Observable<PurchaseOrderChangeDetailOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/ViewChange
     * 查看变更记录
     */

    @POST('viewChange')
    viewChange(
        @Payload
        _req:ViewChangeInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetShipmentProducts
     * 获取Shipments产品列表
     */

    @GET('getShipmentProducts')
    getShipmentProducts(
        @Payload
        _req: {productIds?:any[]} 

    ): Observable<ListResultDto<ProductDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetShipmentPurchaseOrders
     * 获取Shipments采购订单列表
     */

    @GET('getShipmentPurchaseOrders')
    getShipmentPurchaseOrders(
        @Payload
        _req: {orderIds?:any[]} 

    ): Observable<ListResultDto<PurchaseOrderDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Create
     * 创建采购订单
     */

    @POST('create')
    create(
        @Payload
        _req:PurchaseOrderDto

    ): Observable<PurchaseOrderDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Update
     * 更新采购订单
     */

    @PUT('update')
    update(
        @Payload
        _req:PurchaseOrderDto

    ): Observable<PurchaseOrderDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Confirm
     * 确认采购订单
     */

    @POST('confirm')
    confirm(
        @Payload
        _req:PurchaseOrderConfirmInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Reject
     * 拒绝采购订单
     */

    @POST('reject')
    reject(
        @Payload
        _req:PurchaseOrderRejectInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Booking
     * 创建Booking
     */

    @POST('booking')
    booking(
        @Payload
        _req:PurchaseOrderBookingInput

    ): Observable<PurchaseOrderBookingOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/BookingSearch
     * Booking搜索绑定
     */

    @POST('bookingSearch')
    bookingSearch(
        @Payload
        _req:PurchaseOrderBookingSearchInput

    ): Observable<ListResultDto<PurchaseOrderBookingSearchOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Import
     * 上传采购订单
     */

    @POST('import')
    import(
        @Payload
        _req:PurchaseOrderImportInput

    ): Observable<ImportResult> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/Export
     * 下载采购订单
     */

    @POST('export')
    export(
        @Payload
        _req:PurchaseOrderExportInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilters
     * 获取Filters内容
     */

    @GET('getFilters')
    getFilters(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<ConditionItemAttribute>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilterProductList
     * 获取Filter产品列表
     */

    @GET('getFilterProductList')
    getFilterProductList(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<PurchaseOrderFilterDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilterCompanyList
     * 获取Filter公司列表
     */

    @GET('getFilterCompanyList')
    getFilterCompanyList(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<PurchaseOrderFilterDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilterReceiverList
     * 获取Filter接收人列表
     */

    @GET('getFilterReceiverList')
    getFilterReceiverList(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<PurchaseOrderFilterDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilterSenderList
     * 获取Filter发送人列表
     */

    @GET('getFilterSenderList')
    getFilterSenderList(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<PurchaseOrderFilterDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/GetFilterStatusList
     * 获取Filter状态列表
     */

    @GET('getFilterStatusList')
    getFilterStatusList(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<PurchaseOrderFilterDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/PurchaseOrder/DeleteByItemId
     * 移除 Order Item
     */

    @POST('deleteByItemId')
    deleteByItemId(
        @Payload
        _req:DeleteByItemIdInput

    ): Observable<any> {
        return null as any
    }



  }
