import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, ViewChild, TemplateRef } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { PlatformNotificationService } from '@co/cds';
import { differenceInWeeks } from 'date-fns';
import * as _ from 'lodash';
import { CoPageBase, CoConfigManager } from '@co/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { NzNotificationService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { ACLService } from '@co/acl';
import { MessageNotificationServices } from '../../../../service/mdc/message/messageNotification.services';

// enum BusinessType {
//   Quote = 0,
//   Booking = 1,
//   Shipment = 2,
//   Order = 3,
//   Product = 4,
//   Billing = 5,
//   Customer = 6,
//   RatesQuote = 7,
//   RatesBaseItem = 8,
// }

enum BusinessType {
  Quote = 'Quote',
  Booking = 'Booking',
  Shipment = 'Shipment',
  Order = 'Order',
  Product = 'Product',
  Billing = 'Billing',
  Customer = 'Customer',
  RatesQuote = 'RatesQuote',
  RatesTruck = 'RatesTruck',
  RatesBaseItem = 'RatesBaseItem',
}

/**
 * 菜单通知
 */
@Component({
  selector: 'default-layout-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutWidgetNotifyComponent extends CoPageBase {
  @ViewChild('notify', { static: false }) template?: TemplateRef<{}>;
  visible = false;
  public count: number;
  skipCount = 0;
  maxResultCount = 500;
  unreadCount: number;

  ds: any;
  data: any;
  messageList = [];
  uniqueId = -Math.abs(new Date().getTime());
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public notification: NzNotificationService,
    private transalte: TranslateService,
    private aCLService: ACLService,
    private platformNotificationService: PlatformNotificationService,
    private messageNotificationServices: MessageNotificationServices,
    injector: Injector,
  ) {
    super(injector);
  }

  coOnInit() {
    let encryptedAuthToken;
    try {
      encryptedAuthToken = JSON.parse(localStorage.getItem('_token')).token;
    } catch (e) {
      console.error('Cannot get token for SignalR');
    }

    if (encryptedAuthToken) {
      const signlarUrl = CoConfigManager.getValue('notifyUrl');
      // const signlarUrl = CoConfigManager.getValue('testUrl');
      let connection = new signalR.HubConnectionBuilder()
        // .withUrl(signlarUrl + '/signalr?enc_auth_token=' + encodeURIComponent(encryptedAuthToken), 1)
        .withUrl(
          signlarUrl +
            '/notificationhub?equipment_type=1&language=' +
            this.$i18n._default +
            '&enc_auth_token=' +
            encodeURIComponent(encryptedAuthToken),
        )
        .build();

      connection.on('getNotification', (data) => {
        this.notification
          .template(this.template!, {
            nzClass: 'notify',
            nzDuration: 3500,
            nzData: data,
          })
          .onClick.subscribe(() => {});
        this.unreadCount++;
        this.changeDetectorRef.detectChanges();
      });

      connection.start().then(() => {
        console.log('通知连接成功');
        // connection.invoke('register').then(function () {
        //   console.log('通知连接成功');
        // });
      });

      this.initData();
    }
  }

  initData() {
    this.messageNotificationServices
      .getAllPagedAsync({
        SkipCount: this.skipCount * this.maxResultCount,
        MaxResultCount: this.maxResultCount,
      })
      .subscribe((res) => {
        this.unreadCount = res.noReadCount;
        this.messageList = res.items;
        // this.ds = new NotificationDataSource(this.platformNotificationService, res.totalCount);
        this.changeDetectorRef.detectChanges();
      });
  }
  // initData() {
  //   this.platformNotificationService
  //     .getUserNotifications({
  //       skipCount: this.skipCount * this.maxResultCount,
  //       maxResultCount: this.maxResultCount,
  //     })
  //     .subscribe((res) => {
  //       this.unreadCount = res.unreadCount;
  //       this.ds = new NotificationDataSource(this.platformNotificationService, res.totalCount);
  //       this.changeDetectorRef.detectChanges();
  //     });
  // }

  clickMe(): void {
    this.visible = false;
  }

  change(show: boolean): void {
    if (show) {
      this.ds = null;
      this.initData();
    }
  }

  setAsAllRead() {
    this.messageNotificationServices.setAllIsReadAsync({}).subscribe(() => {
      this.ds = null;
      this.changeDetectorRef.detectChanges();
      this.initData();
    });
    // this.platformNotificationService.setAllNotificationsAsRead({}).subscribe(() => {
    //   this.ds = null;
    //   this.changeDetectorRef.detectChanges();
    //   this.initData();
    // });
  }

  setNotificationAsRead(item) {
    item.isRead = true;
    this.messageNotificationServices
      .setIsReadAsync({
        Id: item.id,
      })
      .subscribe(
        () => {
          this.changeDetectorRef.detectChanges();
        },
        (err) => {
          item.loading = false;
        },
      );
    // item.state = 1;
    // this.platformNotificationService
    //   .setNotificationAsRead({
    //     id: item.id,
    //   })
    //   .subscribe(
    //     () => {
    //       this.changeDetectorRef.detectChanges();
    //     },
    //     (err) => {
    //       item.loading = false;
    //     },
    //   );
  }

  navigate(item) {
    debugger;
    //处理通知类型数据
    const messageSubscriptionStr = item.messageSubscriptionStr.split('.');
    const messageType = messageSubscriptionStr[0];
    this.setNotificationAsRead(item);
    switch (messageType) {
      case BusinessType.Quote:
        this.$navigate(['/crm/quotes/quotesDetail/', item.businessId], {
          queryParams: {
            _title: `${item.dataLocalizationText}`,
          },
        });
        break;
      case BusinessType.Booking:
        this.$navigate(['/crm/bookings/bookingDetail/', item.businessId], {
          queryParams: {
            _title: `${item.dataLocalizationText}`,
          },
        });
        break;
      case BusinessType.Customer:
        this.$navigate(['/crm/customers/customerdetails/', item.businessId], {
          queryParams: {
            _title: `${item.dataLocalizationText}`,
          },
        });
        break;
      case BusinessType.RatesQuote:
        if (item.extraData.RateType == 1) {
          //海运通知
          if (!this.aCLService.can(['j:商务员'])) {
            this.$navigate(['/crm/inquiries/oceanlist/' + item.businessId], {
              queryParams: {
                _title: `${item.dataLocalizationText}`,
                type: BusinessType.RatesQuote,
              },
            });
          } else {
            this.$navigate(['/frm/enquiries'], {
              queryParams: {
                _title: `${item.dataLocalizationText}`,
                id: item.businessId,
              },
            });
          }
        } else if (item.extraData.RateType == 3) {
          //拖车通知
          if (!this.aCLService.can(['j:商务员'])) {
            this.$navigate(['/crm/inquiries/tracklist/' + item.businessId], {
              queryParams: {
                _title: `${item.dataLocalizationText}`,
              },
            });
          } else {
            this.$navigate(['/frm/enquiries/'], {
              queryParams: {
                _title: `${item.dataLocalizationText}`,
                id: item.businessId,
                message: 'quote',
              },
            });
          }
        }
        break;

      case BusinessType.RatesBaseItem:
        if (!this.aCLService.can(['j:商务员'])) {
          this.$navigate(['/frm/oceans/edit/' + item.businessId], {
            queryParams: {
              _title: `${item.dataLocalizationText}`,
              type: BusinessType.RatesBaseItem,
            },
          });
          // this.$navigate(['/crm/inquiries/oceanlist'], {
          //   queryParams: {
          //     _title: `${item.dataLocalizationText}`,
          //     id: item.businessId,
          //     type: BusinessType.RatesBaseItem,
          //   },
          // });
        }
        break;
      case BusinessType.RatesTruck:
        break;
      default:
    }
  }
}

class NotificationDataSource extends DataSource<any> {
  private length = this.count;
  private pageSize = 10;
  private cachedData = Array.from<any>({ length: this.length });
  private fetchedPages = new Set<number>();
  private dataStream = new BehaviorSubject<any[]>(this.cachedData);
  private subscription = new Subscription();

  constructor(private platformNotificationService: PlatformNotificationService, private count: any) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const startPage = this.getPageForIndex(range.start);
        const endPage = this.getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          this.fetchPage(i);
        }
      }),
    );
    return this.dataStream;
  }

  disconnect(): void {
    this.subscription.unsubscribe();
  }

  private getPageForIndex(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  private fetchPage(page: number): void {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);

    this.platformNotificationService
      .getUserNotifications({
        skipCount: page * this.pageSize,
        maxResultCount: this.pageSize,
      })
      .subscribe((res) => {
        this.cachedData.splice(page * this.pageSize, this.pageSize, ...res.items);
        this.dataStream.next(this.cachedData);
      });
  }
}
