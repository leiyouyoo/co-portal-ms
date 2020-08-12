import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMEShipmentDto,FCMGetPreShipmentListInput,FCMPreShipmentListItemDto,FCMPagedResultDto,FCMECreateOrUpdateShipmentInput,FCMWarehousingDto,FCMChangeShipmentInvalidStatusInput,FCMSetPostAgentCustomerInput,FCMGetEShipmentListInput,FCMEShipmentListItemDto,FCMGetDeliveryInfoListInput,FCMDeliveryInfoListItemDto,FCMPrintBillDto,FCMEApplyBookingsInput,FCMDeliveryInfoEditDto,FCMDeliveryInfoDetailDto, } from './fcm.types';

@BaseUrl('/fcm/EShipment')
@Injectable({ providedIn: 'root' })
export class FCMEShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/EShipment/Get
     * 获取已受理单明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMEShipmentDto> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/GetAllPreShipment
     * 分页获取预报单列表
     */

    @POST('getAllPreShipment')
    getAllPreShipment(
        @Payload
        _req:FCMGetPreShipmentListInput

    ): Observable<FCMPagedResultDto<FCMPreShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/GetForUpdate
     * 获取用于更新
     */

    @GET('getForUpdate')
    getForUpdate(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMECreateOrUpdateShipmentInput> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/CreateOrUpdate
     * 创建或编辑订单
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:FCMECreateOrUpdateShipmentInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/Warehousing
     * 入仓
     */

    @POST('warehousing')
    warehousing(
        @Payload
        _req:FCMWarehousingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/ChangeInvalidStatus
     * 作废或取消作废指定的 Shipment(s)
     */

    @POST('changeInvalidStatus')
    changeInvalidStatus(
        @Payload
        _req:FCMChangeShipmentInvalidStatusInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/SetPostAgentCustomer
     * 设置 Shipment(s) 的后段代理，已分配数据不能重复分配
     */

    @POST('setPostAgentCustomer')
    setPostAgentCustomer(
        @Payload
        _req:FCMSetPostAgentCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/Delete
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
     * @param url /FCM/EShipment/GetShipmentList
     * 获取已受理列表数据
     */

    @POST('getShipmentList')
    getShipmentList(
        @Payload
        _req:FCMGetEShipmentListInput

    ): Observable<FCMPagedResultDto<FCMEShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/GetDeliveryInfoList
     * 获取配送列表数据
     */

    @POST('getDeliveryInfoList')
    getDeliveryInfoList(
        @Payload
        _req:FCMGetDeliveryInfoListInput

    ): Observable<FCMPagedResultDto<FCMDeliveryInfoListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/GetShipmentBill
     * 获取打印账单运单信息
     */

    @GET('getShipmentBill')
    getShipmentBill(
        @Payload
        _req: {shipmentId?:string} 

    ): Observable<FCMPrintBillDto> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/ApplyBooking
     * 申请订舱
     */

    @POST('applyBooking')
    applyBooking(
        @Payload
        _req:FCMEApplyBookingsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/UpdateDeliveryInfo
     * 编辑配送信息
     */

    @PUT('updateDeliveryInfo')
    updateDeliveryInfo(
        @Payload
        _req:FCMDeliveryInfoEditDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/GetDeliveryInfo
     * 获取配送明细信息
     */

    @GET('getDeliveryInfo')
    getDeliveryInfo(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMDeliveryInfoDetailDto> {
        return null as any
    }


    /**
     * @param url /FCM/EShipment/CheckAgentCustomer
     * 校验承运人
     */

    @POST('checkAgentCustomer')
    checkAgentCustomer(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
