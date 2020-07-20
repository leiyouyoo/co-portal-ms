import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@co/common';

@Component({
  selector: 'portal-app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.less'],
})
export class ResetPasswordComponent implements OnInit {
  formGroup: FormGroup;
  paramForReset: any = { resetCode: '', userId: '' };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: _HttpClient,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required]],
      password2: ['', [this.confirmValidator]],
    });

    console.log(this.activatedRoute.snapshot.queryParams);
  }

  resetPassword() {
    this.httpClient
      .post('/SSO/Account/ResetPassword', {
        c: this.activatedRoute.snapshot.queryParams.c,
        password: this.formGroup.controls.password.value,
      })
      .subscribe((data) => {
        this.router.navigate(['/passport/login']);
      });
  }

  log(e) {
    console.log(e);
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.formGroup.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
