import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { HsCodeDto, } from './csp.types';

@BaseUrl('/csp/HsCode')
@Injectable({ providedIn: 'root' })
export class HsCodeService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/HsCode/Get
     * 获取H.S. Code 明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<HsCodeDto> {
        return null as any
    }

 
    /**
     * @param url /CSP/HsCode/GetAll
     * 获取H.S. Code 列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchKeyword?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<ListResultDto<HsCodeDto>> {
        return null as any
    }



  }
