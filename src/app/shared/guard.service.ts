import { Injectable } from '@angular/core';
import { LetsWorkServiceService } from './lets-work-service.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private service: LetsWorkServiceService, private route: Router) { }

  canActivate(activeRouterSnap: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null && localStorage.getItem('user') === activeRouterSnap.paramMap.get('id')) {
      if (localStorage.getItem('role') === 'USER') {
        this.service.setLogStatus(true);
        return true;
      } else {
        this.service.setLogStatus(false);
        return false;
      }
    } else {
      this.service.setLogStatus(false);
      return false;
    }
  }
}