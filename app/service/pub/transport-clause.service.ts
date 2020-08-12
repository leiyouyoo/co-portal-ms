import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBTransportClauseDto,PUBPagedResultDto,PUBTransportClauseCheckDto,PUBChangeTransportClauseStateInput,PUBGetAllTransportClauseForUiPickerInput,PUBTransportClauseUiPickerDto, } from './pub.types';

@BaseUrl('/pub/TransportClause')
@Injectable({ providedIn: 'root' })
export class PUBTransportClauseService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/TransportClause/Get
     * 获取运输条款明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBTransportClauseDto> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/GetAll
     * 获取运输条款列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {originalId?:string,destinationId?:string,isValid?:boolean} 

    ): Observable<PUBPagedResultDto<PUBTransportClauseDto>> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:PUBTransportClauseCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/CreateOrUpdate
     * 新建或更新运输条款
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBTransportClauseDto

    ): Observable<PUBTransportClauseDto> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/Create
     * 创建运输条款
     */

    @POST('create')
    create(
        @Payload
        _req:PUBTransportClauseDto

    ): Observable<PUBTransportClauseDto> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/Update
     * 更新运输条款
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBTransportClauseDto

    ): Observable<PUBTransportClauseDto> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/Delete
     * 删除运输条款
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/ChangeTransportClauseState
     * 修改运输条款状态
     */

    @POST('changeTransportClauseState')
    changeTransportClauseState(
        @Payload
        _req:PUBChangeTransportClauseStateInput

    ): Observable<PUBTransportClauseDto> {
        return null as any
    }


    /**
     * @param url /PUB/TransportClause/GetAllForUiPicker
     * 提供给UI运输条款选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllTransportClauseForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBTransportClauseUiPickerDto>> {
        return null as any
    }



  }
