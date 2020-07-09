import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { PermissionDto,MovePermissionItemInput,GrantFunctionPermissionsToUserInput,RevokeUserFunctionPermissionsInput,GrantFunctionPermissionsToRoleInput,RevokeRoleFunctionPermissionsInput,DataPermissionDto,GrantDataPermissionsToUserInput,RevokeUserDataPermissionsInput,GrantDataPermissionsToRoleInput,RevokeRoleDataPermissionsInput, } from './platform.types';

@BaseUrl('/platform/Permission')
@Injectable({ providedIn: 'root' })
export class PermissionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Permission/GetAll
     * 获取所有权限项集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean,type?:number} 

    ): Observable<ListResultDto<PermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/CreateOrUpdate
     * 保存权限项
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PermissionDto

    ): Observable<PermissionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/Delete
     * 删除权限项
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/Move
     * 移动权限项
     */

    @POST('move')
    move(
        @Payload
        _req:MovePermissionItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserFunctionPermissions
     * 获取用户拥有的功能权限集合
     */

    @GET('getUserFunctionPermissions')
    getUserFunctionPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<ListResultDto<PermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToUser
     * 批量授予用户功能权限
     */

    @POST('grantFunctionPermissionsToUser')
    grantFunctionPermissionsToUser(
        @Payload
        _req:GrantFunctionPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserFunctionPermissions
     * 撤销用户功能权限
     */

    @POST('revokeUserFunctionPermissions')
    revokeUserFunctionPermissions(
        @Payload
        _req:RevokeUserFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleFunctionPermissions
     * 获取角色拥有的权限集合
     */

    @GET('getRoleFunctionPermissions')
    getRoleFunctionPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<ListResultDto<PermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToRole
     * 批量授予角色权限
     */

    @POST('grantFunctionPermissionsToRole')
    grantFunctionPermissionsToRole(
        @Payload
        _req:GrantFunctionPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleFunctionPermissions
     * 批量撤销角色权限
     */

    @POST('revokeRoleFunctionPermissions')
    revokeRoleFunctionPermissions(
        @Payload
        _req:RevokeRoleFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserDataPermissions
     * 获取用户拥有的数据权限集合
     */

    @GET('getUserDataPermissions')
    getUserDataPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<ListResultDto<DataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToUser
     * 批量授予用户数据权限
     */

    @POST('grantDataPermissionsToUser')
    grantDataPermissionsToUser(
        @Payload
        _req:GrantDataPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserDataPermissions
     * 撤销用户数据权限
     */

    @POST('revokeUserDataPermissions')
    revokeUserDataPermissions(
        @Payload
        _req:RevokeUserDataPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleDataPermissions
     * 获取角色拥有的数据权限集合
     */

    @GET('getRoleDataPermissions')
    getRoleDataPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<ListResultDto<DataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToRole
     * 批量授予角色数据权限
     */

    @POST('grantDataPermissionsToRole')
    grantDataPermissionsToRole(
        @Payload
        _req:GrantDataPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleDataPermissions
     * 批量撤销角色数据权限
     */

    @POST('revokeRoleDataPermissions')
    revokeRoleDataPermissions(
        @Payload
        _req:RevokeRoleDataPermissionsInput

    ): Observable<any> {
        return null as any
    }



  }
