import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { ShipmentDto,PreShipmentListInput,PreShipmentListItemDto,ShipmentListItemDto,CreateOrUpdateShipmentInput,WarehousingDto,ChangeShipmentInvalidStatusInput,SetShipmentPostAgentCustomerInput,GetShipmentListInput, } from './fcm.types';

@BaseUrl('/fcm/Shipment')
@Injectable({ providedIn: 'root' })
export class ShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/Shipment/Get
     * 获取已受理单明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ShipmentDto> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetAllPreShipment
     * 分页获取预报单列表
     */

    @POST('getAllPreShipment')
    getAllPreShipment(
        @Payload
        _req:PreShipmentListInput

    ): Observable<PagedResultDto<PreShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetForUpdate
     * 获取用于更新
     */

    @GET('getForUpdate')
    getForUpdate(
        @Payload
        _req: {id?:string} 

    ): Observable<CreateOrUpdateShipmentInput> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/CreateOrUpdate
     * 创建或编辑订单
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:CreateOrUpdateShipmentInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/Warehousing
     * 入仓
     */

    @POST('warehousing')
    warehousing(
        @Payload
        _req:WarehousingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/ChangeInvalidStatus
     * 作废或取消作废指定的 Shipment(s)
     */

    @POST('changeInvalidStatus')
    changeInvalidStatus(
        @Payload
        _req:ChangeShipmentInvalidStatusInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/SetPostAgentCustomer
     * 设置 Shipment(s) 的后段代理，已分配数据不能重复分配
     */

    @POST('setPostAgentCustomer')
    setPostAgentCustomer(
        @Payload
        _req:SetShipmentPostAgentCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/Delete
     * 删除预报单
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetShipmentList
     * 获取已受理列表数据
     */

    @POST('getShipmentList')
    getShipmentList(
        @Payload
        _req:GetShipmentListInput

    ): Observable<PagedResultDto<ShipmentListItemDto>> {
        return null as any
    }



  }
