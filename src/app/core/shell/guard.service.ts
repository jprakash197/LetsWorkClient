import { Injectable } from '@angular/core';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private service: LetsWorkServiceService, private route: Router) { }

  canActivate(activeRouterSnap: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    } else {
      return false;
    }
  }
}
