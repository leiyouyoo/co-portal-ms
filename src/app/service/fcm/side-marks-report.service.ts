import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ExportSideMarksReportInput,ExportSideMarksReportOutput, } from './fcm.types';

@BaseUrl('/fcm/SideMarksReport')
@Injectable({ providedIn: 'root' })
export class SideMarksReportService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /FCM/SideMarksReport/ExportReport
     * 
     */

    @POST('exportReport')
    exportReport(
        @Payload
        _req:ExportSideMarksReportInput

    ): Observable<ExportSideMarksReportOutput> {
        return null as any
    }

 
    /**
     * @param url /FCM/SideMarksReport/GetReport
     * 
     */

    @GET('getReport')
    getReport(
        @Payload
        _req: {fileId?:string} 

    ): Observable<any> {
        return null as any
    }



  }
