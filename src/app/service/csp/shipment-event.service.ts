import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ShipmentEventDto, } from './csp.types';

@BaseUrl('/csp/ShipmentEvent')
@Injectable({ providedIn: 'root' })
export class ShipmentEventService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/ShipmentEvent/BatchCreateOrUpdate
     * 批量创建或更新事件
     */

    @POST('batchCreateOrUpdate')
    batchCreateOrUpdate(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/ShipmentEvent/CreateOrUpdate
     * 创建或更新事件
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:ShipmentEventDto

    ): Observable<any> {
        return null as any
    }



  }
