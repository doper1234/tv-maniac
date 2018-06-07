import {AbstractControl, ValidationErrors} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {map, debounceTime} from 'rxjs/operators';

export function userNameAvailableValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const usersPromise = fetch(url).then(res => res.json());
  return from(usersPromise)
    .pipe(
      debounceTime(3000),
      map(users => users.some(user => {
        console.log(`User: ${user.username} value: ${control.value}`);
        return user.username === control.value;
      })),
      map(userExists => userExists ? {userNameAvailable: true} : null)
    );
}
