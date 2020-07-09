import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { CurrencyDto,CurrencyCheckDto,ChangeCurrencyStateInput,CurrencyUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Currency')
@Injectable({ providedIn: 'root' })
export class CurrencyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Currency/Get
     * 获取币种明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/GetAll
     * 获取币种列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,regionId?:string,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CurrencyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:CurrencyCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/CreateOrUpdate
     * 新建或更新币种
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:CurrencyDto

    ): Observable<CurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Create
     * 创建币种
     */

    @POST('create')
    create(
        @Payload
        _req:CurrencyDto

    ): Observable<CurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Update
     * 更新币种
     */

    @PUT('update')
    update(
        @Payload
        _req:CurrencyDto

    ): Observable<CurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/ChangeCurrencyState
     * 修改币种状态
     */

    @POST('changeCurrencyState')
    changeCurrencyState(
        @Payload
        _req:ChangeCurrencyStateInput

    ): Observable<CurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Delete
     * 删除币种
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/GetAllForUiPicker
     * 获取币种列表
     */

    @GET('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req: {ids?:any[],searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<CurrencyUiPickerDto>> {
        return null as any
    }



  }
