import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { GenerateWarehouseReciptInput,GenerateWarehouseReciptOutput, } from './fcm.types';

@BaseUrl('/fcm/WarehouseReceipt')
@Injectable({ providedIn: 'root' })
export class WarehouseReceiptService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/WarehouseReceipt/GenerateWarehouseRecipt
     * 
     */

    @POST('generateWarehouseRecipt')
    generateWarehouseRecipt(
        @Payload
        _req:GenerateWarehouseReciptInput

    ): Observable<GenerateWarehouseReciptOutput> {
        return null as any
    }


    /**
     * @param url /FCM/WarehouseReceipt/GetWarehouseRecipt
     * 
     */

    @GET('getWarehouseRecipt')
    getWarehouseRecipt(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
