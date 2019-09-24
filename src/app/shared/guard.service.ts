import { Injectable } from '@angular/core';
import { LetsWorkServiceService } from './lets-work-service.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  currentUser: User;
  constructor(private service: LetsWorkServiceService, private route: Router) { }

  canActivate(activeRouterSnap: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    this.currentUser = this.service.currentUser.getValue();
    const userNameFromRoute = activeRouterSnap.paramMap.get('id');
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    console.log(`route url: ${activeRouterSnap.url}`);

    if (token !== null) {
      if (role !== null && this.currentUser.role !== null
        && role === this.currentUser.role
        && userNameFromRoute === this.currentUser.username
        && token === this.currentUser.token) {
        this.service.setLogStatus(true);
        return true;
      } else {
        this.service.setUser(null);
        this.service.setLogStatus(false);
        return false;
      }
    } else {
      this.service.setUser(null);
      this.service.setLogStatus(false);
      return false;
    }
  }
}
