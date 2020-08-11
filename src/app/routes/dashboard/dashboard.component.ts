import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PlatformNotificationService } from '@co/cds';

/**
 * 仪表盘
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(public platformNotificationService: PlatformNotificationService) {}
  ngOnInit() {}

  sendMessage() {
    this.platformNotificationService
      .sendMessage({
        targetUsers: [
          {
            tenantId: 1,
            userId: 1585,
          },
        ],
        message: 'zzzz',
        severity: 0,
      })
      .subscribe((res) => {});
  }
}
