import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { ShipmentItemDto,ShipmentItemContainerDto,OrderItemInShipmentItemContainerDto,ShipmentOrderItemInContainerDto,CoEntityDto, } from './csp.types';

@BaseUrl('/csp/ShipmentItem')
@Injectable({ providedIn: 'root' })
export class ShipmentItemService extends BaseApi {

   
    /**
     * @param url /CSP/ShipmentItem/BatchCreateOrUpdate
     * 批量新建或更新提单
     */

    @POST('batchCreateOrUpdate')
    batchCreateOrUpdate(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/CreateOrUpdate
     * 新建或更新提单
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:ShipmentItemDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/Create
     * 新增提单
     */

    @POST('create')
    create(
        @Payload
        _req:ShipmentItemDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/Update
     * Updates the specified input.
     */

    @POST('update')
    update(
        @Payload
        _req:ShipmentItemDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/UpdatePostPortEstDate
     * 更新港后预估时间
     */

    @POST('updatePostPortEstDate')
    updatePostPortEstDate(
        @Payload
        _req:ShipmentItemDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/GetAllForIcpByShipmentId
     * icp根据shipmentId获取相关的提单数据
     */

    @GET('getAllForIcpByShipmentId')
    getAllForIcpByShipmentId(
        @Payload
        _req: {id?:string} 

    ): Observable<ListResultDto<ShipmentItemDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/Get
     * icp根据提单id获取指定提单
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ShipmentItemDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/CreateOrUpdateShipmentItemContainers
     * 批量创建或更新提单箱
     */

    @POST('createOrUpdateShipmentItemContainers')
    createOrUpdateShipmentItemContainers(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/CreateOrUpdateShipmentItemContainer
     * 创建或更新提单箱
     */

    @POST('createOrUpdateShipmentItemContainer')
    createOrUpdateShipmentItemContainer(
        @Payload
        _req:ShipmentItemContainerDto

    ): Observable<ShipmentItemContainerDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/CreateOrderItemInContainers
     * 创建 PO Item 与提单箱关系
     */

    @POST('createOrderItemInContainers')
    createOrderItemInContainers(
        @Payload
        _req:OrderItemInShipmentItemContainerDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/GetShipmentOrderItemInContainers
     * 根据 ShipmentId 返回装箱信息
     */

    @GET('getShipmentOrderItemInContainers')
    getShipmentOrderItemInContainers(
        @Payload
        _req: {id?:string} 

    ): Observable<ListResultDto<ShipmentOrderItemInContainerDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentItem/Delete
     * Deletes the specified input.
     */

    @POST('delete')
    delete(
        @Payload
        _req:CoEntityDto[]

    ): Observable<any> {
        return null as any
    }



  }
