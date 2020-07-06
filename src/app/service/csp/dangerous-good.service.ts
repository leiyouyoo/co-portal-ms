import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { DangerousGoodDto, } from './csp.types';

@BaseUrl('/csp/DangerousGood')
@Injectable({ providedIn: 'root' })
export class DangerousGoodService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/DangerousGood/Get
     * 获取危险品明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<DangerousGoodDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/DangerousGood/GetAll
     * 获取危险品列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchKeyword?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<ListResultDto<DangerousGoodDto>> {
        return null as any
    }



  }
