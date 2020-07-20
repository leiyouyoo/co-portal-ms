import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { _HttpClient } from '@co/common';
// import { CSPExcelService } from '@co/cds';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private httpClient: _HttpClient) { }

  ngOnInit() {
    // var file = new File([], '12');
    // this.cSPExcelService
    //   .analysisExcel({
    //     file: file,
    //     url: '12312312312312321',
    //     apiTypes: 1,
    //     headers: [1, 2, 3, 4],
    //   })
    //   .subscribe(
    //     (res: any) => {
    //       //导入成功
    //       let list = JSON.parse(res);
    //     },
    //     (error) => {
    //       console.log('excel File Insert DB Error', error);
    //     },
    //   );
  }
}
