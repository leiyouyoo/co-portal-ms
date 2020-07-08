import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { CurrentUserProfileEditDto, } from './csp.types';

@BaseUrl('/csp/Profile')
@Injectable({ providedIn: 'root' })
export class ProfileService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/Profile/GetCurrentUserProfileForEdit
     * 获取当前用户需要设置的属性
     */

    @GET('getCurrentUserProfileForEdit')
    getCurrentUserProfileForEdit(
        @Payload
        _req: {} 

    ): Observable<CurrentUserProfileEditDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/Profile/UpdateCurrentUserProfile
     * 更新用户属性
     */

    @PUT('updateCurrentUserProfile')
    updateCurrentUserProfile(
        @Payload
        _req:CurrentUserProfileEditDto

    ): Observable<any> {
        return null as any
    }



  }
