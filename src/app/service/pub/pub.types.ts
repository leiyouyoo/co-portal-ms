 
    /**
     * 片区Dto
     */
    export class AreaDto {
        
         
            /* 片区名称-本地化 */ 
            nameLocalization: string;
         
            /* 直接RegionId */ 
            regionIds: any[];
         
            /* 直接Region名称-本地化 */ 
            regionNames: any[];
         
            /* 片区包含或所属国家 */ 
            countryIds: any[];
         
            
            id: string;
         
            /* 片区名称-英文 */ 
            name?: string;
        
        
    }
 
    /**
     * 片区重复校验-传输对象模型
     */
    export class AreaCheckDto {
        
         
            /* 名称 */ 
            name: string;
         
            
            id: string;
        
        
    }
 
    /**
     * GetAllAreaForUiPickerInput
     */
    export class GetAllAreaForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     * AreaUiPickerDto
     */
    export class AreaUiPickerDto {
        
         
            /* 片区名称 */ 
            name: string;
         
            /* 片区名称-本地化 */ 
            nameLocalization: string;
         
            /* 直接RegionId */ 
            regionIds: any[];
         
            /* 直接Region名称-本地化 */ 
            regionNames: any[];
         
            /* 片区包含或所属国家 */ 
            countryIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChargingCodeDto {
        
         
            /* 费用组Id */ 
            groupId: string;
         
            /* 费用代码 */ 
            code: string;
         
            /* 费用名称 */ 
            name: string;
         
            /* 是否佣金 */ 
            isCommission: boolean;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 是特殊费用（特殊费用名称：profit\cuf，新增提示：是否加到baseport rates? 。
默认加到base,可以勾选不添加到基本港费用。）
0 = OtherCharging
1 = ManagerCharging */ 
            type: number;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeChargingCodeStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllChargingCodeForUiPickerInput {
        
         
            /* 分组Id */ 
            groupId: string;
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChargingCodeUiPickerDto {
        
         
            /* 费用组Id */ 
            groupId: string;
         
            /* 费用代码 */ 
            code: string;
         
            /* 费用名称 */ 
            name: string;
         
            /* 是否佣金 */ 
            isCommission: boolean;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 是特殊费用（特殊费用名称：profit\cuf，新增提示：是否加到baseport rates? 。
默认加到base,可以勾选不添加到基本港费用。）
0 = OtherCharging
1 = ManagerCharging */ 
            type: number;
         
            
            id: string;
        
        
    }
 
    /**
     * 品名管理
     */
    export class CommodityDto {
        
         
            /* 本地化名称 */ 
            localizationName: string;
         
            /* 备注 */ 
            remark: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 子集Md */ 
            children: any[];
         
            /* 父Id */ 
            parentId: string;
         
            
            id: string;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 品名校验
     */
    export class CommodityCheckInputDto {
        
         
            
            id: string;
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Name 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Name */ 
            checkType?: number;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllCommodityForUiPickerInput {
        
         
            /* 是否包含子级 */ 
            includeChildren: boolean;
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CommodityUiPickerDto {
        
         
            /* 名称 */ 
            name: string;
         
            /* 本地化名称 */ 
            localizationName: string;
         
            /* 备注 */ 
            remark: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 子集Md */ 
            children: any[];
         
            /* 父Id */ 
            parentId: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 箱型管理
     */
    export class ContainerDto {
        
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 描述 MaxLength(500) */ 
            desc: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* ISO */ 
            iso: string;
         
            
            id: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 国际标准代码 */ 
            isoCode?: string;
         
            /* 箱量 */ 
            teu?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ContainerGroupDto {
        
         
            /* 箱型分组名 */ 
            groupName: string;
         
            /* 箱型集合 */ 
            containers: any[];
        
        
    }
 
    /**
     * 箱型校验
     */
    export class ContainerCheckInputDto {
        
         
            /* 代码 */ 
            code: string;
         
            /* 国际标准代码 */ 
            isoCode: string;
         
            /* 箱量 */ 
            teu: number;
         
            /* ISO */ 
            iso: string;
         
            
            id: string;
         
            /* 校验类型
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验ISOCode 4； 校验ISO 5；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = ISOCode
5 = ISO */ 
            checkType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeContainerStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllContainerForUiPickerInput {
        
         
            /* 箱型代码 */ 
            code: string;
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ContainerUiPickerDto {
        
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 代码 */ 
            code: string;
         
            /* 国际标准代码 */ 
            isoCode: string;
         
            /* 描述 MaxLength(500) */ 
            desc: string;
         
            /* 箱量 */ 
            teu: number;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* ISO */ 
            iso: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 费用代码-传输对象模型
     */
    export class CostItemDto {
        
         
            /* 费用名称-本地化 */ 
            nameLocalization: string;
         
            /* 是否包含佣金 */ 
            property: boolean;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 上级Id */ 
            parentId: string;
         
            /* 子集 */ 
            children: any[];
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 费用代码 */ 
            code?: string;
         
            /* 费用代码名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 费用代码重复校验-传输对象模型
     */
    export class CostItemCheckDto {
        
         
            /* 上级Id */ 
            parentId: string;
         
            
            id: string;
         
            /* 费用代码 */ 
            code?: string;
         
            /* 费用名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 费用代码扁平列表
     */
    export class CostItemFlatDto {
        
         
            /* 费用代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 全称 */ 
            fullName: string;
         
            /* 带有父级Id的全Id */ 
            fullId: string;
         
            /* 层级代码 */ 
            levelCode: string;
         
            /* 层级 */ 
            level: number;
         
            /* 父ID */ 
            parentId: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 区县镇
     */
    export class CountyDto {
        
         
            /* 地区代码 */ 
            code: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization: string;
         
            /* 国家Id */ 
            countryId: string;
         
            /* 国家名称 */ 
            countryName: string;
         
            /* 省份Id */ 
            provinceId: string;
         
            /* 省份 */ 
            provinceName: string;
         
            /* 城市Id */ 
            placeId: string;
         
            /* 城市名称 */ 
            placeName: string;
         
            /* 经度 */ 
            longitude: string;
         
            /* 纬度 */ 
            latitude: string;
         
            /* 备注 */ 
            remark: string;
         
            /* 上级Id */ 
            parentId: string;
         
            /* 子集 */ 
            children: any[];
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 地区名称-英文 */ 
            name?: string;
        
        
    }
 
    /**
     * 币种管理
     */
    export class CurrencyDto {
        
         
            /* 币种名称-本地化 */ 
            nameLocalization: string;
         
            /* 国家名称 */ 
            regionName: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 国家Id */ 
            regionId?: string;
         
            /* 币种代码 */ 
            code?: string;
         
            /* 币种名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 币种重复校验-传输对象模型
     */
    export class CurrencyCheckDto {
        
         
            /* 校验类型 - Code|Name
0 = All
1 = Code
2 = Name */ 
            type: number;
         
            
            id: string;
         
            /* 币种代码 */ 
            code?: string;
         
            /* 币种名称 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeCurrencyStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     * 币种列表
     */
    export class CurrencyUiPickerDto {
        
         
            /* 币种名称-本地化 */ 
            nameLocalization: string;
         
            /* 国家名称 */ 
            regionName: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
         
            /* 币种代码 */ 
            code?: string;
         
            /* 币种名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 数据字典-传输对象模型
     */
    export class DataDictionaryDto {
        
         
            /* 字典名称 */ 
            name: string;
         
            /* 描述 */ 
            description: string;
         
            /* 字典名称-本地化 */ 
            nameLocalization: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            
            isValid: boolean;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 类型Id */ 
            typeId?: string;
         
            /* 字典代码 */ 
            code?: string;
        
        
    }
 
    /**
     * 数据字典重复校验-传输对象模型
     */
    export class DataDictionaryCheckDto {
        
         
            
            id: string;
         
            /* 字典类型 */ 
            typeId?: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeDataDictionnaryStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllDataDictionaryForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 类型Id */ 
            typeIds: any[];
         
            /* 类型代码 */ 
            typeCodes: any[];
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class DataDictionaryUiPickerDto {
        
         
            /* 类型Id */ 
            typeId: string;
         
            /* 类型代码 */ 
            typeCode: string;
         
            /* 字典代码 */ 
            code: string;
         
            /* 字典名称 */ 
            name: string;
         
            /* 描述 */ 
            description: string;
         
            /* 字典名称-本地化 */ 
            nameLocalization: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 字典类型-传输对象模型
     */
    export class DictionaryTypeDto {
        
         
            /* 地区名称-本地化 */ 
            nameLocalization: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 描述 */ 
            description: string;
         
            /* 备注 */ 
            remark: string;
         
            
            id: string;
         
            /* 类型代码 */ 
            code?: string;
         
            /* 类型名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 数据字典类型重复校验-传输对象模型
     */
    export class DictionaryTypeCheckDto {
        
         
            
            id: string;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 航班管理
     */
    export class FlightDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
         
            /* 航空公司ID */ 
            airlineId?: string;
         
            /* 航班号 */ 
            no?: string;
        
        
    }
 
    /**
     * 航班校验
     */
    export class FlightCheckInputDto {
        
         
            /* 航班号 */ 
            no: string;
         
            
            id: string;
         
            /* 校验类型
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验No 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = No */ 
            checkType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllFlightForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 航空公司 Id */ 
            airlineIds: any[];
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FlightUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 航空公司ID */ 
            airlineId: string;
         
            /* 航空公司名称 */ 
            airlineName: string;
         
            /* 航班号 */ 
            no: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     * 地点-传输对象模型
     */
    export class PlaceDto {
        
         
            /* 地点名称-本地化 */ 
            nameLocalization: string;
         
            /* 地区名称-列表显示 */ 
            regionName: string;
         
            /* 是否海运 */ 
            isOcean: boolean;
         
            /* 是否空运 */ 
            isAir: boolean;
         
            /* 其它 */ 
            isOther: boolean;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 地点代码 */ 
            code?: string;
         
            /* 地点名称 */ 
            name?: string;
         
            /* 地区Id */ 
            regionId?: string;
        
        
    }
 
    /**
     * 获取列表-传输对象模型
     */
    export class GetPlaceListByRegionsInput {
        
         
            /* 城市id */ 
            placeId: string;
         
            /* 地点名称 */ 
            name: string;
         
            /* 地区Id */ 
            regionIds: any[];
         
            /* 是否海运 */ 
            isOcean: boolean;
         
            /* 是否空运 */ 
            isAir: boolean;
         
            /* 是海运港或空运港 */ 
            isAirOrOcean: boolean;
         
            /* 其它 */ 
            isOther: boolean;
         
            /* 是否为城市 */ 
            isCity: boolean;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 是否分页 */ 
            isPaged: boolean;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     * 港口或区县Dto
     */
    export class PlaceOrCountyDto {
        
         
            /* 0为place,1为Country区县 */ 
            type: number;
         
            /* 地点代码 */ 
            code: string;
         
            /* 地点名称 */ 
            name: string;
         
            /* 地点名称-本地化 */ 
            nameLocalization: string;
         
            /* 多语言 */ 
            localizationText: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 地点重复性校验-传输对象模型
     */
    export class PlaceCheckDto {
        
         
            
            id: string;
         
            /* 地点代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangePlaceStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetPlaceMapInput {
        
         
            
            address_components: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlaceView {
        
         
            
            countryId: string;
         
            
            countryName: string;
         
            
            countryLocalizationText: string;
         
            
            provinceId: string;
         
            
            provinceName: string;
         
            
            provinceLocalizationText: string;
         
            
            cityId: string;
         
            
            cityName: string;
         
            
            cityLocalizationText: string;
         
            
            countyId: string;
         
            
            countyName: string;
         
            
            countyLocalizationText: string;
         
            
            streetId: string;
         
            
            streetName: string;
         
            
            streetLocalizationText: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FromToDto {
        
         
            /* 国家Id */ 
            countryId: string;
         
            /* 全称 */ 
            fullName: string;
         
            /* 邮政编码 */ 
            zipCode: string;
         
            /* 全称-本地化 */ 
            fullNameLocalization: string;
         
            /* 多语言 */ 
            localizationText: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 根据港口Id获取港口信息(含逆向检索省州片区)
     */
    export class GetByPortIdsOutput {
        
         
            /* 港口 */ 
            places: any[];
         
            /* 区域 */ 
            regions: any[];
         
            /* 片区 */ 
            areas: any[];
        
        
    }
 
    /**
     * 根据城市信息返回港口数据
     */
    export class GetPortByCityInput {
        
         
            /* 城市Id */ 
            cityId: string;
         
            /* 谷歌地图place_id */ 
            placeId: string;
         
            /* 谷歌地点明细 */ 
            placeName: string;
         
            /* 是否返回Data，如果为false，则Data为null */ 
            returnData: boolean;
        
        
    }
 
    /**
     * 根据城市信息返回港口数据
     */
    export class GetPortByCityDto {
        
         
            /* 是否有值 */ 
            hasData: boolean;
         
            /* 港口数据 */ 
            data: any[];
        
        
    }
 
    /**
     * 地点UI选择器
     */
    export class GetAllPlaceForUiPickerInput {
        
         
            /* 地区Id */ 
            regionIds: any[];
         
            /* 城市Id */ 
            cityIds: any[];
         
            /* 是否海运 */ 
            isOcean: boolean;
         
            /* 是否空运 */ 
            isAir: boolean;
         
            /* 是海运港或空运港 */ 
            isAirOrOcean: boolean;
         
            /* 其它 */ 
            isOther: boolean;
         
            /* 是否为城市 */ 
            isCity: boolean;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 是否分页 */ 
            isPaged: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class PlaceUiPickerDto {
        
         
            /* 地点代码 */ 
            code: string;
         
            /* 地点名称 */ 
            name: string;
         
            /* 地点名称-本地化 */ 
            nameLocalization: string;
         
            /* 地区Id */ 
            regionId: string;
         
            /* 地区名称-列表显示 */ 
            regionName: string;
         
            /* 是否海运 */ 
            isOcean: boolean;
         
            /* 是否空运 */ 
            isAir: boolean;
         
            /* 其它 */ 
            isOther: boolean;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 树形地区-传输对象模型
     */
    export class RegionDto {
        
         
            /* 地区代码 */ 
            code: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 上级Id */ 
            parentId: string;
         
            /* 子集 */ 
            children: any[];
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 地区名称-英文 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetByAreaInput {
        
         
            /* 片区id */ 
            areaIds: any[];
         
            /* 是否递归取所有下级 */ 
            recursive: boolean;
        
        
    }
 
    /**
     * 地区重复校验-传输对象模型
     */
    export class RegionCheckDto {
        
         
            /* 上级Id */ 
            parentId: string;
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 国家UI组件过滤
     */
    export class GetAllCountryForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 是否包含子对象数据 */ 
            includeChildren: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class CountryUiPickerDto {
        
         
            /* 地区代码 */ 
            code: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 上级Id */ 
            parentId: string;
         
            /* 子集 */ 
            children: any[];
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 地区名称-英文 */ 
            name?: string;
        
        
    }
 
    /**
     * 地区（省份）UI组件过滤
     */
    export class GetAllRegionForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 是否包含子对象数据 */ 
            includeChildren: boolean;
         
            /* 国家Id */ 
            countryIds: any[];
         
            /* 地区Id */ 
            areaIds: any[];
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class RegionUiPickerDto {
        
         
            /* 地区代码 */ 
            code: string;
         
            /* 地区名称-本地化 */ 
            nameLocalization: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 上级Id */ 
            parentId: string;
         
            /* 子集 */ 
            children: any[];
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 地区名称-英文 */ 
            name?: string;
        
        
    }
 
    /**
     * 传入参数
     */
    export class SailingSchedulesInput {
        
         
            /* 离港日期 */ 
            etd: string;
         
            /* 到港日期 */ 
            eta: string;
         
            /* 添加几周的日期 */ 
            week: number;
         
            /* 过滤条件 */ 
            filter: string;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
         
            /* 起始港代码 */ 
            origPortId?: string;
         
            /* 目的港代码 */ 
            destPortId?: string;
         
            /* 船公司代码 */ 
            carrierCode?: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SailingSchedulesDto {
        
         
            /* 图片网址 */ 
            imageUrl: string;
         
            /* 船东代码 */ 
            carrierCode: string;
         
            /* 船期和航次 */ 
            vesselVoyage: string;
         
            /* 起始港名称 */ 
            originPortName: string;
         
            /* 中途经过的港口 */ 
            portOfPass: any[];
         
            /* 目的港名称 */ 
            destinationPortName: string;
         
            /* 到港日期 */ 
            eta: string;
         
            /* 离港日期 */ 
            etd: string;
         
            /* IMO */ 
            imo: string;
         
            /* 航程 */ 
            transitTime: number;
        
        
    }
 
    /**
     * 航线管理
     */
    export class ShippingLineDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 本地化名称 */ 
            localizationName: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 子集Md */ 
            children: any[];
         
            /* 父Id */ 
            parentId: string;
         
            
            id: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     * 航线校验
     */
    export class ShippingLineCheckInputDto {
        
         
            /* 代码 */ 
            code: string;
         
            
            id: string;
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验Name 4；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = Name */ 
            checkType?: number;
         
            /* 名称 */ 
            name?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeShippingLineStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     * 国家航线关系Dto
     */
    export class CountryReationShippingDto {
        
         
            
            id: string;
         
            /* 国家Id */ 
            countryId?: string;
         
            /* 航线Id */ 
            shippingLineId?: string;
        
        
    }
 
    /**
     * 港口航线关系Dto
     */
    export class PortReationCountryDto {
        
         
            
            id: string;
         
            /* 港口 */ 
            portId?: string;
         
            /* 航线 */ 
            shippingLineId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllShippingLineForUiPickerInput {
        
         
            /* 是否包含子级 */ 
            includeChildren: boolean;
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ShippingLineUiPickerDto {
        
         
            /* 名称 */ 
            name: string;
         
            /* 本地化名称 */ 
            localizationName: string;
         
            /* Code */ 
            code: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 子集Md */ 
            children: any[];
         
            /* 父Id */ 
            parentId: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 运输条款-传输对象模型
     */
    export class TransportClauseDto {
        
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 描述 */ 
            description: string;
         
            /* 起始地类型 */ 
            originalName: string;
         
            /* 目的地类型 */ 
            destinationName: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
         
            /* 起始地类型 */ 
            originalId?: string;
         
            /* 目的地类型 */ 
            destinationId?: string;
        
        
    }
 
    /**
     * 运输条款重复校验-传输对象模型
     */
    export class TransportClauseCheckDto {
        
         
            /* 起始地 */ 
            originalId: string;
         
            /* 目的地 */ 
            destinationId: string;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChangeTransportClauseStateInput {
        
         
            
            id?: string;
         
            
            isValid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllTransportClauseForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class TransportClauseUiPickerDto {
        
         
            /* 起始地类型 */ 
            originalId: string;
         
            /* 目的地类型 */ 
            destinationId: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            /* 描述 */ 
            description: string;
         
            /* 起始地类型 */ 
            originalName: string;
         
            /* 目的地类型 */ 
            destinationName: string;
         
            /* 创建人 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 船名管理
     */
    export class VesselDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
         
            /* 代码 */ 
            code?: string;
         
            /* 名称 */ 
            name?: string;
         
            /* 船东ID */ 
            carrierId?: string;
         
            /* 船的注册国家 */ 
            registration?: string;
         
            /* IMO编号 */ 
            imoNumber?: string;
         
            
            unCode?: string;
        
        
    }
 
    /**
     * 船名校验
     */
    export class VesselCheckInputDto {
        
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            
            id: string;
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验Code 3； 校验Name 4；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = Code
4 = Name */ 
            checkType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllVesselForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 船东 Id */ 
            carrierIds: any[];
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class VesselUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 代码 */ 
            code: string;
         
            /* 名称 */ 
            name: string;
         
            /* 船东ID */ 
            carrierId: string;
         
            /* 船的注册国家 */ 
            registration: string;
         
            /* IMO编号 */ 
            imoNumber: string;
         
            /* UNCode */ 
            unCode: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class VesselInfosDto {
        
         
            
            imo: string;
         
            
            mmsiNumber: string;
         
            
            vesselName: string;
         
            
            vesselCallNumber: string;
         
            
            countryOfDestination: string;
         
            
            navistatus: string;
         
            
            estimatedArrivalDateTime: string;
         
            
            latitudeDegree: string;
         
            
            longitudeDegree: string;
         
            
            postTime: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetShipTrackInfoOutput {
        
         
            
            shipTracePoints: any[];
         
            /* 当前坐标点 */ 
            currentPosition: VesselInfosDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AddingVesselInfosTaskInput {
        
         
            /* 船名Id */ 
            vesselName?: string;
         
            /* 开始时间(UTC) */ 
            startTime?: string;
         
            /* 结束时间(UTC) */ 
            endTime?: string;
        
        
    }
 
    /**
     * 航次管理
     */
    export class VoyageDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
         
            /* 船名Id */ 
            vesselId?: string;
         
            /* 航次 */ 
            no?: string;
        
        
    }
 
    /**
     * 航次校验
     */
    export class VoyageCheckInputDto {
        
         
            /* 航次 */ 
            no: string;
         
            
            id: string;
         
            /* 校验类型 
公共类型：不校验 0； 与校验 1； 或校验 2； 
自定义类型：校验No 3；
0 = NoCheck
1 = AndCheck
2 = OrCheck
3 = No */ 
            checkType?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllVoyageForUiPickerInput {
        
         
            /* 是否包含无效数据 */ 
            includeInvalid: boolean;
         
            /* 船名 Id */ 
            vesselIds: any[];
         
            
            ids: any[];
         
            
            searchText: string;
         
            
            includeDeleted: boolean;
         
            
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class VoyageUiPickerDto {
        
         
            /* 创建人姓名 */ 
            creatorUserName: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 船名Id */ 
            vesselId: string;
         
            /* 船名 */ 
            vesselName: string;
         
            /* 航次 */ 
            no: string;
         
            /* 是否有效 */ 
            isValid: boolean;
         
            
            id: string;
        
        
    }


