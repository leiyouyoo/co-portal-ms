import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';

@BaseUrl('/MDC/MessageNotification')
@Injectable({ providedIn: 'root' })
export class MessageNotificationServices extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /MDC/MessageNotification/GetAllPagedAsync
   * 获取所有的通知消息
   */

  @GET('getAllPagedAsync')
  getAllPagedAsync(
    @Payload
    _req: {
      Id?: string;
      Sorting?: string;
      SkipCount?: number;
      MaxResultCount?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /MDC/MessageNotification/SetIsReadAsync
   * 设为已读
   */

  @POST('setIsReadAsync')
  setIsReadAsync(
    @Payload
    _req: {
      Id: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /MDC/MessageNotification/SetAllIsReadAsync
   * 全部设为已读
   */

  @POST('setAllIsReadAsync')
  setAllIsReadAsync(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }
}
