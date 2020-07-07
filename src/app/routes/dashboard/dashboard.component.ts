import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { _HttpClient } from '@co/common';
import { CurrencyService } from '@co/cds';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private httpClient: _HttpClient, public currencySevice: CurrencyService) {}

  ngOnInit() {
    debugger;
    this.currencySevice.getAll({}).subscribe((c) => {
      debugger;
    });
  }
}
