import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { ShippingLineDto,ShippingLineCheckInputDto,ChangeShippingLineStateInput,CountryReationShippingDto,PortReationCountryDto,GetAllShippingLineForUiPickerInput,ShippingLineUiPickerDto, } from './pub.types';

@BaseUrl('/pub/ShippingLine')
@Injectable({ providedIn: 'root' })
export class ShippingLineService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/ShippingLine/Get
     * 获取航线详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<ShippingLineDto> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/GetAll
     * 分页获取航线顶级父类集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,parentId?:string,isRecursion?:boolean} 

    ): Observable<ListResultDto<ShippingLineDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/Check
     * 航线重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:ShippingLineCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/Create
     * 创建航线
     */

    @POST('create')
    create(
        @Payload
        _req:ShippingLineDto

    ): Observable<ShippingLineDto> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/CreateOrUpdate
     * 更新或者删除
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:ShippingLineDto

    ): Observable<ShippingLineDto> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/PostUpdate
     * 编辑航线
     */

    @POST('postUpdate')
    postUpdate(
        @Payload
        _req:ShippingLineDto

    ): Observable<ShippingLineDto> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/Delete
     * 删除航线
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/ChangeShippingLineState
     * 修改航线状态
     */

    @POST('changeShippingLineState')
    changeShippingLineState(
        @Payload
        _req:ChangeShippingLineStateInput

    ): Observable<ShippingLineDto> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/GetCountryList
     * 获取航线与国家关系列表
     */

    @GET('getCountryList')
    getCountryList(
        @Payload
        _req: {shippingLineId?:string} 

    ): Observable<ListResultDto<CountryReationShippingDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/SaveCountry
     * 保存航线与国家关系列表
     */

    @POST('saveCountry')
    saveCountry(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/GetPortList
     * 获取航线与港口关系列表
     */

    @GET('getPortList')
    getPortList(
        @Payload
        _req: {shippingLineId?:string} 

    ): Observable<ListResultDto<PortReationCountryDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/SavePort
     * 保存航线与港口关系列表
     */

    @POST('savePort')
    savePort(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/GetPortsByShippingLine
     * 根据航线获取对应的港口
     */

    @GET('getPortsByShippingLine')
    getPortsByShippingLine(
        @Payload
        _req: {code?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ShippingLine/GetAllForUiPicker
     * 提供给UI航线选择器服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllShippingLineForUiPickerInput

    ): Observable<PagedResultDto<ShippingLineUiPickerDto>> {
        return null as any
    }



  }
