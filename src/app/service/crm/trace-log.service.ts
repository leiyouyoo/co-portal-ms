import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { TraceLogListDto,CreateTraceLogInput, } from './crm.types';

@BaseUrl('/crm/TraceLog')
@Injectable({ providedIn: 'root' })
export class TraceLogService extends BaseApi {

   
    /**
     * @param url /CRM/TraceLog/Get
     * 获取单条跟进记录详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<TraceLogListDto> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLog/GetAll
     * 分页获取日志
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {customerId?:string,userId?:number,traceLogTypeId?:string,content?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<TraceLogListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLog/Create
     * 发表日志
     */

    @POST('create')
    create(
        @Payload
        _req:CreateTraceLogInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLog/Update
     * 编辑日志
     */

    @PUT('update')
    update(
        @Payload
        _req:CreateTraceLogInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLog/Delete
     * 删除日志
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLog/AddPraise
     * 给日志点赞
     */

    @POST('addPraise')
    addPraise(
        @Payload
        _req: {traceLogId?:string} 

    ): Observable<any> {
        return null as any
    }



  }
