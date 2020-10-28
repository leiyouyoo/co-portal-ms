import { Injectable, Optional, Inject } from '@angular/core';
import { _HttpClient } from '@co/common';
import { CoConfigManager } from '@co/core';

@Injectable({
  providedIn: 'root',
})
export class ImService {
  constructor(private _httpClient: _HttpClient) {}
  getImgUrl(url) {
    if (url.indexOf('data:image/png;base64') != -1 || url.indexOf('http') != -1) {
      return url;
    } else {
      return CoConfigManager.getValue('serverUrl') ? CoConfigManager.getValue('serverUrl') + url : 'http://192.168.1.6:8000' + url;
    }
  }
  getOrganizationUnit(param: { ParentId?: string; IsRecursion: boolean }) {
    return this._httpClient.get('/Platform/OrganizationUnit/GetAll', param);
  }
  getByUserId(userId: string) {
    const url = `/CRM/ContactExternal/GetByUserId`;
    return this._httpClient.get(url, { userId });
  }
  UpdateUserInfo(param: { userId: string; profilePictureId?: string; nickName?: string; userName?: string }) {
    const url = `/SSO/User/UpdateUserInfo`;
    return this._httpClient.put(url, param);
  }
  getCustomer(id) {
    const url = `/CRM/CustomerExternal/Get`;
    return this._httpClient.get(url, { id });
  }

  // 根据用户id获取联系人
  getUser(id) {
    const url = `/SSO/User/Get`;
    return this._httpClient.get(url, { id });
  }
  // 获取客户下所有联系人
  getCustomerContacts(id?) {
    let param = {};
    if (id) param['id'] = id;
    const url = `/CRM/ContactIM/GetCustomerContacts`;
    return this._httpClient.get(url, param);
  }

  // 根据客户Id获取客服列表
  GetServiceUsers(id?) {
    let param = {};
    if (id) param['id'] = id;
    const url = `/CSP/BusinessServiceUser/GetServiceUsers`;
    return this._httpClient.get(url, param);
  }
  // 获取公司内部组织架构员工
  getUsersAndOrganizationUnit(inpupt?) {
    let param = {};
    if (inpupt) param['inpupt'] = inpupt;
    const url = `/Platform/OrganizationUnit/GetUsersAndOrganizationUnit`;
    return this._httpClient.get(url, param);
  }

  // 获取所有合作伙伴的所有联系人
  getPartnerContacts(CustomerId?, SearchText?) {
    let param = {};
    if (SearchText) param['SearchText'] = SearchText;
    const url = `/CRM/ContactIM/GetPartnerContacts`;
    return this._httpClient.get(url, param);
  }
  // 获取业务员所跟进的所有客户的所有联系
  getSaleCustomerContacts(CustomerId?, SearchText?) {
    let param = {};
    if (SearchText) param['SearchText'] = SearchText;
    const url = `/CRM/ContactIM/GetSaleCustomerContacts`;
    return this._httpClient.get(url, param);
  }
  // 获取群聊信息列表
  getGroupMsg(params: any = {}) {
    return this._httpClient.get('/IM/Message/GetGroupMsg', params);
  }
  // 获取单聊信息列表
  getC2CMsg(params) {
    return this._httpClient.post('/IM/Message/QueryC2CMsg', params);
  }

  // 获取获取群聊文件信息
  GetGroupFileInfos(params: { GroupId: string; Sorting?: string; MaxResultCount?: number; SkipCount?: number; Filter?: string }) {
    return this._httpClient.get('/IM/FileManage/GetGroupFileInfos', params);
  }
  // 获取获取单聊文件
  GetC2CMsgFile(params: {
    FromAccount: string;
    ToAccount: string;
    Sorting?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Filter?: string;
  }) {
    return this._httpClient.get('/IM/FileManage/GetC2CMsgFile', params);
  }
  formatImAvatarUrl(impersonatorUserId, handler = 'image') {
    if (impersonatorUserId) {
      return `${
        CoConfigManager.getValue('serverUrl') ? CoConfigManager.getValue('downloadUrl') : 'http://192.168.1.6:8000'
      }?fileId=${impersonatorUserId}&handler=${handler}`;
    }
    return '';
  }
  isIE() {
    if (!!(window as any).ActiveXObject || 'ActiveXObject' in window) {
      return true;
    }
    return false;
  }
}
