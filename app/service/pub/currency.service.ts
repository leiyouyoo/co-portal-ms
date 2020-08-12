import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBCurrencyDto,PUBPagedResultDto,PUBCurrencyCheckDto,PUBChangeCurrencyStateInput,PUBGetAllForUiPickerInput,PUBCurrencyUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Currency')
@Injectable({ providedIn: 'root' })
export class PUBCurrencyService extends BaseApi {
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

    ): Observable<PUBCurrencyDto> {
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

    ): Observable<PUBPagedResultDto<PUBCurrencyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:PUBCurrencyCheckDto

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
        _req:PUBCurrencyDto

    ): Observable<PUBCurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Create
     * 创建币种
     */

    @POST('create')
    create(
        @Payload
        _req:PUBCurrencyDto

    ): Observable<PUBCurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/Update
     * 更新币种
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBCurrencyDto

    ): Observable<PUBCurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/ChangeCurrencyState
     * 修改币种状态
     */

    @POST('changeCurrencyState')
    changeCurrencyState(
        @Payload
        _req:PUBChangeCurrencyStateInput

    ): Observable<PUBCurrencyDto> {
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

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBCurrencyUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Currency/GetExchangeList
     * 获取所有币种的汇率
     */

    @GET('getExchangeList')
    getExchangeList(
        @Payload
        _req: {toCode?:string} 

    ): Observable<any> {
        return null as any
    }



  }
