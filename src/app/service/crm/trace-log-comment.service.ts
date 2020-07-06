import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { TraceLogCommentListDto,CreateTraceLogCommentInput, } from './crm.types';

@BaseUrl('/crm/TraceLogComment')
@Injectable({ providedIn: 'root' })
export class TraceLogCommentService extends BaseApi {

   
    /**
     * @param url /CRM/TraceLogComment/GetAll
     * 分页获取评论
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {traceLogId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<TraceLogCommentListDto>> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLogComment/Create
     * 发表日志评论
     */

    @POST('create')
    create(
        @Payload
        _req:CreateTraceLogCommentInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CRM/TraceLogComment/Delete
     * 删除日志评论
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
