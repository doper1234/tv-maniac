import {AbstractControl, ValidationErrors} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function userNameAvailableValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const usersPromise = fetch(url).then(res => res.json());
  return from(usersPromise)
    .pipe(
      map(users => users.some(user => user.username === control.value)),
      map(userExists => userExists ? {userNameAvailable: true} : null)
    );
}
