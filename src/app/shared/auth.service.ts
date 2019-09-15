import { Injectable } from '@angular/core';
import { LetsWorkServiceService } from './lets-work-service.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  currentUser: User;

  constructor(private service: LetsWorkServiceService, private route: Router) { }

  canActivate(activeRouterSnap: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): boolean {
    this.currentUser = this.service.currentUser.getValue();

    if (localStorage.getItem('token') != null) {
      const localToken = localStorage.getItem('token');
      if (this.currentUser && localStorage.getItem('token') === this.currentUser.token && localStorage.getItem('role') === 'ADMIN') {
        console.log(`user token: ${this.currentUser.token}\nlocalStorage token: ${localToken}`);
        this.service.setLogStatus(true);
        return true;
      } else {
        this.service.setUser(null);
        this.service.setLogStatus(false);
      }
    } else {
      this.service.setUser(null);
      this.service.setLogStatus(false);
      return false;
    }
  }
}