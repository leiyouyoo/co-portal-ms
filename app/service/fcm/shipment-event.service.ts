import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import {  } from './fcm.types';

@BaseUrl('/fcm/ShipmentEvent')
@Injectable({ providedIn: 'root' })
export class FCMShipmentEventService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/ShipmentEvent/BatchCreateOrUpdate
     * 批量新增操作事件
     */

    @POST('batchCreateOrUpdate')
    batchCreateOrUpdate(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/ShipmentEvent/BatchCreateOrUpdateForIcp
     * ICP新增或更新操作事件接口
     */

    @POST('batchCreateOrUpdateForIcp')
    batchCreateOrUpdateForIcp(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/ShipmentEvent/GetEventsAsync
     * 获取操作事件
     */

    @GET('getEventsAsync')
    getEventsAsync(
        @Payload
        _req: {deliveryId?:string,shipmentId?:string} 

    ): Observable<any> {
        return null as any
    }



  }
