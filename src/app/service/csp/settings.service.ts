import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { NewsAndUpdatesSettingsEditDto,SettingsEditDto, } from './csp.types';

@BaseUrl('/csp/Settings')
@Injectable({ providedIn: 'root' })
export class SettingsService extends BaseApi {

   
    /**
     * @param url /CSP/Settings/GetNewsAndUpdates
     * 获取设置页 Shipment 动态设置
     */

    @GET('getNewsAndUpdates')
    getNewsAndUpdates(
        @Payload
        _req: {} 

    ): Observable<NewsAndUpdatesSettingsEditDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/Settings/UpdateNewsAndUpdates
     * 保存 Shipment 动态设置
     */

    @PUT('updateNewsAndUpdates')
    updateNewsAndUpdates(
        @Payload
        _req:NewsAndUpdatesSettingsEditDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Settings/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {} 

    ): Observable<SettingsEditDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/Settings/UpdateAll
     * 
     */

    @PUT('updateAll')
    updateAll(
        @Payload
        _req:SettingsEditDto

    ): Observable<any> {
        return null as any
    }



  }
