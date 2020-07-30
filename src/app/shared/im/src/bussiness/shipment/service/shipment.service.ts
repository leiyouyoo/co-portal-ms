import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { catchError, map, tap } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';
import { PortOfDischarge, ShipmentDetail, ShipperInfo } from '../entities/ShipmentDetail';
import { FreightMethodType } from '../models/FreightMethodType';
import { VesselTrackPoint } from '../entities/VesselTrackPoint';
import { GetAllParam } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  constructor(public http: _HttpClient) {}

  static detailFactory(detail: ShipmentDetail): ShipmentDetail {
    detail.agreement = (detail.transportClausesString || '').toLowerCase();
    detail.transportType = detail.freightMethodType === FreightMethodType.Ocean ? 'ship' : 'air';
    try {
      const joinFunc = (arr: string[]): string => {
        return arr.filter(o => o).join(', ');
      };
      const addrFactory = (locas: any[]) => {
        locas.forEach(loca => {
          loca._shipmentListItemDisplay = joinFunc([loca.streetAddress, loca.city, loca.province, loca.country]) || loca.customerName;
        });
      };
      [
        ...detail.routeDetails.shipperDtos.map(o => o.originAddresses),
        ...detail.routeDetails.consigneeDtos.map(o => o.destinationAddresses),
      ].forEach(addrFactory);
      detail.shiperShow =
        (detail.routeDetails.shipperDtos.length || '') && detail.routeDetails.shipperDtos[0].originAddresses[0]._shipmentListItemDisplay;
      detail.consigneeShow =
        (detail.routeDetails.consigneeDtos.length || '') &&
        detail.routeDetails.consigneeDtos[0].destinationAddresses[0]._shipmentListItemDisplay;
    } catch (e) {
      console.log(e);
    }
    detail.state = detail.status;
    const recentEvent =
      detail.shipmentEventGroups && detail.shipmentEventGroups.length && detail.shipmentEventGroups[detail.shipmentEventGroups.length - 1];
    if (recentEvent && recentEvent.isException) {
      detail._exceptionEvent = recentEvent;
    }

    return detail;
  }

  GetAll(json: GetAllParam): Observable<{ totalCount: number; items: ShipmentDetail[] }> {
    return this.http.post('/CSP/Shipment/GetAllList', json).pipe(
      map((data: any) => {
        const temp: ShipmentDetail[] = data.items;
        temp.forEach(s => {
          ShipmentService.detailFactory(s);
        });

        return data;
      }),
    );
  }

  getAllListForDashboard(json: GetAllParam): Observable<{ totalCount: number; items: ShipmentDetail[] }> {
    return this.http.post('/CSP/Shipment/GetAllListForDashboard', json) as any;
  }

  getStatistics(withCount = false): Observable<{ items: any[] }> {
    const url = `/CSP/Shipment/GetShipmentsStatistics`;
    return this.http.get(url, { withCount }) as any;
  }

  GetDetail(id: string): Observable<ShipmentDetail> {
    return this.http.get('/CSP/Shipment/GetDetail', { id }).pipe(map((o: any) => ShipmentService.detailFactory(o))) as any;
  }

  GetEvents(id: string): Observable<any> {
    return this.http.get('/CSP/Shipment/GetEvents', { id });
  }

  GetShipmentDetail(id: string) {
    return this.http.get('/CSP/Shipment/GetShipmentDetail', { id });
  }

  createShare(param = {}) {
    return this.http.post('/CSP/ShipmentShareLink/Create', param);
  }

  getShareHistory(param = {}) {
    const url = `/CSP/ShipmentShareLink/GetAll`;
    return this.http.get(url, param);
  }

  shareSend(param) {
    const url = `/CSP/ShipmentShareLink/Update`;
    return this.http.put(url, param);
  }

  shareCancel(id: number) {
    const url = `/CSP/ShipmentShareLink/Cancel`;
    return this.http.post(url, { id });
  }

  getRouteDetailsByShipmentNo(searchKey: string): Observable<any[]> {
    const url = `/CSP/Shipment/GetRouteDetailsByShipmentNo`;
    return this.http.get(url, { searchKey }) as any;
  }

  getShipTrackByDate(param: {
    vesselName: string;
    startTime: string;
    endTime: string;
    needCount?: number;
  }): Observable<VesselTrackPoint[]> {
    const url = `/PUB/VesselInfos/GetShipTrack`;
    if (!param.needCount) param.needCount = 1e4;
    // return this.http.get(`${url}?VesselName=CMA%20CGM%20ORFEO&StartTime=12/15/2019%201:00:00%20AM&EndTime=1/19/2020%201:00:00%20AM&needCount=10000`)
    return this.http.get(url, param).pipe(
      map((o: any[]) => {
        return o.map(point => {
          return {
            ...point,
            point: [+point.longitudeDegree, +point.latitudeDegree],
          } as any;
        });
      }),
    );
  }

  getShipTrack(param: {
    vesselName: string;
    PODCode: string;
    POLCode: string;
    needCount?: number;
  }): Observable<{ shipTracePoints: VesselTrackPoint[]; currentPosition: VesselTrackPoint }> {
    const url = `/PUB/VesselInfos/GetShipTrackInfo`;
    // if (!param.needCount) param.needCount = 1e4;
    // return this.http.get(`${url}?VesselName=CMA%20CGM%20ORFEO&StartTime=12/15/2019%201:00:00%20AM&EndTime=1/19/2020%201:00:00%20AM&needCount=10000`)
    return this.http.get(url, param).pipe(
      tap((res: { shipTracePoints: VesselTrackPoint[]; currentPosition: VesselTrackPoint }) => {
        res.shipTracePoints = res.shipTracePoints || [];
        res.shipTracePoints = res.shipTracePoints.map(point => {
          return {
            ...point,
            point: [+point.longitudeDegree, +point.latitudeDegree],
          } as any;
        });
        if (res.currentPosition) {
          res.currentPosition.point = [+res.currentPosition.longitudeDegree, +res.currentPosition.latitudeDegree];
        }
      }),
    );
  }

  getShipmentTrackByRes(res: ShipmentDetail) {
    const route = res.routeDetails;
    return this.getShipTrack({
      vesselName: (res.vessel || '').split('/')[0],
      POLCode: route.originPort.code,
      PODCode: route.destinationPort.code,
    });
  }

  getAllPortsForOthers(params: { IsFromBooking?: boolean; IsFromShipment?: boolean; IsFromOrigin?: boolean; IsFromDestination?: boolean }) {
    return this.http.get('/CSP/Shipment/GetAllPortsForOthers', params);
  }

  getAllLocationsForOthers(params: {
    IsFromBooking?: boolean;
    IsFromShipment?: boolean;
    IsFromOrigin?: boolean;
    IsFromDestination?: boolean;
  }) {
    return this.http.get('/CSP/Shipment/GetAllLocationsForOthers', params);
  }

  getAllCompanyForOthers() {
    return this.http.get('/CSP/Shipment/GetAllCompanyForOthers');
  }

  createOrUpdateConditionGroup(param) {
    return this.http.post('/Platform/BusinessFilter/CreateOrUpdateConditionGroup', param);
  }

  getShipmentLinkDetail(Id: number) {
    let params = { Id };
    return this.http.get('/CSP/ShipmentShareLink/GetDetail', params);
  }

  getSubscriberUsersById(id: number): Observable<{ items: { name: string; value: string }[] }> {
    return this.http.get(`/CSP/Shipment/GetSubscriberUsers`, { id }) as any;
  }
}
