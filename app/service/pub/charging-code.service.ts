import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBChargingCodeDto,PUBPagedResultDto,PUBChangeChargingCodeStateInput,PUBGetAllChargingCodeForUiPickerInput,PUBChargingCodeUiPickerDto, } from './pub.types';

@BaseUrl('/pub/ChargingCode')
@Injectable({ providedIn: 'root' })
export class PUBChargingCodeService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/ChargingCode/Get
     * 获取费用代码
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/GetAll
     * 获取费用代码列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {groupId?:string,text?:string,isValid?:boolean} 

    ): Observable<PUBPagedResultDto<PUBChargingCodeDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/ChangeChargingCodeState
     * 修改费用代码状态
     */

    @POST('changeChargingCodeState')
    changeChargingCodeState(
        @Payload
        _req:PUBChangeChargingCodeStateInput

    ): Observable<PUBChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/CreateOrUpdate
     * 创建或更新费用代码
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBChargingCodeDto

    ): Observable<PUBChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/GetAllForUiPicker
     * 提供给UI费用代码选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:PUBGetAllChargingCodeForUiPickerInput

    ): Observable<PUBPagedResultDto<PUBChargingCodeUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Check
     * 数据检查
     */

    @POST('check')
    check(
        @Payload
        _req:PUBChargingCodeDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PUBChargingCodeDto

    ): Observable<PUBChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PUBChargingCodeDto

    ): Observable<PUBChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
