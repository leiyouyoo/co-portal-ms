 
    /**
     *  No Remark 
     */
    export class QuantityDto {
        
         
            
            value?: number;
         
            
            unit?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PreShipmentListItemDto {
        
         
            
            shipmentNo: string;
         
            /* 
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode: number;
         
            
            creationTime: string;
         
            
            serviceUser: string;
         
            
            customerName: string;
         
            
            contactName: string;
         
            
            address: string;
         
            /* 
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            
            cargoReadyDate: string;
         
            
            originAddressId: string;
         
            
            originAddress: string;
         
            
            originWarehouseId: string;
         
            
            originWarehouse: string;
         
            
            country: string;
         
            
            commodity: string;
         
            
            quantity: QuantityDto;
         
            
            weight: QuantityDto;
         
            
            volume: QuantityDto;
         
            
            channel: string;
         
            
            cargoPutAwayDate: string;
         
            
            serviceCompany: string;
         
            
            fbano: string;
         
            
            agentCustomer: string;
         
            
            creator: string;
         
            
            isCustomerCreate: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class BookingDetailDto {
        
         
            
            customerBookingId: string;
         
            
            isCustomerCreate: boolean;
         
            /* 
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            
            contactId: string;
         
            
            originAddressId: string;
         
            
            originWarehouseId: string;
         
            
            destinationPortId: string;
         
            
            originPortId: string;
         
            
            destinationWarehouseId: string;
         
            
            destinationAddressId: string;
         
            
            deliveryDate: string;
         
            
            commodity: string;
         
            
            serviceCompanyId?: string;
         
            
            channel?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class OceanShipmentDetailDto {
        
         
            
            carrierBookingNo: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FbaShipmentDetailDto {
        
         
            
            expressNo: string;
         
            
            expressNoRemark: string;
         
            
            warehouseNo: string;
         
            
            huoLalaOrderNo: string;
         
            /* 
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType: number;
         
            
            fbaDeliveryTypeRemark: string;
         
            
            cargoPutAwayDate: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CreateOrUpdateShipmentInput {
        
         
            
            serviceUserId: number;
         
            
            agentCustomerId: string;
         
            
            cargoReadyDate: string;
         
            
            pickUpTimeRange: string;
         
            
            incoterm: string;
         
            
            freightType: string;
         
            /* 
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType: number;
         
            
            shipmentNo: string;
         
            
            transferNo: string;
         
            
            customsCustomerId: string;
         
            
            customsClearanceCustomerId: string;
         
            
            booking: BookingDetailDto;
         
            
            oceanShipment: OceanShipmentDetailDto;
         
            
            fbaShipment: FbaShipmentDetailDto;
         
            
            lineItems: any[];
         
            
            addressItems: any[];
         
            
            id: string;
         
            
            customerId?: string;
         
            /* 
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class WarehousingDto {
        
         
            
            shipmentIds: any[];
         
            
            warehousingDate?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeShipmentInvalidStatusInput {
        
         
            
            shipmentIds: any[];
         
            
            isSetInvalid: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SetShipmentPostAgentCustomerInput {
        
         
            
            shipmentIds: any[];
         
            
            postAgentCustomerId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ShipmentDto {
        
         
            
            carrierBookingNo: string;
         
            /* 
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType: number;
         
            
            shipmentNo: string;
         
            /* 
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode: number;
         
            
            creationTime: string;
         
            
            serviceUser: string;
         
            
            customerName: string;
         
            
            contactName: string;
         
            
            address: string;
         
            /* 
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            
            cargoReadyDate: string;
         
            
            originAddressId: string;
         
            
            originAddress: string;
         
            
            originWarehouseId: string;
         
            
            originWarehouse: string;
         
            
            country: string;
         
            
            commodity: string;
         
            
            quantity: QuantityDto;
         
            
            weight: QuantityDto;
         
            
            volume: QuantityDto;
         
            
            channel: string;
         
            
            cargoPutAwayDate: string;
         
            
            serviceCompany: string;
         
            
            fbano: string;
         
            
            agentCustomer: string;
         
            
            creator: string;
         
            
            isCustomerCreate: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetShipmentListInput {
        
         
            
            searchText: string;
         
            
            agentCustomerIds: any[];
         
            
            channel: string;
         
            
            startTime: string;
         
            
            endTime: string;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ShipmentListItemDto {
        
         
            
            shipmentNo: string;
         
            /* 
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode: number;
         
            
            creationTime: string;
         
            
            serviceUser: string;
         
            
            customerName: string;
         
            
            contactName: string;
         
            
            address: string;
         
            /* 
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            
            cargoReadyDate: string;
         
            
            originAddressId: string;
         
            
            originAddress: string;
         
            
            originWarehouseId: string;
         
            
            originWarehouse: string;
         
            
            country: string;
         
            
            commodity: string;
         
            
            quantity: QuantityDto;
         
            
            weight: QuantityDto;
         
            
            volume: QuantityDto;
         
            
            channel: string;
         
            
            cargoPutAwayDate: string;
         
            
            serviceCompany: string;
         
            
            fbano: string;
         
            
            agentCustomer: string;
         
            
            creator: string;
         
            
            isCustomerCreate: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportSideMarksReportInput {
        
         
            
            ids: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportSideMarksReportOutput {
        
         
            
            fileId: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SideMarksData {
        
         
            
            bookingId: string;
         
            
            serviceCompanyId: string;
         
            
            quantity: number;
         
            
            shipmentNo: string;
         
            
            warehouse: string;
         
            
            country: string;
         
            
            warehouseCode: string;
         
            /* 
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType: number;
         
            
            fbaNo: string;
         
            
            customerService: string;
         
            
            customerServiceTel: string;
         
            
            customerServiceCompany: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GenerateWarehouseReciptInput {
        
         
            
            ids: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GenerateWarehouseReciptOutput {
        
         
            
            fileIds: any[];
        
        
    }


