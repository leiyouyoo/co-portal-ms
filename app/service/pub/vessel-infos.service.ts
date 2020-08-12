import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBGetShipTrackInfoOutput,PUBAddingVesselInfosTaskInput, } from './pub.types';

@BaseUrl('/pub/VesselInfos')
@Injectable({ providedIn: 'root' })
export class PUBVesselInfosService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/VesselInfos/GetShipTrackInfo
     * 根据港口获取轨迹信息
     */

    @GET('getShipTrackInfo')
    getShipTrackInfo(
        @Payload
        _req: {pOLCode:string,pODCode:string,vesselName?:string} 

    ): Observable<PUBGetShipTrackInfoOutput> {
        return null as any
    }


    /**
     * @param url /PUB/VesselInfos/GetCurrentPositions
     * 获取当前船名坐标（可批量获取）
     */

    @POST('getCurrentPositions')
    getCurrentPositions(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/VesselInfos/GetVesselInfosNew
     * 获取需获取的船任务列表中当前轨迹数据
     */

    @GET('getVesselInfosNew')
    getVesselInfosNew(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/VesselInfos/SyncShipTrackingInfo
     * 同步船舶轨迹的数据
     */

    @POST('syncShipTrackingInfo')
    syncShipTrackingInfo(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/VesselInfos/SyncIcpUsers
     * 
     */

    @POST('syncIcpUsers')
    syncIcpUsers(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/VesselInfos/AddingVesselInfosTask
     * 添加船舶轨迹定时任务
     */

    @POST('addingVesselInfosTask')
    addingVesselInfosTask(
        @Payload
        _req:PUBAddingVesselInfosTaskInput

    ): Observable<any> {
        return null as any
    }



  }
