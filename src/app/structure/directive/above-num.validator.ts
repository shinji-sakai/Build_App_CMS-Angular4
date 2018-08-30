import { ValidatorFn, AbstractControl } from '@angular/forms';

export function AboveNumValidator(num: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    return control.value > num ? null : {'aboveNum': {value: control.value}};
  }
}