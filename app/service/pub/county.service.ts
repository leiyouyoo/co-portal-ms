import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBCountyDto,PUBListResultDto,PUBPagedResultDto, } from './pub.types';

@BaseUrl('/pub/County')
@Injectable({ providedIn: 'root' })
export class PUBCountyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/County/Get
     * 获取区县镇
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBCountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/GetAll
     * 获取区县镇列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,parentId?:string,isRecursion?:boolean,id?:string} 

    ): Observable<PUBListResultDto<PUBCountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/County/GetFlatList
     * 获取区县镇列表（不区分上下级）
     */

    @GET('getFlatList')
    getFlatList(
        @Payload
        _req: {id?:string,code?:string,name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBCountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/County/CreateOrUpdate
     * 创建或更新地区-前端提交只需调用这个方法即可
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBCountyDto

    ): Observable<PUBCountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Create
     * 创建地区
     */

    @POST('create')
    create(
        @Payload
        _req:PUBCountyDto

    ): Observable<PUBCountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Update
     * 更新地区
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBCountyDto

    ): Observable<PUBCountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Delete
     * 删除区县镇
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
