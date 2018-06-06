import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function startsWithLetterValidator(upper?): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const rule = upper === undefined
      ? /^[a-zA-Z].*/ : upper
        ? /^[A-Z].*/
        : /^[a-z].*/;
    return rule.test(control.value)
      ? null
      : {
        startsWithLetter: control.value[0]
      };
  };
}
