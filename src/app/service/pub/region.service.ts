import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { RegionDto,GetByAreaInput,RegionCheckDto,GetAllCountryForUiPickerInput,CountryUiPickerDto,GetAllRegionForUiPickerInput,RegionUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Region')
@Injectable({ providedIn: 'root' })
export class RegionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Region/Get
     * 获取地区明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAll
     * 获取地区列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,parentId?:string,isValid?:boolean,isRecursion?:boolean,id?:string} 

    ): Observable<ListResultDto<RegionDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetByAreaIds
     * 根据片区获取省份地区
     */

    @POST('getByAreaIds')
    getByAreaIds(
        @Payload
        _req:GetByAreaInput

    ): Observable<ListResultDto<RegionDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:RegionCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/CreateOrUpdate
     * 创建或更新地区-前端提交只需调用这个方法即可
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Create
     * 创建地区
     */

    @POST('create')
    create(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Update
     * 更新地区
     */

    @PUT('update')
    update(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Delete
     * 删除地区
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/BulkCreateAsync
     * 
     */

    @POST('bulkCreateAsync')
    bulkCreateAsync(
        @Payload
        _req:RegionDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAllCountryForUiPicker
     * 提供给UI国家选择器的服务接口
     */

    @POST('getAllCountryForUiPicker')
    getAllCountryForUiPicker(
        @Payload
        _req:GetAllCountryForUiPickerInput

    ): Observable<PagedResultDto<CountryUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAllRegionForUiPicker
     * 提供给UI地区（省份）选择器的服务接口
     */

    @POST('getAllRegionForUiPicker')
    getAllRegionForUiPicker(
        @Payload
        _req:GetAllRegionForUiPickerInput

    ): Observable<PagedResultDto<RegionUiPickerDto>> {
        return null as any
    }



  }
