import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, PagedResultDto } from '@co/core';

import { ServiceUserGroupDto, } from './csp.types';

@BaseUrl('/csp/BusinessServiceUser')
@Injectable({ providedIn: 'root' })
export class BusinessServiceUserService extends BaseApi {

   
    /**
     * @param url /CSP/BusinessServiceUser/GetServiceUsers
     * 根据客户Id获取客服列表
     */

    @GET('getServiceUsers')
    getServiceUsers(
        @Payload
        _req: {customerId?:string} 

    ): Observable<ListResultDto<ServiceUserGroupDto>> {
        return null as any
    }



  }
