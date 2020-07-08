import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { ConditionGroupInfo, } from './platform.types';

@BaseUrl('/platform/BusinessFilter')
@Injectable({ providedIn: 'root' })
export class BusinessFilterService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BusinessFilter/GetConditionGroup
     * 获取自定义的过滤条件组详情
     */

    @GET('getConditionGroup')
    getConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<ConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/GetConditionGroupList
     * 根据业务类型获取当前用户自定义的过滤条件组
     */

    @GET('getConditionGroupList')
    getConditionGroupList(
        @Payload
        _req: {businessType?:string} 

    ): Observable<ListResultDto<ConditionGroupInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/CreateOrUpdateConditionGroup
     * 新增或编辑用户自定义的过滤条件组
     */

    @POST('createOrUpdateConditionGroup')
    createOrUpdateConditionGroup(
        @Payload
        _req:ConditionGroupInfo

    ): Observable<ConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/DeleteConditionGroup
     * Deletes the condition group.
     */

    @DELETE('deleteConditionGroup')
    deleteConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
