import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { JPushUserIdBindRegistrationIdDto, } from './platform.types';

@BaseUrl('/platform/JPush')
@Injectable({ providedIn: 'root' })
export class JPushService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/JPush/CreateAsync
     * 用于app端用户每次登录时调用
     */

    @POST('createAsync')
    createAsync(
        @Payload
        _req:JPushUserIdBindRegistrationIdDto

    ): Observable<JPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/CreateOrUpdate
     * 保存
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:JPushUserIdBindRegistrationIdDto

    ): Observable<JPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<JPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {sorting?:string,skipCount?:number,maxResultCount?:number} 

    ): Observable<PagedResultDto<JPushUserIdBindRegistrationIdDto>> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:JPushUserIdBindRegistrationIdDto

    ): Observable<JPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:JPushUserIdBindRegistrationIdDto

    ): Observable<JPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Delete
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
