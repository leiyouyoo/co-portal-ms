import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMCoEntity,FCMFeeAuditingDto,FCMGetFeeAuditingData, } from './fcm.types';

@BaseUrl('/fcm/FeeAuditing')
@Injectable({ providedIn: 'root' })
export class FCMFeeAuditingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/FeeAuditing/AskForQuote
     * 申请报价
     */

    @POST('askForQuote')
    askForQuote(
        @Payload
        _req:FCMCoEntity

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/FeeAuditing/AskForBusinessRate
     * 询问底价
     */

    @POST('askForBusinessRate')
    askForBusinessRate(
        @Payload
        _req:FCMCoEntity

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/FeeAuditing/Audit
     * 审核费用
     */

    @POST('audit')
    audit(
        @Payload
        _req:FCMFeeAuditingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/FeeAuditing/GetAuditingData
     * 获取审核相关数据
     */

    @GET('getAuditingData')
    getAuditingData(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMGetFeeAuditingData> {
        return null as any
    }



  }
