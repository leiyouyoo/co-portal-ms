import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMGetOperationLogDto,FCMPagedResultDto, } from './fcm.types';

@BaseUrl('/fcm/OperationLogs')
@Injectable({ providedIn: 'root' })
export class FCMOperationLogsService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/OperationLogs/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {businessId?:string,operationLogType?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<FCMPagedResultDto<FCMGetOperationLogDto>> {
        return null as any
    }



  }
