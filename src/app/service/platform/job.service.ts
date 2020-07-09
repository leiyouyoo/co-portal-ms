import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { JobDto, } from './platform.types';

@BaseUrl('/platform/Job')
@Injectable({ providedIn: 'root' })
export class JobService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Job/GetAll
     * 返回职务集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {jobTypeId?:string,searchText?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<JobDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Get
     * 获取职务详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<JobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Create
     * 创建职务
     */

    @POST('create')
    create(
        @Payload
        _req:JobDto

    ): Observable<JobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Update
     * 更新职务
     */

    @PUT('update')
    update(
        @Payload
        _req:JobDto

    ): Observable<JobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/CreateOrUpdate
     * 创建或更新职务
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:JobDto

    ): Observable<JobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Delete
     * 删除职务
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
