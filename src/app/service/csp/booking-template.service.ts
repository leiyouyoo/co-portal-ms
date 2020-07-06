import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { BookingTemplateOutput,BookingTemplateDto,BookingTemplateCheckInputDto, } from './csp.types';

@BaseUrl('/csp/BookingTemplate')
@Injectable({ providedIn: 'root' })
export class BookingTemplateService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/BookingTemplate/GetDetailById
     * 根据订舱单模板Id获取详情
     */

    @GET('getDetailById')
    getDetailById(
        @Payload
        _req: {id?:string} 

    ): Observable<BookingTemplateOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/BookingTemplate/GetAll
     * 分页获取
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<BookingTemplateOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/BookingTemplate/Create
     * 创建
     */

    @POST('create')
    create(
        @Payload
        _req:BookingTemplateDto

    ): Observable<BookingTemplateDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/BookingTemplate/Update
     * 订舱单模板编辑
     */

    @PUT('update')
    update(
        @Payload
        _req:BookingTemplateDto

    ): Observable<BookingTemplateDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/BookingTemplate/Check
     * 检验模板名称重复性问题
     */

    @POST('check')
    check(
        @Payload
        _req:BookingTemplateCheckInputDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/BookingTemplate/Delete
     * Deletes the specified input.
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
