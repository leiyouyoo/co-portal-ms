import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { UserIdentifier,GetBillListInput,BillOutput,BillDto,CoEntityDto,ChangeBillStatusInput,ConfirmBillsInput,ExportBillInput,ExportBillOutput,SynchronizeBillsInput,CreateOrUpdatePaymentRecordsInput,PaymentRecordDto,CreateOrUpdateChargeItemsInput,ChargeItemDto,BankAccountDto,BillingStatisticsOutput, } from './csp.types';

@BaseUrl('/csp/Billing')
@Injectable({ providedIn: 'root' })
export class BillingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }
  
   
    /**
     * @param url /CSP/Billing/CheckPermission
     * 测试 PermissionChecker
     */

    @POST('checkPermission')
    checkPermission(
        @Payload
        _req:UserIdentifier

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetBillList
     * 分页获取账单列表
     */

    @POST('getBillList')
    getBillList(
        @Payload
        _req:GetBillListInput

    ): Observable<PagedResultDto<BillOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetListByIds
     * 根据多个billingId获取对应详情
     */

    @POST('getListByIds')
    getListByIds(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<BillOutput>> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetBill
     * 获取账单详情
     */

    @GET('getBill')
    getBill(
        @Payload
        _req: {id?:string} 

    ): Observable<BillOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdateBills
     * 批量创建或更新账单
     */

    @POST('createOrUpdateBills')
    createOrUpdateBills(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdateBill
     * 创建或更新账单
     */

    @POST('createOrUpdateBill')
    createOrUpdateBill(
        @Payload
        _req:BillDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/DeleteBill
     * 删除账单
     */

    @POST('deleteBill')
    deleteBill(
        @Payload
        _req:CoEntityDto[]

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/ChangeBillStatus
     * 更新账单状态
     */

    @POST('changeBillStatus')
    changeBillStatus(
        @Payload
        _req:ChangeBillStatusInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/ConfirmBills
     * 确认账单
     */

    @POST('confirmBills')
    confirmBills(
        @Payload
        _req:ConfirmBillsInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetBillReport
     * Get Bill Report
     */

    @GET('getBillReport')
    getBillReport(
        @Payload
        _req: {token?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/ExportBill
     * 导出单个账单
     */

    @POST('exportBill')
    exportBill(
        @Payload
        _req:ExportBillInput

    ): Observable<ExportBillOutput> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/SynchronizeBills
     * 同步账单
     */

    @POST('synchronizeBills')
    synchronizeBills(
        @Payload
        _req:SynchronizeBillsInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdatePaymentRecords
     * 批量创建或更新收费记录
     */

    @POST('createOrUpdatePaymentRecords')
    createOrUpdatePaymentRecords(
        @Payload
        _req:CreateOrUpdatePaymentRecordsInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdatePaymentRecord
     * 创建或更新收费记录
     */

    @POST('createOrUpdatePaymentRecord')
    createOrUpdatePaymentRecord(
        @Payload
        _req:PaymentRecordDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/DeletePaymentRecords
     * 批量删除支付记录
     */

    @POST('deletePaymentRecords')
    deletePaymentRecords(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/DeletePaymentRecord
     * 删除支付记录
     */

    @POST('deletePaymentRecord')
    deletePaymentRecord(
        @Payload
        _req:CoEntityDto[]

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdateChargeItems
     * 批量创建收费条目
     */

    @POST('createOrUpdateChargeItems')
    createOrUpdateChargeItems(
        @Payload
        _req:CreateOrUpdateChargeItemsInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/CreateOrUpdateChargeItem
     * 创建或更新收费项
     */

    @POST('createOrUpdateChargeItem')
    createOrUpdateChargeItem(
        @Payload
        _req:ChargeItemDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/DeleteChargeItems
     * 批量删除收费条目
     */

    @POST('deleteChargeItems')
    deleteChargeItems(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/DeleteChargeItem
     * 删除收费条目
     */

    @POST('deleteChargeItem')
    deleteChargeItem(
        @Payload
        _req:CoEntityDto[]

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetBankAccount
     * 获取银行账户
     */

    @GET('getBankAccount')
    getBankAccount(
        @Payload
        _req: {billId?:string} 

    ): Observable<ListResultDto<BankAccountDto>> {
        return null as any
    }

 
    /**
     * @param url /CSP/Billing/GetBillingsStatistics
     * 获取Billings统计信息
     */

    @GET('getBillingsStatistics')
    getBillingsStatistics(
        @Payload
        _req: {} 

    ): Observable<BillingStatisticsOutput> {
        return null as any
    }



  }
