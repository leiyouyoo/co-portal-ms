import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

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
  constructor() {}
  ngOnInit() {}
}
