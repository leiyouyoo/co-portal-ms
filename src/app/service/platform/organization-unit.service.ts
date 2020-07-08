import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { OrganizationUnitDto,UserInfo,IMContactGroupDto,ContactUserDto,OrganizationUnitUserDto,MoveOrganizationUnitInput, } from './platform.types';

@BaseUrl('/platform/OrganizationUnit')
@Injectable({ providedIn: 'root' })
export class OrganizationUnitService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/OrganizationUnit/GetByUserId
     * 获取用户所在组织机构
     */

    @GET('getByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number} 

    ): Observable<ListResultDto<OrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByOrganizationUnitId
     * 获取组织机构下的用户
     */

    @GET('getUsersByOrganizationUnitId')
    getUsersByOrganizationUnitId(
        @Payload
        _req: {searchText?:string,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<UserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetSaleUsers
     * 
     */

    @GET('getSaleUsers')
    getSaleUsers(
        @Payload
        _req: {searchText?:string,isOwnDepartment?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<UserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersAndOrganizationUnit
     * 
     */

    @GET('getUsersAndOrganizationUnit')
    getUsersAndOrganizationUnit(
        @Payload
        _req: {input?:object} 

    ): Observable<ListResultDto<IMContactGroupDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUserDetail
     * 
     */

    @GET('getUserDetail')
    getUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<ContactUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitUsers
     * 
     */

    @GET('getOrganizationUnitUsers')
    getOrganizationUnitUsers(
        @Payload
        _req: {organizationUnitId?:string,organizationUnitName?:string} 

    ): Observable<ListResultDto<OrganizationUnitUserDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetPositionUserDetail
     * 
     */

    @GET('getPositionUserDetail')
    getPositionUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<OrganizationUnitUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAll
     * 获取组织节点集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean,type?:number} 

    ): Observable<ListResultDto<OrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/CreateOrUpdate
     * 保存菜单项
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:OrganizationUnitDto

    ): Observable<OrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Move
     * 移动组织节点
     */

    @POST('move')
    move(
        @Payload
        _req:MoveOrganizationUnitInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Delete
     * 删除组织节点
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
