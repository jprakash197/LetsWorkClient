import { Component, OnInit } from '@angular/core';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  user: User = null;

  constructor(private letsWorkService: LetsWorkServiceService, private routeConfig: Router) { }

  ngOnInit() {
    this.letsWorkService.getLogStatus().subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.letsWorkService.getUser().subscribe(user => this.user = user);
  }

  onLogin(event: any) {
    this.letsWorkService.setLogStatus(true);
  }

  onLogout(event: any) {
    this.letsWorkService.setLogStatus(false);
    if (this.user) {
      this.letsWorkService.setUser(null);
    }
    localStorage.setItem('token', null);
    localStorage.setItem('role', null);
  }

  onProfile(event: any) {
    if (this.user) {
      if (this.user.role.toUpperCase() === 'ADMIN') {
        this.routeConfig.navigate(['/login/admin/' + this.user.username]);
      } else {
        this.routeConfig.navigate(['/getUser/' + this.user.username]);
      }
    }
  }

}
