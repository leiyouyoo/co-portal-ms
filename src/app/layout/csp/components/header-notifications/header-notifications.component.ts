import { Component, OnInit, ChangeDetectorRef, NgZone, ViewEncapsulation } from '@angular/core';
// import { NoticeIconList } from '@delon/abc';
// import { Router } from '@angular/router';
// import { UserNotificationHelper } from 'src/app/module/notifications/UserNotificationHelper';
// import {
//   NotificationService,
//   UserNotification,
//   GetUserNotificationsInput,
// } from 'projects/cityocean/notification-library/src/public-api';
// import { UrlHelper } from '@shared/helpers/UrlHelper';
// import * as _ from 'lodash';
// import { differenceInWeeks } from 'date-fns';
// import { BusinessType } from '@cityocean/basicdata-library';
// import { I18nMessageService } from '@cityocean/i18n-library';

@Component({
  selector: 'header-notifications',
  templateUrl: './header-notifications.component.html',
  styleUrls: ['./header-notifications.component.less'],
})
export class HeaderNotificationsComponent implements OnInit {
  // loading = false;
  //
  // objectKeys = Object.keys;
  // notifications: any;
  // unreadNotificationCount = 0;
  // businessType = BusinessType;
  // constructor(
  //   private msg: I18nMessageService,
  //   private router: Router,
  //   private cdr: ChangeDetectorRef,
  //   private _notificationService: NotificationService,
  //   private _userNotificationHelper: UserNotificationHelper,
  //   public _zone: NgZone,
  // ) {}
  //
  ngOnInit(): void {
    // this.loadNotifications();
    // this.registerToEvents();
  }
  //
  // visibleChange($event: boolean) {
  //   if ($event) {
  //     this.notListPage = 1;
  //     this.loadNotifications();
  //   }
  // }
  //
  // toNotificationsPage() {
  //   this.router.navigateByUrl(`/notifications`);
  // }
  //
  // select(e) {
  //   this.setNotificationAsRead(e);
  //   switch (e.data.properties.businessType) {
  //     case BusinessType.Quote:
  //       this.router.navigate(['/quotes/QuotesDetail'], { queryParams: { quotesId: e.data.properties.id } });
  //       break;
  //     case BusinessType.Booking:
  //       this.router.navigate(['/bookings/BookingView'], { queryParams: { BookingId: e.data.properties.id } });
  //       break;
  //     case BusinessType.Shipment:
  //       this.router.navigate(['/shipments/detail', e.data.properties.id]);
  //       break;
  //     case BusinessType.Order:
  //       this.router.navigate(['/orders/orderDetail-procurer', e.data.properties.id]);
  //       break;
  //     case BusinessType.Product:
  //       this.router.navigate(['/products/productDetail', e.data.properties.id]);
  //       break;
  //     default:
  //   }
  // }
  //
  // notListTotal: number = 0; // 通知列表总数量
  // notHasNextPage: boolean = false;
  // loadNotifications(maxResultCount = 1): void {
  //   if (UrlHelper.isInstallUrl(location.href)) {
  //     return;
  //   }
  //
  //   if (this.loading) {
  //     return;
  //   }
  //   if (maxResultCount <= 1) {
  //     this.loading = true;
  //   }
  //
  //   let input = new GetUserNotificationsInput();
  //
  //   input.maxResultCount = maxResultCount * 10;
  //   input.skipCount = 0;
  //
  //   this._notificationService.getUserNotifications(input).subscribe((response: any) => {
  //     let result = response;
  //     if (response.items && response.totalCount > response.items.length) {
  //       this.notHasNextPage = true;
  //     } else {
  //       this.notHasNextPage = false;
  //     }
  //     this.notListTotal = response?.totalCount;
  //     this.unreadNotificationCount = result.unreadCount;
  //     let arr = [];
  //     _.forEach(result.items, (item: UserNotification) => {
  //       let formated = this._userNotificationHelper.toNoticeIconList(this._userNotificationHelper.format(item as any));
  //       arr.push(formated);
  //     });
  //     if (maxResultCount <= 1) {
  //       this.loading = false;
  //     }
  //     let nowtime = new Date();
  //     this.notifications = _.groupBy(arr, (item) => {
  //       let serveTime = new Date(item.datetime);
  //       // tslint:disable-next-line: no-unused-expression
  //       return differenceInWeeks(nowtime, serveTime);
  //     });
  //     this.cdr.detectChanges();
  //   });
  // }
  //
  // registerToEvents() {
  //   let self = this;
  //   abp.event.on('abp.notifications.received', (userNotification) => {
  //     self._zone.run(() => {
  //       // onNotificationReceived(userNotification);
  //       self._userNotificationHelper.show(userNotification);
  //       self.unreadNotificationCount++;
  //       // self.loadNotifications(); // 计数有问题
  //     });
  //   });
  //
  //   function onNotificationsRefresh() {
  //     self.loadNotifications();
  //   }
  //
  //   abp.event.on('app.notifications.refresh', () => {
  //     self._zone.run(() => {
  //       onNotificationsRefresh();
  //     });
  //   });
  //
  //   function onNotificationsRead(userNotificationId) {
  //     // tslint:disable-next-line: forin
  //     for (let key in self.notifications) {
  //       for (let i = 0; i < self.notifications[key].length; i++) {
  //         if (self.notifications[key][i].userNotificationId === userNotificationId) {
  //           if (self.notifications[key][i].state !== 'READ') {
  //             self.notifications[key][i].state = 'READ';
  //             self.unreadNotificationCount -= 1;
  //           }
  //         }
  //       }
  //     }
  //     return;
  //   }
  //
  //   abp.event.on('app.notifications.read', (userNotificationId) => {
  //     self._zone.run(() => {
  //       onNotificationsRead(userNotificationId);
  //     });
  //   });
  // }
  //
  // setAllNotificationsAsRead(): void {
  //   this._userNotificationHelper.setAllAsRead();
  // }
  //
  // setNotificationAsRead(userNotification: NoticeIconList): void {
  //   this._userNotificationHelper.setAsRead(userNotification.userNotificationId);
  //   userNotification.read = true;
  // }
  //
  // notListPage: number = 1;
  // onScrollChange(e) {
  //   if (e.scrollTop + e.clientHeight == e.scrollHeight) {
  //     this.notListPage += 1;
  //     this.loadNotifications(this.notListPage);
  //   }
  // }
}
