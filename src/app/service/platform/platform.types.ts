 
    /**
     * App版本管理Dto模型
     */
    export class AppVersionDto {
        
         
            
            id: string;
         
            /* App所属系统
0 = NotSet
1 = Android
2 = Ios */ 
            appType?: number;
         
            /* 最新版本 */ 
            version?: string;
        
        
    }
 
    /**
     * 租户信息
     */
    export class TenantInfo {
        
         
            /* Id */ 
            id: number;
         
            /* 名称 */ 
            name: string;
         
            /* 租户账号 */ 
            tenancyName: string;
        
        
    }
 
    /**
     * 用户信息
     */
    export class UserInfo {
        
         
            /* Id */ 
            id: number;
         
            /* 名 */ 
            name: string;
         
            /* 姓 */ 
            surname: string;
         
            
            cName: string;
         
            /* 账号 */ 
            userName: string;
         
            /* 地址 */ 
            emailAddress: string;
         
            /* 电话 */ 
            phoneNumber: string;
         
            
            profilePictureId: string;
         
            /* 用户拥有的角色集合 */ 
            roles: any[];
         
            /* 用户归属租户信息 */ 
            tenant: TenantInfo;
        
        
    }
 
    /**
     * BizCodeRuleTemplate Dto
     */
    export class BizCodeRuleTemplateDto {
        
         
            
            id: string;
         
            
            groupId: string;
         
            
            name: string;
         
            
            value: string;
         
            
            isEnabled: boolean;
         
            
            numberStep: number;
         
            
            resetDateFormat: string;
         
            
            description: string;
         
            
            creationTime: string;
         
            
            creatorUserId: number;
         
            
            lastModificationTime: string;
         
            
            lastModifierUserId: number;
         
            
            isDeleted: boolean;
         
            
            deletionTime: string;
         
            
            deleterUserId: number;
        
        
    }
 
    /**
     * 获取模板详情
     */
    export class CreateOrUpdateTemplateInput {
        
         
            /* 为空时表示新建 */ 
            id: string;
         
            /* 租户Id，如果不为空则表示为特定租户特有规则 */ 
            tenantId: number;
         
            /* 是否启用 */ 
            isEnabled: boolean;
         
            /* 数字序号步长 */ 
            numberStep: number;
         
            /* 备注说明 */ 
            description: string;
         
            /* 规则模板名称 */ 
            name?: string;
         
            /* 规则模板值 */ 
            value?: string;
         
            /* 编码序号重置日期格式。（以当前时间为基准，如果当前时间不等于最后生成的时间，则重置编码） */ 
            resetDateFormat?: string;
        
        
    }
 
    /**
     * 自定义过滤条件组信息
     */
    export class ConditionGroupInfo {
        
         
            /* 该分组的拥有者，如果为空则租户下的所有人都可以使用此过滤 */ 
            userId: number;
         
            /* Gets a value indicating whether this instance is default. */ 
            isDefault: boolean;
         
            /* Gets or sets the tenant identifier. */ 
            tenantId: number;
         
            /* Gets or sets the condition items. */ 
            items: any[];
         
            /* 主键 */ 
            id: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 创建人ID */ 
            creatorUserId: number;
         
            /* 最后一次修改时间 */ 
            lastModificationTime: string;
         
            /* 最后一次修改人 */ 
            lastModifierUserId: number;
         
            /* 删除时间 */ 
            deletionTime: string;
         
            /* 删除用户 */ 
            deleterUserId: number;
         
            
            isDeleted: boolean;
         
            /* 过滤条件组名称 */ 
            name?: string;
         
            /* Gets or sets the type of the business. */ 
            businessType?: string;
        
        
    }
 
    /**
     * 用户-数据传输对象
     */
    export class UserDto {
        
         
            /* 名 */ 
            name: string;
         
            /* 姓 */ 
            surname: string;
         
            
            cName: string;
         
            /* 账号 */ 
            userName: string;
         
            /* 邮箱 */ 
            emailAddress: string;
         
            /* 电话 */ 
            phoneNumber: string;
         
            /* 头像 */ 
            profilePictureId: string;
         
            /* 是否激活 */ 
            isActive: boolean;
         
            /* 创建时间 */ 
            creationTime: string;
         
            
            id: number;
        
        
    }
 
    /**
     * 样例列表-数据传输对象
     */
    export class CacheExampleDto {
        
         
            /* 备注 */ 
            remark: string;
         
            /* 创建人ID */ 
            createUserId: number;
         
            /* 创建用户 */ 
            createUser: UserDto;
         
            /* 名称 */ 
            name: string;
         
            /* 别名 */ 
            displayName: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 实体变更版本快照
     */
    export class EntityHistorySnapshot {
        
         
            /* 变更属性快照字典 */ 
            changedPropertiesSnapshots: object;
         
            /* 属性变更层级记录 */ 
            propertyChangesStackTree: object;
        
        
    }
 
    /**
     * 公司配置-数据传输对象
     */
    export class CompanyConfigureDto {
        
         
            /* 公司ID */ 
            companyId: string;
         
            /* 公司名称 */ 
            companyName: string;
         
            /* 客户ID */ 
            customerId: string;
         
            /* 客户名称 */ 
            customerName: string;
         
            /* 标准币种ID */ 
            standardCurrencyId: string;
         
            /* 标准币种ID */ 
            standardCurrencyName: string;
         
            /* 是否有效 */ 
            isActive: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     * 组织节点-数据传输对象
     */
    export class OrganizationUnitDto {
        
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            
            fullName: string;
         
            /* 组织节点类型
1 = Group
2 = Department
4 = Company
8 = Region
16 = Section
32 = Head */ 
            type: number;
         
            /* 子节点数 */ 
            childCount: number;
         
            /* 名称 */ 
            name: string;
         
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
     * 版本-数据传输对象
     */
    export class EditionDto {
        
         
            /* 功能权限 */ 
            functionPermissions: any[];
         
            /* 租户集合 */ 
            tenants: any[];
         
            /* 名称 */ 
            name: string;
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            /* 描述 */ 
            desc: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 设置版本权限-输入参数
     */
    export class SetEditionPermissionsInput {
        
         
            /* 功能权限集合 */ 
            functionPermissionIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     * 授予版本给指定租户-输入参数
     */
    export class GrantToTenantsInput {
        
         
            /* 功能权限集合 */ 
            tenantIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     * 移除版本从指定租户-输入参数
     */
    export class RevokeFromTenantsInput {
        
         
            /* 租户集合 */ 
            tenantIds: any[];
         
            
            id: string;
        
        
    }
 
    /**
     * 职务-数据传输对象
     */
    export class JobDto {
        
         
            /* 名称 */ 
            name: string;
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            /* 职务类型 */ 
            jobTypeId: string;
         
            /* 职务类型 */ 
            jobTypeName: string;
         
            /* 描述 */ 
            desc: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 极光用户绑定Dto
     */
    export class JPushUserIdBindRegistrationIdDto {
        
         
            
            id: string;
         
            /* 设备Id */ 
            registrationId?: string;
        
        
    }
 
    /**
     * 菜单项-数据传输对象
     */
    export class MenuItemDto {
        
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            /* 顺序 */ 
            order: number;
         
            /* 图标 */ 
            icon: string;
         
            /* 菜单项类型
0 = Web
1 = Mobile */ 
            type: number;
         
            /* Url */ 
            url: string;
         
            /* 关联权限ID */ 
            permissionId: string;
         
            /* 关联权限全称 */ 
            permissionName: string;
         
            /* 目标位置 */ 
            target: string;
         
            /* 快捷键 */ 
            shortcut: string;
         
            /* 是否激活 */ 
            isActive: boolean;
         
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
     * 移动菜单项-数据传输对象
     */
    export class MoveMenuItemInput {
        
         
            /* ID */ 
            id: string;
         
            /* 新父项ID */ 
            parentId: string;
        
        
    }
 
    /**
     * 添加菜单到收藏夹-数据传输对象
     */
    export class AddToFavoritesInput {
        
         
            /* 菜单项ID */ 
            menuIds: any[];
        
        
    }
 
    /**
     * 更改菜单项状态-数据传输对象
     */
    export class ChangeStateInput {
        
         
            /* 是否激活状态 */ 
            isActive: boolean;
         
            
            id: string;
        
        
    }
 
    /**
     * 当前用户的通知分页集合
     */
    export class GetNotificationsOutput {
        
         
            /* 未读数量 */ 
            unreadCount: number;
         
            
            totalCount: number;
         
            
            items: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class EntityDto {
        
         
            
            id: string;
        
        
    }
 
    /**
     * 当前登录用户的通知设置参数
     */
    export class GetNotificationSettingsOutput {
        
         
            /* 租户Id */ 
            tenantId: number;
         
            /* 用户 Id */ 
            userId: number;
         
            /* 是否接收通知 */ 
            receiveNotifications: boolean;
         
            /* 已订阅的通知 */ 
            notifications: any[];
        
        
    }
 
    /**
     * 更新通知设置的输入参数
     */
    export class UpdateNotificationSettingsInput {
        
         
            /* 租户Id */ 
            tenantId: number;
         
            /* 用户 Id */ 
            userId: number;
         
            /* 是否接收全部通知 */ 
            receiveNotifications: boolean;
         
            /* 通知订阅信息 */ 
            notifications: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SendMessageModel {
        
         
            
            targetUsers: any[];
         
            
            message: string;
         
            /* 
0 = Info
1 = Success
2 = Warn
3 = Error
4 = Fatal */ 
            severity: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class IMContactGroupDto {
        
         
            
            companyName: string;
         
            
            contacts: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ContactUserDto {
        
         
            
            userId: number;
         
            
            profilePictureId: string;
         
            
            name: string;
         
            
            surname: string;
         
            
            cName: string;
         
            
            phoneNumber: string;
         
            
            email: string;
         
            
            isActive: boolean;
         
            
            position: string;
         
            
            fullOrganizationUnit: string;
         
            
            organizationUnitLevelCode: string;
         
            
            customerId: string;
         
            
            companyName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class OrganizationUnitUserDto {
        
         
            
            userId: number;
         
            
            profilePictureId: string;
         
            
            userName: string;
         
            
            name: string;
         
            
            surname: string;
         
            
            cName: string;
         
            
            phoneNumber: string;
         
            
            email: string;
         
            
            position: string;
         
            
            fullOrganizationUnit: string;
        
        
    }
 
    /**
     * 移动组织节点-输入参数
     */
    export class MoveOrganizationUnitInput {
        
         
            /* 组织节点ID */ 
            id: string;
         
            /* 新父项ID */ 
            parentId: string;
        
        
    }
 
    /**
     * 权限项-数据传输对象
     */
    export class PermissionDto {
        
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            /* 权限项类型
1 = Function
2 = Data */ 
            type: number;
         
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
     * 移动权限项-输入参数
     */
    export class MovePermissionItemInput {
        
         
            /* 父项ID */ 
            parentId: string;
         
            
            id: string;
        
        
    }
 
    /**
     * 批量授予权限给用户-输入参数
     */
    export class GrantFunctionPermissionsToUserInput {
        
         
            /* 父项ID */ 
            userId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 撤销用户权限-输入参数
     */
    export class RevokeUserFunctionPermissionsInput {
        
         
            /* 父项ID */ 
            userId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 批量授予权限给角色-输入参数
     */
    export class GrantFunctionPermissionsToRoleInput {
        
         
            /* 角色ID */ 
            roleId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 撤销角色的权限-输入参数
     */
    export class RevokeRoleFunctionPermissionsInput {
        
         
            /* 角色ID */ 
            roleId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 数据权限项-数据传输对象
     */
    export class DataPermissionDto {
        
         
            /* 数据范围 */ 
            datas: any[];
         
            /* 显示名称 */ 
            displayName: string;
         
            /* 显示名称本地化信息 */ 
            displayNameLocalization: string;
         
            /* 权限项类型
1 = Function
2 = Data */ 
            type: number;
         
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
     * 批量授予权限给用户-输入参数
     */
    export class GrantDataPermissionsToUserInput {
        
         
            /* 父项ID */ 
            userId: number;
         
            /* 权限项集合 */ 
            permissions: any[];
        
        
    }
 
    /**
     * 撤销用户权限-输入参数
     */
    export class RevokeUserDataPermissionsInput {
        
         
            /* 父项ID */ 
            userId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 批量授予权限给角色-输入参数
     */
    export class GrantDataPermissionsToRoleInput {
        
         
            /* 角色ID */ 
            roleId: number;
         
            /* 权限项集合 */ 
            permissions: any[];
        
        
    }
 
    /**
     * 撤销角色的权限-输入参数
     */
    export class RevokeRoleDataPermissionsInput {
        
         
            /* 角色ID */ 
            roleId: number;
         
            /* 权限项集合 */ 
            permissionIds: any[];
        
        
    }
 
    /**
     * 职位-数据传输对象
     */
    export class PositionDto {
        
         
            /* 显示名称本地化信息 */ 
            nameLocalization: string;
         
            /* 描述 */ 
            desc: string;
         
            /* 所属部门 */ 
            organizationUnitId: string;
         
            /* 所属部门 */ 
            organizationUnitName: string;
         
            /* 职务ID */ 
            jobId: string;
         
            /* 职务名 */ 
            jobName: string;
         
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
     *  No Remark 
     */
    export class PositionAndOrganizationUnitDto {
        
         
            
            desc: string;
         
            
            localizationDesc: string;
         
            
            fullOrganizationUnit: string;
        
        
    }
 
    /**
     * 批量添加用户到职位点-输入参数
     */
    export class AddUsersToPositionInput {
        
         
            /* 用户ID集合 */ 
            userIds: any[];
         
            /* 职位ID */ 
            positionId: string;
         
            /* 是否默认职位 */ 
            isDefault: boolean;
        
        
    }
 
    /**
     * 批量添加用户到职位-输入参数
     */
    export class SetUserDefaultPositionInput {
        
         
            /* 用户ID */ 
            userId: number;
         
            /* 职位ID */ 
            positionId: string;
        
        
    }
 
    /**
     * 判断用户是否归属指定职位-输入参数
     */
    export class IsInPositionInput {
        
         
            /* 用户ID */ 
            userId: number;
         
            /* 职位ID */ 
            positionId: string;
         
            /* 是否默认职位 */ 
            isDefault: boolean;
        
        
    }
 
    /**
     * 用户信息-数据传输对象
     */
    export class SessionUserDto {
        
         
            /* 客户Id */ 
            customerId: string;
         
            /* 当前客户归属的服务商（如 Cityocean）客户Id */ 
            serviceCustomerId: string;
         
            /* 当前客户归属的服务商（如 Cityocean）租户Id */ 
            serviceCustomerTenantId: number;
         
            /* 当前客户归属的服务商（如 Cityocean）租户名称 */ 
            serviceCustomerTenantName: string;
         
            /* 名 */ 
            name: string;
         
            /* 姓 */ 
            surname: string;
         
            /* 账号 */ 
            userName: string;
         
            /* 邮箱 */ 
            emailAddress: string;
         
            /* 头像图片ID */ 
            profilePictureId: string;
         
            /* 角色集合 */ 
            roles: any[];
         
            /* 模拟用户Id */ 
            impersonatorUserId: number;
         
            
            id: number;
        
        
    }
 
    /**
     * 租户信息-数据传输对象
     */
    export class SessionTenantDto {
        
         
            /* 租户账号 */ 
            tenancyName: string;
         
            /* 名称 */ 
            name: string;
         
            /* Logo文件Id */ 
            logoId: string;
         
            /* Logo文件类型 */ 
            logoFileType: string;
         
            /* 创建时间 */ 
            creationTime: string;
         
            /* 模拟租户Id */ 
            impersonatorTenantId: number;
         
            
            id: number;
        
        
    }
 
    /**
     * 平台信息-数据传输对象
     */
    export class SessionPlatformDto {
        
         
            /* 平台名 */ 
            name: string;
         
            /* 描述 */ 
            desc: string;
         
            /* 版本 */ 
            version: string;
         
            /* 发布日期 */ 
            releaseDate: string;
        
        
    }
 
    /**
     * 获取当前用户会话信息-数据传输对象
     */
    export class UserSessionDto {
        
         
            /* 用户信息 */ 
            user: SessionUserDto;
         
            /* 租户信息 */ 
            tenant: SessionTenantDto;
         
            /* 平台信息 */ 
            platform: SessionPlatformDto;
         
            /* 是否在多租户侧
1 = Tenant
2 = Host */ 
            multiTenancySide: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserCurrentCultureConfigDto {
        
         
            
            name: string;
         
            
            displayName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class LanguageInfo {
        
         
            
            name: string;
         
            
            displayName: string;
         
            
            icon: string;
         
            
            isDefault: boolean;
         
            
            isDisabled: boolean;
         
            
            isRightToLeft: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserLocalizationConfigDto {
        
         
            
            currentCulture: AbpUserCurrentCultureConfigDto;
         
            
            languages: any[];
         
            
            currentLanguage: LanguageInfo;
         
            
            sources: any[];
         
            
            values: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class OrganizationUnitPositionConfigDto {
        
         
            
            positionName: string;
         
            
            organizationUnitName: string;
        
        
    }
 
    /**
     * 用户授权信息
     */
    export class UserAuthConfigDto {
        
         
            /* 授予的数据权限 */ 
            grantedDataPermissions: any[];
         
            /* 授予的功能权限 */ 
            grantedFunctionPermissions: any[];
         
            
            organizationUnitPosition: OrganizationUnitPositionConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserNavConfigDto {
        
         
            
            menus: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserSettingConfigDto {
        
         
            
            values: object;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserClockConfigDto {
        
         
            
            provider: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserWindowsTimeZoneConfigDto {
        
         
            
            timeZoneId: string;
         
            
            baseUtcOffsetInMilliseconds: number;
         
            
            currentUtcOffsetInMilliseconds: number;
         
            
            isDaylightSavingTimeNow: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserIanaTimeZoneConfigDto {
        
         
            
            timeZoneId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserTimeZoneConfigDto {
        
         
            
            windows: AbpUserWindowsTimeZoneConfigDto;
         
            
            iana: AbpUserIanaTimeZoneConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserTimingConfigDto {
        
         
            
            timeZoneInfo: AbpUserTimeZoneConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserAntiForgeryConfigDto {
        
         
            
            tokenCookieName: string;
         
            
            tokenHeaderName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AbpUserSecurityConfigDto {
        
         
            
            antiForgery: AbpUserAntiForgeryConfigDto;
        
        
    }
 
    /**
     * 用户配置-数据传输对象
     */
    export class UserConfigurationDto {
        
         
            /* 会话信息 */ 
            session: UserSessionDto;
         
            /* 本地化设置 */ 
            localization: AbpUserLocalizationConfigDto;
         
            /* 授权设置 */ 
            auth: UserAuthConfigDto;
         
            /* 导航设置 */ 
            nav: AbpUserNavConfigDto;
         
            /* 用户设置数据 */ 
            setting: AbpUserSettingConfigDto;
         
            /* 时钟设置 */ 
            clock: AbpUserClockConfigDto;
         
            /* 时区设置 */ 
            timing: AbpUserTimingConfigDto;
         
            /* 安全设置 */ 
            security: AbpUserSecurityConfigDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class TfsWebhookMessageDto {
        
         
            
            text: string;
         
            
            markdown: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class TfsWebhookInput {
        
         
            
            message: TfsWebhookMessageDto;
         
            
            detailedMessage: TfsWebhookMessageDto;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class NameValueDto {
        
         
            
            name: string;
         
            
            value: string;
        
        
    }


