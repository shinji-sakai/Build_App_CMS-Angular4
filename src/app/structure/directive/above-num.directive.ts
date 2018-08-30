import { ValidatorFn, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appAboveNum]',
  providers: [{provide: NG_VALIDATORS, useExisting: AboveNumValidatorDirective, multi: true}]
})
export class AboveNumValidatorDirective implements Validator {
  @Input('appAboveNum') num: number;
 
  validate(control: AbstractControl): {[key: string]: any} {
    return control.value > this.num ? null : {'AboveNum': {value: control.value}};
  }
}