import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { EditionDto,SetEditionPermissionsInput,GrantToTenantsInput,RevokeFromTenantsInput, } from './platform.types';

@BaseUrl('/platform/Edition')
@Injectable({ providedIn: 'root' })
export class EditionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Edition/GetAll
     * 返回版本集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<EditionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Get
     * 获取版本明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<EditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Create
     * 创建
     */

    @POST('create')
    create(
        @Payload
        _req:EditionDto

    ): Observable<EditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/CreateOrUpdate
     * 创建或更新版本
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:EditionDto

    ): Observable<EditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Update
     * 更新
     */

    @PUT('update')
    update(
        @Payload
        _req:EditionDto

    ): Observable<EditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Delete
     * 删除
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GetPermissions
     * 获取指定版本下的可用功能点集合
     */

    @GET('getPermissions')
    getPermissions(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/SetPermissions
     * 批量设置权限
     */

    @POST('setPermissions')
    setPermissions(
        @Payload
        _req:SetEditionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RemovePermissions
     * 删除权限
     */

    @DELETE('removePermissions')
    removePermissions(
        @Payload
        _req: {functionPermissionIds?:any[],id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GrantToTenants
     * 授予指定版本给租户
     */

    @POST('grantToTenants')
    grantToTenants(
        @Payload
        _req:GrantToTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RevokeFromTenants
     * 授予指定版本给租户
     */

    @POST('revokeFromTenants')
    revokeFromTenants(
        @Payload
        _req:RevokeFromTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GetByTenantId
     * 根据租户获取指定版本
     */

    @GET('getByTenantId')
    getByTenantId(
        @Payload
        _req: {id?:number} 

    ): Observable<EditionDto> {
        return null as any
    }



  }
