import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import { AreaDto,AreaCheckDto,GetAllAreaForUiPickerInput,AreaUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Area')
@Injectable({ providedIn: 'root' })
export class AreaService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Area/Get
     * 获取片区
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<AreaDto> {
        return null as any
    }


    /**
     * @param url /PUB/Area/GetAll
     * 获取片区列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {name?:string,isValid?:boolean} 

    ): Observable<ListResultDto<AreaDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Area/CreateOrUpdate
     * 创建或编辑片区
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:AreaDto

    ): Observable<AreaDto> {
        return null as any
    }


    /**
     * @param url /PUB/Area/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:AreaCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Area/Delete
     * 删除片区
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Area/GetAllForUiPicker
     * 用于前端片区选择器
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllAreaForUiPickerInput

    ): Observable<PagedResultDto<AreaUiPickerDto>> {
        return null as any
    }



  }
