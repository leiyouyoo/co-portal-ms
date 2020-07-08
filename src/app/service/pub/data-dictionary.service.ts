import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { DataDictionaryDto,DataDictionaryCheckDto,ChangeDataDictionnaryStateInput,GetAllDataDictionaryForUiPickerInput,DataDictionaryUiPickerDto, } from './pub.types';

@BaseUrl('/pub/DataDictionary')
@Injectable({ providedIn: 'root' })
export class DataDictionaryService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/DataDictionary/Get
     * 获取数据字典明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<DataDictionaryDto> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/GetAll
     * 获取数据字典列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,typeId?:string,typeCode?:string,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<DataDictionaryDto>> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/Check
     * 校验数据字典重复性
     */

    @POST('check')
    check(
        @Payload
        _req:DataDictionaryCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/CreateOrUpdate
     * 创建或更新数据字典
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:DataDictionaryDto

    ): Observable<DataDictionaryDto> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/Create
     * 创建数据字典
     */

    @POST('create')
    create(
        @Payload
        _req:DataDictionaryDto

    ): Observable<DataDictionaryDto> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/Update
     * 更新数据字典
     */

    @PUT('update')
    update(
        @Payload
        _req:DataDictionaryDto

    ): Observable<DataDictionaryDto> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/Delete
     * 删除数据字典
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/GetTradeTypes
     * 获取贸易类型类别
     */

    @GET('getTradeTypes')
    getTradeTypes(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/GetIncotermsByTradeType
     * 根据贸易类型获取贸易条款
     */

    @GET('getIncotermsByTradeType')
    getIncotermsByTradeType(
        @Payload
        _req: {tradeType?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/ChangeDataDictionnaryState
     * 修改数据字典状态
     */

    @POST('changeDataDictionnaryState')
    changeDataDictionnaryState(
        @Payload
        _req:ChangeDataDictionnaryStateInput

    ): Observable<DataDictionaryDto> {
        return null as any
    }


    /**
     * @param url /PUB/DataDictionary/GetAllForUiPicker
     * 提供给UI数据字典选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllDataDictionaryForUiPickerInput

    ): Observable<PagedResultDto<DataDictionaryUiPickerDto>> {
        return null as any
    }



  }
