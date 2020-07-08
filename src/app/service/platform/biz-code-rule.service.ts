import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { UserInfo,BizCodeRuleTemplateDto,CreateOrUpdateTemplateInput, } from './platform.types';

@BaseUrl('/platform/BizCodeRule')
@Injectable({ providedIn: 'root' })
export class BizCodeRuleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BizCodeRule/TestImpersonationAuthorize
     * 
     */

    @POST('testImpersonationAuthorize')
    testImpersonationAuthorize(
        @Payload
        _req: {} 

    ): Observable<PagedResultDto<UserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetTemplate
     * 
     */

    @GET('getTemplate')
    getTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<BizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/DeleteTemplate
     * 
     */

    @DELETE('deleteTemplate')
    deleteTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/CreateTemplate
     * 
     */

    @POST('createTemplate')
    createTemplate(
        @Payload
        _req:CreateOrUpdateTemplateInput

    ): Observable<BizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/UpdateTemplate
     * 
     */

    @PUT('updateTemplate')
    updateTemplate(
        @Payload
        _req:CreateOrUpdateTemplateInput

    ): Observable<BizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetAllTemplateList
     * 
     */

    @GET('getAllTemplateList')
    getAllTemplateList(
        @Payload
        _req: {groupId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<BizCodeRuleTemplateDto>> {
        return null as any
    }



  }
