import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { GetShipTrackInfoOutput,AddingVesselInfosTaskInput, } from './pub.types';

@BaseUrl('/pub/VesselInfos')
@Injectable({ providedIn: 'root' })
export class VesselInfosService extends BaseApi {
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

    ): Observable<GetShipTrackInfoOutput> {
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
     * 获取船舶信息
     */

    @GET('getVesselInfosNew')
    getVesselInfosNew(
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
        _req:AddingVesselInfosTaskInput

    ): Observable<any> {
        return null as any
    }



  }
