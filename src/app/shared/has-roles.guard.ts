import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ShowDetailsData} from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class HasRolesGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
    const {roles} = route.data as ShowDetailsData;
    const hasRole = roles.includes(prompt('Who are you'));
    if (!hasRole) {
      alert(`You don't have permission to view this page!`);
      this.router.navigateByUrl('/');
    }
    return hasRole;
  }
}
