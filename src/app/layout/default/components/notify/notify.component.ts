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

enum BusinessType {
  Quote = 0,
  Booking = 1,
  Shipment = 2,
  Order = 3,
  Product = 4,
  Billing = 5,
  Customer = 6,
  RatesQuote = 7,
  RatesBaseItem = 8,
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
  maxResultCount = 10;
  unreadCount: number;

  ds: any;
  data: any;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public notification: NzNotificationService,
    private transalte: TranslateService,
    private aCLService: ACLService,
    private platformNotificationService: PlatformNotificationService,
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
      const signlarUrl = CoConfigManager.getValue('signalRUrl');
      let connection = new signalR.HubConnectionBuilder()
        .withUrl(signlarUrl + '/signalr?enc_auth_token=' + encodeURIComponent(encryptedAuthToken), 1)
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
        connection.invoke('register').then(function () {
          console.log('通知连接成功');
        });
      });

      this.initData();
    }
  }

  initData() {
    this.platformNotificationService
      .getUserNotifications({
        skipCount: this.skipCount * this.maxResultCount,
        maxResultCount: this.maxResultCount,
      })
      .subscribe((res) => {
        this.unreadCount = res.unreadCount;
        this.ds = new NotificationDataSource(this.platformNotificationService, res.totalCount);
        this.changeDetectorRef.detectChanges();
      });
  }

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
    this.platformNotificationService.setAllNotificationsAsRead({}).subscribe(() => {
      this.ds = null;
      this.changeDetectorRef.detectChanges();
      this.initData();
    });
  }

  setNotificationAsRead(item) {
    item.state = 1;
    this.platformNotificationService
      .setNotificationAsRead({
        id: item.id,
      })
      .subscribe(
        () => {
          this.changeDetectorRef.detectChanges();
        },
        (err) => {
          item.loading = false;
        },
      );
  }

  navigate(item) {
    this.setNotificationAsRead(item);
    switch (item.notification.data.properties.businessType) {
      case BusinessType.Quote:
        this.$navigate(['/crm/quotes/quotesDetail/', item.notification.data.properties.id], {
          queryParams: {
            _title: `${item.notification.data.message}`,
          },
        });
        break;
      case BusinessType.Booking:
        this.$navigate(['/crm/bookings/bookingDetail/', item.notification.data.properties.id], {
          queryParams: {
            _title: `${item.notification.data.message}`,
          },
        });
        break;
      case BusinessType.Customer:
        this.$navigate(['/crm/customers/customerdetails/', item.notification.data.properties.id], {
          queryParams: {
            _title: `${item.notification.data.message}`,
          },
        });
        break;
      case BusinessType.RatesQuote:
        if (!this.aCLService.can(['j:商务员'])) return;
        this.$navigate(['/frm/enquiries/'], {
          queryParams: {
            _title: `${item.notification.data.message}`,
            id: item.notification.data.properties.id,
            type: item.notification.data.properties.RateType,
            message: 'quote',
          },
        });
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
