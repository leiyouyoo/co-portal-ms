import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { NameValueDto, } from './platform.types';

@BaseUrl('/platform/Timing')
@Injectable({ providedIn: 'root' })
export class TimingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Timing/GetTimezones
     * 
     */

    @GET('getTimezones')
    getTimezones(
        @Payload
        _req: {defaultTimezoneScope?:number} 

    ): Observable<ListResultDto<NameValueDto>> {
        return null as any
    }



  }
