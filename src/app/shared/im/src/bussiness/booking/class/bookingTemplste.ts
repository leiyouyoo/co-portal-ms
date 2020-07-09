export interface BookingTemplateEntity {
    //id
    id?:number;
    name?:string;
    incotermsId?:number;
    tradeType?:number;
    freightMethodType?:number;
    shipperLocationId?:number;
    shipperCustomerId?:number;
    consigneeLocationId?:number;
    consigneeCustomerId?:number;
    destinationAddressId?:number;
    destinationPortId?:number;
    originPortId?:number;
    isContainsSpecialGoods?:boolean;
}
