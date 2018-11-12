import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenName ? this.forbiddenNameValidator(this.forbiddenName)(control) : null;
  }

  forbiddenNameValidator(name: string) {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (control.value && control.value.indexOf(name) !== -1)
        return {'forbiddenName': {value: control.value}};
      return null;
    };
  }

}
