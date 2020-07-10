import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto, OwnerLessPagedResultDto } from '@co/core';

import {
  PreShipmentListItemDto,
  ShipmentListItemDto,
  CreateOrUpdateShipmentInput,
  WarehousingDto,
  ChangeShipmentInvalidStatusInput,
  SetShipmentPostAgentCustomerInput,
  ShipmentDto,
  GetShipmentListInput,
} from './fcm.types';

@BaseUrl('/fcm/Shipment')
@Injectable({ providedIn: 'root' })
export class ShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /FCM/Shipment/GetAllPreShipment
   *
   */

  @POST('getAllPreShipment')
  getAllPreShipment(
    @Payload
    _req: {
      transportationMode?: number;
      creationTime?: string;
      serviceUserId?: number;
      customerId?: string;
      fbaPickUpMethodType?: number;
      cargoPutAwayDate?: string;
      serviceCompanyId?: string;
      agentCustomerId?: string;
      contact?: string;
      shipmentNo?: string;
      destinationAddress?: string;
      originAddress?: string;
      originWarehouse?: string;
      country?: string;
      channel?: string;
      fBANo?: string;
      creatorUser?: string;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<PreShipmentListItemDto>> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/GetForUpdate
   *
   */

  @GET('getForUpdate')
  getForUpdate(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<CreateOrUpdateShipmentInput> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/CreateOrUpdate
   *
   */

  @POST('createOrUpdate')
  createOrUpdate(
    @Payload
    _req: CreateOrUpdateShipmentInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/Warehousing
   *
   */

  @POST('warehousing')
  warehousing(
    @Payload
    _req: WarehousingDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/ChangeInvalidStatus
   *
   */

  @POST('changeInvalidStatus')
  changeInvalidStatus(
    @Payload
    _req: ChangeShipmentInvalidStatusInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/SetPostAgentCustomer
   *
   */

  @POST('setPostAgentCustomer')
  setPostAgentCustomer(
    @Payload
    _req: SetShipmentPostAgentCustomerInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/Delete
   *
   */

  @DELETE('delete')
  delete(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/Get
   *
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<ShipmentDto> {
    return null as any;
  }

  /**
   * @param url /FCM/Shipment/GetShipmentList
   *
   */

  @POST('getShipmentList')
  getShipmentList(
    @Payload
    _req: GetShipmentListInput,
  ): Observable<PagedResultDto<ShipmentListItemDto>> {
    return null as any;
  }
}
