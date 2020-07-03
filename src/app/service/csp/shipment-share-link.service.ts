import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { ShipmentShareLinkDto,CoEntityDto,ShipmentShareLinkDetailOutput, } from './csp.types';

@BaseUrl('/csp/ShipmentShareLink')
@Injectable({ providedIn: 'root' })
export class ShipmentShareLinkService extends BaseApi {

   
    /**
     * @param url /CSP/ShipmentShareLink/Create
     * 创建数据
     */

    @POST('create')
    create(
        @Payload
        _req:ShipmentShareLinkDto

    ): Observable<ShipmentShareLinkDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentShareLink/Update
     * 编辑数据（用于发送邮件）
     */

    @PUT('update')
    update(
        @Payload
        _req:ShipmentShareLinkDto

    ): Observable<ShipmentShareLinkDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentShareLink/GetAll
     * 获取列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {shipmentId:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<ShipmentShareLinkDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentShareLink/Cancel
     * 作废
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:CoEntityDto[]

    ): Observable<ShipmentShareLinkDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentShareLink/GetDetail
     * 分享详情页
     */

    @GET('getDetail')
    getDetail(
        @Payload
        _req: {id?:string} 

    ): Observable<ShipmentShareLinkDetailOutput> {
        return null as any
    }



  }
