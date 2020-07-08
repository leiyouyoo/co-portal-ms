import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { MayInviteUserModel,CreateImGroupInput,CreateImGroupForCustomerInput,AddDeleteGroupInput,AjaxResponse, } from './csp.types';

@BaseUrl('/csp/IM')
@Injectable({ providedIn: 'root' })
export class IMService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CSP/IM/GetMayInviteUserList
     * 获取可邀请加入群聊的用户列表
     */

    @GET('getMayInviteUserList')
    getMayInviteUserList(
        @Payload
        _req: {businessType:number,businessId:string} 

    ): Observable<ListResultDto<MayInviteUserModel>> {
        return null as any
    }


    /**
     * @param url /CSP/IM/CreateImGroup
     * 创建业务IM群
     */

    @POST('createImGroup')
    createImGroup(
        @Payload
        _req:CreateImGroupInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/IM/CreateImGroupForCustomer
     * 为指定客户创建业务IM群，目前只实现了 Shipment群的建立
     */

    @POST('createImGroupForCustomer')
    createImGroupForCustomer(
        @Payload
        _req:CreateImGroupForCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/IM/AddDeleteGroupTask
     * 删除群
     */

    @POST('addDeleteGroupTask')
    addDeleteGroupTask(
        @Payload
        _req:AddDeleteGroupInput

    ): Observable<AjaxResponse> {
        return null as any
    }



  }
