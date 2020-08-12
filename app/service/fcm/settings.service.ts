import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMDataTableSettingDto,FCMListResultDto, } from './fcm.types';

@BaseUrl('/fcm/Settings')
@Injectable({ providedIn: 'root' })
export class FCMSettingsService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/Settings/GetAllDataTableSettings
     * 获取 FCM 全部表格设置
     */

    @GET('getAllDataTableSettings')
    getAllDataTableSettings(
        @Payload
        _req: {} 

    ): Observable<FCMListResultDto<FCMDataTableSettingDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Settings/GetDataTableSetting
     * 获取表格设置
     */

    @GET('getDataTableSetting')
    getDataTableSetting(
        @Payload
        _req: {type?:number} 

    ): Observable<FCMDataTableSettingDto> {
        return null as any
    }


    /**
     * @param url /FCM/Settings/UpdateDataTableSetting
     * 更新表格设置
     */

    @PUT('updateDataTableSetting')
    updateDataTableSetting(
        @Payload
        _req:FCMDataTableSettingDto

    ): Observable<any> {
        return null as any
    }



  }
