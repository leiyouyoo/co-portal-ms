import { Component, OnInit, ViewChild } from '@angular/core';
import { loginMainComponent } from './login-main/login-main.component';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  @ViewChild(loginMainComponent)
  private loginMainComponent: loginMainComponent;
  panel: number = 1; // 1 登录， 2 忘记密码

  constructor() {}

  ngOnInit() {}
}
