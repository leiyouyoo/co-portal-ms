import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ImService } from '../../service/im.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
@Component({
  selector: 'lib-im-contacts',
  templateUrl: './im-contacts.component.html',
  styleUrls: ['./im-contacts.component.less'],
})
export class ImContactsComponent implements OnInit {
  contactList: Array<any> = []; // 本公司人员列表
  partnerContactsList: Array<any> = []; // 合作伙伴联系人
  searchContactText: any; //通讯录的搜索

  @Output() imContactsClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() fromType = 'csp';
  @Input() fromAddMember = false;
  visible: boolean;
  radioList: Array<any> = [];
  currentRadio = 'service';
  serviceList: Array<any> = []; // 服务商联系人

  myCustomerList: Array<any> = []; // 我的客户
  currentShowLists: Array<any> = [];
  constructor(private imTemplateService: ImService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.fromType === 'csp') {
      this.radioList = [
        { name: '服务商', value: 'service' },
        { name: '本公司', value: 'company' },
        { name: '合作伙伴', value: 'partner' },
      ];
    } else if (this.fromType === 'frm' || this.fromType === 'crm') {
      this.currentRadio = 'company';
      this.radioList = [
        { name: '本公司', value: 'company' },
        { name: '我的客户', value: 'myCustomer' },
      ];
    }
    this.getContactList();
  }
  // 获取通讯录数据
  getContactList() {
    if (this.fromType === 'csp') {
      // CSP服务商
      this.imTemplateService.GetServiceUsers().subscribe((r: any) => {
        this.serviceList = r.items;
      });
      //  CSP合作伙伴
      this.imTemplateService.getPartnerContacts().subscribe((r: any) => {
        this.partnerContactsList = r.items;
      });
      //  CSP所有联系人
      this.imTemplateService.getCustomerContacts().subscribe((r: any) => {
        this.contactList = r.items;
      });
    }

    // CRM FRM本公司联系人
    if (this.fromType != 'csp') {
      this.imTemplateService.getUsersAndOrganizationUnit().subscribe((r: any) => {
        this.contactList = r.items;
        this.currentShowLists = this.contactList;
      });
      // CRM FRM我的客户
      this.imTemplateService.getSaleCustomerContacts().subscribe((r: any) => {
        this.myCustomerList = r.items;
      });
    }
  }
  searchContactResultList: Array<any> = []; // CSP所有联系人搜索结果
  serviceContactResultList: Array<any> = []; // CSP服务商搜索结果
  partnerContactResultList: Array<any> = []; // CSP合作伙伴搜索结果
  myCustomerContactResultList: Array<any> = []; // CSP合作伙伴搜索结果
  resetList() {
    this.searchContactResultList = [];
    this.serviceContactResultList = [];
    this.partnerContactResultList = [];
    this.myCustomerContactResultList = [];
  }

  /**
   * @description 联系人搜索
   * @author youlei
   * @param {*} [key] 可能为父祖件传过来的值
   * @returns
   * @memberof ImContactsComponent
   */
  searchContact(key?): Array<any> {
    let searchKey = '';
    if (key) {
      searchKey = key.toLowerCase();
    } else {
      searchKey = this.searchContactText.toLowerCase();
    }
    if (!searchKey) {
      this.visible = false;
      this.resetList();
      return [];
    }
    this.resetList();
    this.visible = true;
    const subStrForSearch = (str) => {
      return str.substr(str.toLowerCase().indexOf(searchKey), searchKey.length);
    };
    const filterPersonWithName = (element) => {
      if (!key) {
        return (
          (element.name && element.name.toLowerCase().indexOf(searchKey) != -1) ||
          (element.surname && element.surname.toLowerCase().indexOf(searchKey) != -1) ||
          (element.cName && element.cName.toLowerCase().indexOf(searchKey) != -1)
        );
      } else {
        if (element.name && element.name.toLowerCase().indexOf(searchKey) != -1) {
          element.name = this.sanitizer.bypassSecurityTrustHtml(
            element.name.replace(subStrForSearch(element.name), `<span style ='color: #1890ff;'>${subStrForSearch(element.name)}</span>`),
          );
          return true;
        }
        if (element.surname && element.surname.toLowerCase().indexOf(searchKey) != -1) {
          element.surname = this.sanitizer.bypassSecurityTrustHtml(
            element.surname.replace(
              subStrForSearch(element.surname),
              `<span style ='color: #1890ff;'>${subStrForSearch(element.surname)}</span>`,
            ),
          );
          return true;
        }
        if (element.cName && element.cName.toLowerCase().indexOf(searchKey) != -1) {
          element.cName = this.sanitizer.bypassSecurityTrustHtml(
            '(' +
              element.cName.replace(
                subStrForSearch(element.cName),
                `<span style ='color: #1890ff;'>${subStrForSearch(element.cName)}</span>`,
              ) +
              ')',
          );
          return true;
        }
        return false;
      }
    };
    if (this.fromType === 'csp') {
      _.cloneDeep(this.serviceList).forEach((e) => {
        let list = e.users.filter((element) => {
          return filterPersonWithName(element);
        });
        this.serviceContactResultList = this.serviceContactResultList.concat(list);
      });

      _.cloneDeep(this.partnerContactsList).forEach((e) => {
        let list = e.contacts.filter((element) => {
          return filterPersonWithName(element);
        });
        this.partnerContactResultList = this.partnerContactResultList.concat(list);
      });

      this.searchContactResultList = _.cloneDeep(this.contactList).filter((element) => {
        return filterPersonWithName(element);
      });
    } else {
      _.cloneDeep(this.myCustomerList).forEach((e) => {
        let list = e.contacts.filter((element) => {
          return filterPersonWithName(element);
        });
        this.myCustomerContactResultList = this.myCustomerContactResultList.concat(list);
      });
      _.cloneDeep(this.contactList).forEach((e) => {
        let list = e.contacts.filter((element) => {
          return filterPersonWithName(element);
        });
        this.searchContactResultList = this.searchContactResultList.concat(list);
      });
    }
    return [
      ...this.serviceContactResultList,
      ...this.partnerContactResultList,
      ...this.searchContactResultList,
      ...this.myCustomerContactResultList,
    ];
  }
  onRadioChange(event) {
    if (event == 'company') {
      this.currentShowLists = this.contactList;
    } else if (event === 'partner') {
      this.currentShowLists = this.partnerContactsList;
    } else if (event === 'myCustomer') {
      this.currentShowLists = this.myCustomerList;
    }
  }

  /**
   * @param  是否为通讯录点击的
   * @memberof ImTemplateComponent
   */
  chatWithPercon(personInfo) {
    this.imContactsClick.emit({ ...personInfo });
  }
  calculateTotalChecked(): Array<any> {
    const data = (arr) => {
      if (!arr) {
        return [];
      }
      const ar: Array<any> = [];
      arr.forEach((element) => {
        element.users &&
          element.users.forEach((e) => {
            ar.push(e);
          });
        element.contacts &&
          element.contacts.forEach((e) => {
            ar.push(e);
          });
      });
      return ar;
    };
    return [
      ...this.searchContactResultList,
      ...this.myCustomerContactResultList,
      ...this.partnerContactResultList,
      ...this.serviceContactResultList,
      ...data(this.serviceList),
      ...this.contactList,
      ...data(this.partnerContactsList),
      ...this.myCustomerList,
    ].filter((e) => {
      return e.checked && e.isActive;
    });
  }
  formatImAvatarUrl(fileId) {
    return this.imTemplateService.formatImAvatarUrl(fileId);
  }
}
