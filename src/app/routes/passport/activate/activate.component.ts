import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@co/common';

@Component({
  selector: 'portal-app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.less'],
})
export class ActivateComponent implements OnInit {
  formGroup: FormGroup;
  paramForReset: any = { resetCode: '', userId: '' };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: _HttpClient,
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        password: ['', [this.passwordFormat]],
        password2: ['', [this.confirmValidator]],
      },
      { updateOn: 'blur' },
    );

    console.log(this.activatedRoute.snapshot.queryParams);
  }

  submitForm(): void {
    for (const i in this.formGroup.controls) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
  }

  resetPassword() {
    if (!this.formGroup.valid) {
      return;
    }

    this.httpClient
      .post('/SSO/Account/ActivateEmail', {
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

  passwordFormat = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    }

    const pwdReg = /^(?![^A-z]+$)(?!\D+$)[A-z\d]{8}$/;
    const valid = pwdReg.test(control.value);
    if (!valid) {
      return { error: true, errorFormat: true };
    }
    return {};
  };

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.formGroup.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
