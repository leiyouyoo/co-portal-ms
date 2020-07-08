import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { CostItemDto,CostItemCheckDto,CostItemFlatDto, } from './pub.types';

@BaseUrl('/pub/CostItem')
@Injectable({ providedIn: 'root' })
export class CostItemService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/CostItem/Get
     * 获取费用代码明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CostItemDto> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/GetAll
     * 获取费用代码列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,property?:boolean,isValid?:boolean,parentId?:string} 

    ): Observable<PagedResultDto<CostItemDto>> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:CostItemCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/CreateOrUpdate
     * 创建或更新费用代码
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:CostItemDto

    ): Observable<CostItemDto> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/Create
     * 创建费用代码
     */

    @POST('create')
    create(
        @Payload
        _req:CostItemDto

    ): Observable<CostItemDto> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/Update
     * 更新地区
     */

    @PUT('update')
    update(
        @Payload
        _req:CostItemDto

    ): Observable<CostItemDto> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/Delete
     * 删除地区
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/GetTree
     * 获取树
     */

    @GET('getTree')
    getTree(
        @Payload
        _req: {parentId?:string} 

    ): Observable<ListResultDto<CostItemDto>> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/GetRootTree
     * 获取最顶级的集合
     */

    @GET('getRootTree')
    getRootTree(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<CostItemFlatDto>> {
        return null as any
    }


    /**
     * @param url /PUB/CostItem/GetChildren
     * 根据父级Id获取扁平子集
     */

    @GET('getChildren')
    getChildren(
        @Payload
        _req: {parentId?:string} 

    ): Observable<ListResultDto<CostItemFlatDto>> {
        return null as any
    }



  }
