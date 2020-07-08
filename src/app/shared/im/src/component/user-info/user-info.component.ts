import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImService } from '../../service/im.service';
import { CustomerType } from '../../entity/CustomerType';

@Component({
  selector: 'lib-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less'],
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() userInfo: any;
  userDetail: any;
  customerInfo: any;
  customerType: any;
  legalInfo = false;
  contactsInfo: boolean;
  customerSourceInfo: boolean;
  constructor(private imTemplateService: ImService) {}

  ngOnInit() {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.imTemplateService.getUser(this.userInfo.userProfile.userID).subscribe((r: any) => {
      if (r) {
        this.userDetail = r.user;
        if (r.user) {
          this.imTemplateService.getCustomer(r.user.customerId).subscribe((res) => {
            this.customerInfo = res;
            if (this.customerInfo) {
              this.customerType = this.customerInfo.customerType ? CustomerType[this.customerInfo.customerType] : null;
            }
          });
        }
      }
    });
  }
  controlShowDetail(type) {
    switch (type) {
      case 'legal':
        this.legalInfo = !this.legalInfo;
        break;
      case 'contacts':
        this.contactsInfo = !this.contactsInfo;
        break;
      case 'customerSource':
        this.customerSourceInfo = !this.customerSourceInfo;
        break;
      default:
        break;
    }
  }
}
