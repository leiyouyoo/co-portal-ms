import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMPurchaseOrderDto,FCMPagedResultDto,FCMPurchaseOrderImportDto, } from './fcm.types';

@BaseUrl('/fcm/PurchaseOrder')
@Injectable({ providedIn: 'root' })
export class FCMPurchaseOrderService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/PurchaseOrder/GetAll
     * 分页获取关联的Po
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {shipmentId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<FCMPagedResultDto<FCMPurchaseOrderDto>> {
        return null as any
    }


    /**
     * @param url /FCM/PurchaseOrder/BatchImport
     * 批量导入Po
     */

    @POST('batchImport')
    batchImport(
        @Payload
        _req:FCMPurchaseOrderImportDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/PurchaseOrder/CreateOrUpdate
     * 批量新增或删除Po
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/PurchaseOrder/Delete
     * 删除对应的po
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {shipmentId?:string,ids?:any[]} 

    ): Observable<any> {
        return null as any
    }



  }
