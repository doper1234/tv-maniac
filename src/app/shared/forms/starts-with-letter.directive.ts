import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {startsWithLetterValidator} from './starts-with-letter.validator';

@Directive({
  selector: '[tmStartsWithLetter]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StartsWithLetterDirective,
    // use multi if we want other directives to be usable too
    multi: true
  }]
})
export class StartsWithLetterDirective implements Validator {
// noinspection TsLint
@Input('tmStartsWithLetter') upper = false;
  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return startsWithLetterValidator(this.upper)(control);
  }

}
