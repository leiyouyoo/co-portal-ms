import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMGenerateWarehouseReciptInput,FCMGenerateWarehouseReciptOutput, } from './fcm.types';

@BaseUrl('/fcm/WarehouseReceipt')
@Injectable({ providedIn: 'root' })
export class FCMWarehouseReceiptService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/WarehouseReceipt/GenerateWarehouseRecipt
     * 生成入仓单
     */

    @POST('generateWarehouseRecipt')
    generateWarehouseRecipt(
        @Payload
        _req:FCMGenerateWarehouseReciptInput

    ): Observable<FCMGenerateWarehouseReciptOutput> {
        return null as any
    }


    /**
     * @param url /FCM/WarehouseReceipt/GetWarehouseRecipt
     * 获取入仓单文件
     */

    @GET('getWarehouseRecipt')
    getWarehouseRecipt(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
