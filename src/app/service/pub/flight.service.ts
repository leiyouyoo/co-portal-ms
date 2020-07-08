import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { FlightDto,FlightCheckInputDto,GetAllFlightForUiPickerInput,FlightUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Flight')
@Injectable({ providedIn: 'root' })
export class FlightService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Flight/GetAll
     * 分页获取航班列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,airlineId?:string,no?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<FlightDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/Get
     * 获取航班详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<FlightDto> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/Check
     * 航班重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:FlightCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/Create
     * 创建航班
     */

    @POST('create')
    create(
        @Payload
        _req:FlightDto

    ): Observable<FlightDto> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/Update
     * 编辑航班
     */

    @PUT('update')
    update(
        @Payload
        _req:FlightDto

    ): Observable<FlightDto> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/Delete
     * 删除航班
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/GetAllForUiPicker
     * 提供给UI航班选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllFlightForUiPickerInput

    ): Observable<PagedResultDto<FlightUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Flight/CreateOrUpdate
     * 创建或更新
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:FlightDto

    ): Observable<FlightDto> {
        return null as any
    }



  }
