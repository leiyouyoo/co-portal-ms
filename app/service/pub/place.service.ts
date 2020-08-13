import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBPlaceDto,PUBPagedResultDto,PUBGetPlaceListByRegionsInput,PUBPlaceOrCountyDto,PUBPlaceCheckDto,PUBChangePlaceStateInput,PUBListResultDto,PUBGetPlaceMapInput,PUBPlaceView,PUBFromToDto,PUBGetByPortIdsOutput,PUBGetPortByCityInput,PUBGetPortByCityDto,PUBGetAllPlaceForUiPickerInput,PUBPlaceUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Place')
@Injectable({ providedIn: 'root' })
export class PUBPlaceService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Place/Get
     * 获取地点明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBPlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetAll
     * 获取地点列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {id?:string,name?:string,regionId?:string,isOcean?:boolean,isAir?:boolean,isAirOrOcean?:boolean,isRail?:boolean,isOther?:boolean,isCity?:boolean,isRamp?:boolean,isValid?:boolean,isMultiple?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBPlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByRegionIds
     * 根据地区id集合查找地点
     */

    @POST('getByRegionIds')
    getByRegionIds(
        @Payload
        _req:PUBGetPlaceListByRegionsInput

    ): Observable<PUBPagedResultDto<PUBPlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByCountryIds
     * 根据国家id查找国家下的place
     */

    @GET('getByCountryIds')
    getByCountryIds(
        @Payload
        _req: {placeId?:string,name?:string,regionIds?:any[],isOcean?:boolean,isAir?:boolean,isAirOrOcean?:boolean,isOther?:boolean,isCity?:boolean,isValid?:boolean,isPaged?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBPlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetPlaceAndCounty
     * 分页获取港口或区县
     */

    @GET('getPlaceAndCounty')
    getPlaceAndCounty(
        @Payload
        _req: {code?:string,name?:string,type?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBPlaceOrCountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:PUBPlaceCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/CreateOrUpdate
     * 创建或更新地点
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBPlaceDto

    ): Observable<PUBPlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Create
     * 创建地点
     */

    @POST('create')
    create(
        @Payload
        _req:PUBPlaceDto

    ): Observable<PUBPlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Update
     * 更新地点
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBPlaceDto

    ): Observable<PUBPlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Delete
     * 删除地点
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/ChangePlaceState
     * 修改地点状态
     */

    @POST('changePlaceState')
    changePlaceState(
        @Payload
        _req:PUBChangePlaceStateInput

    ): Observable<PUBPlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByPlacesIds
     * 根据地点id集合查找地点集合
     */

    @POST('getByPlacesIds')
    getByPlacesIds(
        @Payload
        _req: {} 

    ): Observable<PUBListResultDto<PUBPlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Resolve
     * 根据地图解析地址
     */

    @POST('resolve')
    resolve(
        @Payload
        _req:PUBGetPlaceMapInput

    ): Observable<PUBPlaceView> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetFromToList
     * 获取港口或地点列表
     */

    @GET('getFromToList')
    getFromToList(
        @Payload
        _req: {searchText?:string,id?:string,isPort?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBFromToDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByPortIds
     * 根据港口Id获取港口信息(含逆向检索省州片区)
     */

    @POST('getByPortIds')
    getByPortIds(
        @Payload
        _req: {} 

    ): Observable<PUBGetByPortIdsOutput> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByCountyIds
     * 根据城市港口、区县镇Id数组获取详细文本
     */

    @POST('getByCountyIds')
    getByCountyIds(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetPortByCity
     * 根据城市信息获取港口
     */

    @POST('getPortByCity')
    getPortByCity(
        @Payload
        _req:PUBGetPortByCityInput

    ): Observable<PUBGetPortByCityDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetAllForUiPicker
     * 提供给UI地点选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllPlaceForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBPlaceUiPickerDto>> {
        return null as any
    }



  }
