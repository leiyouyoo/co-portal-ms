import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBVesselDto,PUBPagedResultDto,PUBVesselCheckInputDto,PUBGetAllVesselForUiPickerInput,PUBVesselUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Vessel')
@Injectable({ providedIn: 'root' })
export class PUBVesselService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Vessel/Get
     * 获取船名详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBVesselDto> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/GetAll
     * 分页获取船名列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,code?:string,name?:string,carrierId?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBVesselDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/Check
     * 船名重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:PUBVesselCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/Create
     * 创建船名
     */

    @POST('create')
    create(
        @Payload
        _req:PUBVesselDto

    ): Observable<PUBVesselDto> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/Update
     * 编辑船名
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBVesselDto

    ): Observable<PUBVesselDto> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/Delete
     * 删除船名
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/GetAllForUiPicker
     * 提供给UI船名选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllVesselForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBVesselUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Vessel/CreateOrUpdate
     * 创建或更新
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBVesselDto

    ): Observable<PUBVesselDto> {
        return null as any
    }



  }
