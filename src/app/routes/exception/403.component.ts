import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

/**
 * 403 页
 */
@Component({
  selector: 'exception-403',
  template: ` <div type="403" style="min-height: 500px; height: 80%;"></div> `,
})
export class Exception403Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
