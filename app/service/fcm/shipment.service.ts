import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMShareableContactDto,FCMListResultDto,FCMGetContactFormsInput,FCMContactFormDto,FCMGetShipmentListInput,FCMShipmentListItemDto,FCMPagedResultDto,FCMChangeShipmentInvalidStatusInput,FCMEditShipmentInput,FCMMergeShipmentInput, } from './fcm.types';

@BaseUrl('/fcm/Shipment')
@Injectable({ providedIn: 'root' })
export class FCMShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/Shipment/GetShareableContactsForDoc
     * 上传文档时，获取待分享联系人用户
     */

    @GET('getShareableContactsForDoc')
    getShareableContactsForDoc(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMListResultDto<FCMShareableContactDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetContactForms
     * 获取多个 Shipment 的操作联系单信息
     */

    @POST('getContactForms')
    getContactForms(
        @Payload
        _req:FCMGetContactFormsInput

    ): Observable<FCMListResultDto<FCMContactFormDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetShipmentList
     * 获取运单列表数据
     */

    @POST('getShipmentList')
    getShipmentList(
        @Payload
        _req:FCMGetShipmentListInput

    ): Observable<FCMPagedResultDto<FCMShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/ChangeInvalidStatus
     * 作废或取消作废指定的 Shipment(s)
     */

    @POST('changeInvalidStatus')
    changeInvalidStatus(
        @Payload
        _req:FCMChangeShipmentInvalidStatusInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/CreateOrUpdate
     * 创建或编辑运单
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:FCMEditShipmentInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/Merge
     * 合并运单
     */

    @POST('merge')
    merge(
        @Payload
        _req:FCMMergeShipmentInput

    ): Observable<any> {
        return null as any
    }



  }
