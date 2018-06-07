import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {userNameAvailableValidator} from './user-name-available.validator';

@Directive({
  selector: '[tmUserNameAvailable]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UserNameAvailableDirective,
    multi: true
  }]
})
export class UserNameAvailableDirective implements AsyncValidator {

  constructor() {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return userNameAvailableValidator(control);
  }

}
