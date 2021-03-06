import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

/**
 * 404 页
 */
@Component({
  selector: 'exception-404',
  template: ` <div type="404" style="min-height: 500px; height: 80%;"></div> `,
})
export class Exception404Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
