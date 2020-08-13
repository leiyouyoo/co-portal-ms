import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBCommodityDto,PUBListResultDto,PUBCommodityCheckInputDto,PUBGetAllCommodityForUiPickerInput,PUBCommodityUiPickerDto,PUBPagedResultDto, } from './pub.types';

@BaseUrl('/pub/Commodity')
@Injectable({ providedIn: 'root' })
export class PUBCommodityService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Commodity/GetAll
     * 分页获取品名顶级父类集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,text?:string,isRecursion?:boolean,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBListResultDto<PUBCommodityDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/Get
     * 获取品名明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBCommodityDto> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/Check
     * 品名重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:PUBCommodityCheckInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/Create
     * 创建品名
     */

    @POST('create')
    create(
        @Payload
        _req:PUBCommodityDto

    ): Observable<PUBCommodityDto> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/Update
     * 更新品名
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBCommodityDto

    ): Observable<PUBCommodityDto> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/Delete
     * 删除品名
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Commodity/GetAllForUiPicker
     * 提供给UI品名选择器服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllCommodityForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBCommodityUiPickerDto>> {
        return null as any
    }



  }
