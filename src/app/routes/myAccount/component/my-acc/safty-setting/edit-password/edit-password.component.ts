import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { TranslateService } from '@ngx-translate/core';
import { _HttpClient } from '@co/common';
@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.less'],
})
export class EditPasswordComponent implements OnInit {
  isVisible: boolean = false;
  passValidateForm: FormGroup;
  passwordOldVisible = false;
  password1Visible = false;
  password2Visible = false;

  submitForm(): void {
    for (const i in this.passValidateForm.controls) {
      this.passValidateForm.controls[i].markAsDirty();
      this.passValidateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private http: _HttpClient, private message: NzMessageService, public translate: TranslateService) { }

  ngOnInit(): void {
    this.passValidateForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPasswordC: [null, [this.confirmValidator]],
    });
  }

  handleCancel() {
    this.isVisible = false;
    this.passValidateForm.reset();
    this.ngOnInit();
  }

  handleOk() {
    this.submitForm();

    if (
      this.passValidateForm.get('oldPassword').value &&
      this.passValidateForm.get('oldPassword').value == this.passValidateForm.get('newPasswordC').value
    ) {
      this.message.warning(this.translate.instant('The new password cannot be the same as the old password,Please input again'));
      return;
    }

    if (this.passValidateForm.valid) {
      this.editPassword(this.passValidateForm.value).subscribe((res) => {
        this.isVisible = false;
        this.message.success(this.translate.instant('Modify successfully, Automatically logged in'));
        this.passValidateForm.reset();
        // this.tokenService.clear();
        // window.location.href = '/#/login';
      });
    }
  }

  showModal() {
    this.isVisible = true;
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.passValidateForm.controls.newPassword.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  pipePass(parame, e) {
    if (parame == 'pass1') {
      this.passValidateForm.get('newPassword').setValue(e.target.value.replace(/[^\w\.\/]/gi, ''));
    } else {
      this.passValidateForm.get('newPasswordC').setValue(e.target.value.replace(/[^\w\.\/]/gi, ''));
    }
  }

  editPassword(parame) {
    const url = '/SSO/User/ResetUserPasswordByOld';
    return this.http.post(url, parame);
  }
}
