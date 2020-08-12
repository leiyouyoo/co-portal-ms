import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBVoyageDto,PUBPagedResultDto,PUBVoyageCheckInputDto,PUBGetAllVoyageForUiPickerInput,PUBVoyageUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Voyage')
@Injectable({ providedIn: 'root' })
export class PUBVoyageService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Voyage/Get
     * 获取航次详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBVoyageDto> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/GetAll
     * 分页获取航次列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,vesselId?:string,no?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBVoyageDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/Check
     * 航次重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:PUBVoyageCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/Create
     * 创建航次
     */

    @POST('create')
    create(
        @Payload
        _req:PUBVoyageDto

    ): Observable<PUBVoyageDto> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/Update
     * 编辑航次
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBVoyageDto

    ): Observable<PUBVoyageDto> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/Delete
     * 删除航次
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/GetAllForUiPicker
     * 提供给UI航次选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllVoyageForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBVoyageUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Voyage/CreateOrUpdate
     * 创建或更新
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBVoyageDto

    ): Observable<PUBVoyageDto> {
        return null as any
    }



  }
