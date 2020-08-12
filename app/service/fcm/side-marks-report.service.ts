import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMExportSideMarksReportInput,FCMExportSideMarksReportOutput,FCMSidMarkdReportData, } from './fcm.types';

@BaseUrl('/fcm/SideMarksReport')
@Injectable({ providedIn: 'root' })
export class FCMSideMarksReportService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/SideMarksReport/GetMultiSideMarks
     * 获取多个侧唛的拼接文件
     */

    @POST('getMultiSideMarks')
    getMultiSideMarks(
        @Payload
        _req:FCMExportSideMarksReportInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/SideMarksReport/ExportReport
     * 导出侧唛信息
     */

    @POST('exportReport')
    exportReport(
        @Payload
        _req:FCMExportSideMarksReportInput

    ): Observable<FCMExportSideMarksReportOutput> {
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


    /**
     * @param url /FCM/SideMarksReport/GetSideMarksQrCodeData
     * 获取侧唛二维码信息
     */

    @GET('getSideMarksQrCodeData')
    getSideMarksQrCodeData(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMSidMarkdReportData> {
        return null as any
    }



  }
