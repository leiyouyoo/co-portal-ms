import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@co/common';

@Component({
  selector: 'portal-app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
})
export class ForgotPasswordComponent implements OnInit {
  @Output() back = new EventEmitter<null>();
  email = '';
  formCheck: boolean = false;

  constructor(private httpClient: _HttpClient, private msg: NzMessageService) {}

  ngOnInit() {}

  backToSignIn() {
    this.back.emit();
  }

  requestLink() {
    if (!this.email) {
      this.formCheck = true;
      return;
    }
    this.formCheck = false;
    this.httpClient.post('/SSO/Account/SendPasswordResetCode', this.email).subscribe((data) => {
      this.msg.success('Email sent');
    });
  }
}
