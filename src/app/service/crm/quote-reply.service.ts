import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { QuoteReplyDto,CoEntityDto, } from './crm.types';

@BaseUrl('/crm/QuoteReply')
@Injectable({ providedIn: 'root' })
export class QuoteReplyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CRM/QuoteReply/GetAllForCRM
     * 获取报价列表
     */

    @GET('getAllForCRM')
    getAllForCRM(
        @Payload
        _req: {id?:string} 

    ): Observable<ListResultDto<QuoteReplyDto>> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/Create
     * CRM创建报价
     */

    @POST('create')
    create(
        @Payload
        _req:QuoteReplyDto

    ): Observable<QuoteReplyDto> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/CheckExpiredReply
     * 检查过期报价
     */

    @POST('checkExpiredReply')
    checkExpiredReply(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/AcceptReply
     * 接受报价
     */

    @POST('acceptReply')
    acceptReply(
        @Payload
        _req:CoEntityDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/ReplyBooking
     * 预定订舱（提供csp操作时，系统自动调用）
     */

    @POST('replyBooking')
    replyBooking(
        @Payload
        _req:CoEntityDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/RejectReply
     * 拒绝报价
     */

    @POST('rejectReply')
    rejectReply(
        @Payload
        _req:CoEntityDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/RequestNewReply
     * 再一次请求报价
     */

    @POST('requestNewReply')
    requestNewReply(
        @Payload
        _req:CoEntityDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<QuoteReplyDto> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {replyNo?:string,carrierId?:string,transitTime?:string,sailSchedule?:string,validStartDate?:string,validEndDate?:string,creationTime?:string,status?:number,quoteEnquiryId?:string,quoteReplyItems?:any[],carrierName?:string,totalCharge?:string,unifiedTotalCharge?:number,id?:string} 

    ): Observable<PagedResultDto<QuoteReplyDto>> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:QuoteReplyDto

    ): Observable<QuoteReplyDto> {
        return null as any
    }


    /**
     * @param url /CRM/QuoteReply/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
