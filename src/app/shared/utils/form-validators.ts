import { AbstractControl, ValidationErrors } from '@angular/forms';

const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class FormValidators {
  static email(control: AbstractControl): ValidationErrors|null {
    if (!control.value) {
      return null;
    }
    return EMAIL_REGEXP.test(control.value) ? null : {'email': true};
  }
}
