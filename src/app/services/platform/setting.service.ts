import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { SettingDto } from './platform.types';

@BaseUrl('/platform/Setting')
@Injectable({ providedIn: 'root' })
export class SettingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /Platform/Setting/GetCurrentUserSetting
   *
   */

  @GET('getCurrentUserSetting')
  getCurrentUserSetting(
    @Payload
    _req: {
      key?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Platform/Setting/SetCurrentUserSetting
   *
   */

  @POST('setCurrentUserSetting')
  setCurrentUserSetting(
    @Payload
    _req: SettingDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Platform/Setting/GetCurrentUserSettings
   *
   */

  @GET('getCurrentUserSettings')
  getCurrentUserSettings(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }
}
