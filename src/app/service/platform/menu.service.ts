import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { MenuItemDto,MoveMenuItemInput,AddToFavoritesInput,ChangeStateInput, } from './platform.types';

@BaseUrl('/platform/Menu')
@Injectable({ providedIn: 'root' })
export class MenuService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Menu/GetAll
     * 获取平台所有菜单项集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean} 

    ): Observable<ListResultDto<MenuItemDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/CreateOrUpdate
     * 保存菜单项
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:MenuItemDto

    ): Observable<MenuItemDto> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Delete
     * 删除菜单项
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/Move
     * 移动菜单项
     */

    @POST('move')
    move(
        @Payload
        _req:MoveMenuItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddToMyFavorites
     * 添加菜单到收藏夹
     */

    @POST('addToMyFavorites')
    addToMyFavorites(
        @Payload
        _req:AddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/AddBatchToMyFavorites
     * 批量收藏用户菜单
     */

    @POST('addBatchToMyFavorites')
    addBatchToMyFavorites(
        @Payload
        _req:AddToFavoritesInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/RemoveFromMyFavorites
     * 添加菜单到收藏夹
     */

    @DELETE('removeFromMyFavorites')
    removeFromMyFavorites(
        @Payload
        _req: {menuIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/GetMyFavorites
     * 获取我收藏的菜单集合
     */

    @GET('getMyFavorites')
    getMyFavorites(
        @Payload
        _req: {input?:object} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/ChangeState
     * 更改菜单项状态
     */

    @POST('changeState')
    changeState(
        @Payload
        _req:ChangeStateInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Menu/UpdateUserMenuSetting
     * 
     */

    @PUT('updateUserMenuSetting')
    updateUserMenuSetting(
        @Payload
        _req: {moduleName?:string} 

    ): Observable<any> {
        return null as any
    }



  }
