import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { CacheExampleDto,EntityHistorySnapshot, } from './platform.types';

@BaseUrl('/platform/CacheExample')
@Injectable({ providedIn: 'root' })
export class CacheExampleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/CacheExample/GetAll
     * 返回样例集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CacheExampleDto>> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Get
     * 获取样例明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Create
     * 创建
     */

    @POST('create')
    create(
        @Payload
        _req:CacheExampleDto

    ): Observable<CacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/BulkInsert
     * 批量插入
     */

    @POST('bulkInsert')
    bulkInsert(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Update
     * 更新
     */

    @PUT('update')
    update(
        @Payload
        _req:CacheExampleDto

    ): Observable<CacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Test
     * 本地化测试
     */

    @POST('test')
    test(
        @Payload
        _req: {} 

    ): Observable<EntityHistorySnapshot> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Delete
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
