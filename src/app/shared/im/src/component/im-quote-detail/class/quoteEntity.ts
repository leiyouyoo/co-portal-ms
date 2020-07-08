export interface quoteEntity {
  id?: string;
  name?: string;
  freightMethodType?: number;
  shipmentType?: number;
  originPortId?: string;
  cargoReadyDate?: Date;
  creationTime?: string;
  originIsRequireTruck?: boolean;
  originAddressId?: string;
  originAddressName?: string;
  truckOriginAddress?: string;
  originAddress?: any;
  originPort?: any;
  destinationPort?: any;
  truckDestinationAddress?: string;
  isDeclaration?: boolean;
  isInsurance?: boolean;
  destinationPortId?: string;
  deliveryDate?: string;
  destinationIsRequireTruck?: boolean;
  destinationAddressId?: string;
  destinationAddressName?: string;
  destinationAddress?: any;
  isClearance?: boolean;
  tradeType?: number;
  quantity?: number;
  quantityUnitCode?: string;
  quantityUnitStr?: string;
  weight?: number;
  weightUnitCode?: string;
  totalWeightUnitStr?: string;
  volume?: number;
  volumeUnitCode?: string;
  totalVolumeUnitStr?: string;
  unitConvertType?: number; //单位类型
  totalWeightDisplay?: string;
  totalVolumeDisplay?: string;
  quantityDisplay?: string;
  isContainsSpecialGoods?: boolean;
  unContainsSpecialGoods?: boolean;
  containsSpecialGoodsTypes?: string;
  description?: string;
  specialInstructions?: string;
  containerType?: string; //箱型规格保存json字符串，如 [ {name:20GP,value:1},{name:40GP,value2} ]
  status?: number; //预订状态(枚举)
  // fbaAddressId?: number;
  // fbmAddressId?: number;
  incotermsDisplay?: string;
  isTaxIncluded?: boolean;
  containsSpecialGoodsTypesArr: Array<any>;
  totalChargeArr: Array<any>;
  quoteReplys?: Array<quoteReplys>;
  customerid?: number;
  customerName?: string;
  containTypeText?: string;
  carriageTerms?: number;
  carriageTermsName?: string;
  freightType?: number;
  quoteNo?: string;
  isRepeatEnquired?: boolean;
  action?: number;
}
export interface quoteReplys {
  replyNo?: string;
  carrierId: number;
  carrierName: string;
  sailSchedule: string;
  // 承运公司
  transitTime: string;
  // 航程
  expiresDate: Date;
  // 过期时间
  validStartDate: Date;
  // 有效起始时间
  validEndDate: Date;
  // 有效结束时间
  status: number;
  // 状态
  quoteEnquiryId: number;
  // 询价Id
  id: string;
  quoteReplyItems?: Array<QuoteReplyItem>;
  creationTime?: Date;
  totalCharge?: string;
}
export interface QuoteReplyItem {
  chargingCodeId: number;
  // 费用类型Id(运输费用时没有)
  unitPrice: number;
  // 单价
  currencyId: number;
  // 币种Id
  quantity: number;
  // 数量
  unitType: number;
  //单位类型
  containerCode: string;
  // 箱型Code
  priceProduceNode: number;
  //费用分类
  remark: string;
  // 备注
  quoteReplyId: number;
  // 对应报价Id
  id: string;
}
