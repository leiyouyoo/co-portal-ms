 
    /**
     * booking相关信息
     */
    export class BookingDetailDto {
        
         
            /* CSP客户提交的bookingid */ 
            customerBookingId: string;
         
            /* 交货方式    CO.FCM.Domain.Shipments.Enums.FbaPickUpMethodType
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            /* 联系人id */ 
            contactId: string;
         
            /* 关联的起始地址Id (存在拖车服务、FBA\M 需要上门取件时有值) */ 
            originAddressId: string;
         
            /* 起始仓库地址 */ 
            originWarehouseId: string;
         
            /* 目的港 */ 
            destinationPortId: string;
         
            /* 起始港Id */ 
            originPortId: string;
         
            /* 目的仓库地址 */ 
            destinationWarehouseId: string;
         
            /* 目的地址  
<remarks>FBM 时来源：客户自己创建的【network-MY-organization-location】</remarks> */ 
            destinationAddressId: string;
         
            /* 预估交货日期，指必须交付货物的日期。 */ 
            deliveryDate: string;
         
            /* 品名 */ 
            commodity: string;
         
            
            id: string;
         
            /* 出货口岸 */ 
            serviceCompanyId?: string;
         
            /* 渠道 CO.FCM.Domain.Shipments.Enums.ChannelType
0 = NotSet
1 = Haika
2 = HaikaTax */ 
            channel?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class OceanShipmentDetailDto {
        
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo: string;
        
        
    }
 
    /**
     * FBA信息Dto  （受理才填）
     */
    export class FbaShipmentDetailDto {
        
         
            /* 快递单号 */ 
            expressNo: string;
         
            /* 快递单号备注 */ 
            expressNoRemark: string;
         
            /* 入库单号 */ 
            warehouseNo: string;
         
            /* 货拉拉单号 */ 
            huoLalaOrderNo: string;
         
            /* FBA运输方式：整柜直送、拆箱后配送，客户自提，暂存仓库
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType: number;
         
            /* FBA运输方式备注 */ 
            fbaDeliveryTypeRemark: string;
         
            /* 货物入库时间（入仓时间） */ 
            cargoPutAwayDate: string;
        
        
    }
 
    /**
     * 创建或编辑shipment
     */
    export class CreateOrUpdateShipmentInput {
        
         
            /* 业务员id */ 
            serviceUserId: number;
         
            /* 承运人（代理）客户Id，如 Cityocean ... */ 
            agentCustomerId: string;
         
            /* 预估交货时间 */ 
            cargoReadyDate: string;
         
            /* 贸易条款，可以是 EXW, FCA, FAS, FOB, CPT, CFR, CIF, CIP, DAT, DAP, DDP, or DPU. */ 
            incoterm: string;
         
            /* 运输条款，port_to_door、port_to_port、door_to_door、door_to_port ... */ 
            freightType: string;
         
            /* 根据送货地址判断(后台已处理，前端无需处理)
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType: number;
         
            /* 运单编号 */ 
            shipmentNo: string;
         
            /* 转运单号 */ 
            transferNo: string;
         
            /* 报关行客户Id */ 
            customsCustomerId: string;
         
            /* 清关行客户Id */ 
            customsClearanceCustomerId: string;
         
            /* booking相关信息 */ 
            booking: BookingDetailDto;
         
            /* 海运业务明细 */ 
            oceanShipment: OceanShipmentDetailDto;
         
            /* FBA信息 */ 
            fbaShipment: FbaShipmentDetailDto;
         
            /* Shipment 中的产品信息 */ 
            lineItems: any[];
         
            
            id: string;
         
            /* 主客户Id */ 
            customerId?: string;
         
            /* 业务类型（运输方式）
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
        
        
    }
 
    /**
     * 入仓模型
     */
    export class WarehousingDto {
        
         
            /* shipmentId */ 
            shipmentIds: any[];
         
            /* 入仓时间 */ 
            warehousingDate?: string;
        
        
    }
 
    /**
     * 用于作废或取消作废多个Shipment的输入参数
     */
    export class ChangeShipmentInvalidStatusInput {
        
         
            /* 需要变更的 ShipmentId 集合 */ 
            shipmentIds: any[];
         
            /* 是否作废，true 作废，false 取消作废 */ 
            isSetInvalid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetPostAgentCustomerListOutput {
        
         
            
            items: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SetShipmentPostAgentCustomerInput {
        
         
            /* 设置后段代理的 ShipmentId 集合 */ 
            shipmentIds: any[];
         
            /* 后段代理客户Id */ 
            postAgentCustomerId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ShipmentDto {
        
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetShipmentListInput {
        
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     * 需要导出侧唛的Id
     */
    export class ExportSideMarksReportInput {
        
         
            
            ids: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportSideMarksReportOutput {
        
         
            
            fileId: string;
        
        
    }


