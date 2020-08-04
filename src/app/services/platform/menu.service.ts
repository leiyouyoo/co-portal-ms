import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';

import { AddToFavoritesInput } from './platform.types';

@BaseUrl('/platform/Menu')
@Injectable({ providedIn: 'root' })
export class MenuService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /Platform/Menu/AddToMyFavorites
   * 添加菜单到收藏夹
   */

  @POST('addToMyFavorites')
  addToMyFavorites(
    @Payload
    _req: AddToFavoritesInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Platform/Menu/AddBatchToMyFavorites
   * 批量收藏用户菜单
   */

  @POST('addBatchToMyFavorites')
  addBatchToMyFavorites(
    @Payload
    _req: AddToFavoritesInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Platform/Menu/RemoveFromMyFavorites
   * 添加菜单到收藏夹
   */

  @DELETE('removeFromMyFavorites')
  removeFromMyFavorites(
    @Payload
    _req: {
      menuIds?: any[];
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Platform/Menu/GetMyFavorites
   * 获取我收藏的菜单集合
   */

  @GET('getMyFavorites')
  getMyFavorites(
    @Payload
    _req: {
      input?: object;
    },
  ): Observable<any> {
    return null as any;
  }
}
