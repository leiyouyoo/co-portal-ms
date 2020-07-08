import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { CreateOrUpdateShipmentInput,ChangeShipmentInvalidStatusInput,GetPostAgentCustomerListOutput,SetShipmentPostAgentCustomerInput, } from './fcm.types';

@BaseUrl('/fcm/Shipment')
@Injectable({ providedIn: 'root' })
export class ShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
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
     * @param url /FCM/Shipment/GetPostAgentCustomerList
     * 获取有效的后段代理列表
     */

    @GET('getPostAgentCustomerList')
    getPostAgentCustomerList(
        @Payload
        _req: {input?:object} 

    ): Observable<GetPostAgentCustomerListOutput> {
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



  }
