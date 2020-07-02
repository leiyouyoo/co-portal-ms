import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { _HttpClient } from '@co/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private httpClient: _HttpClient) {}

  ngOnInit() {}
}
