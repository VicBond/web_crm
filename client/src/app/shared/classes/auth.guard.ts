import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

  }
}
