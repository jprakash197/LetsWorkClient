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
  }

  onLogout(event: any) {
    this.letsWorkService.setLogStatus(false);
    this.letsWorkService.setUser(null);
    localStorage.setItem('token', null);
    localStorage.setItem('role', null);
    localStorage.setItem('user', null);
  }

  onProfile(event: any) {
    const userName = localStorage.getItem('user');
    if (this.user && userName !== null) {
      if (this.user.role.toUpperCase() === 'ADMIN') {
        this.routeConfig.navigate(['/login/admin/' + userName]);
      } else {
        this.routeConfig.navigate(['/getUser/' + userName]);
      }
    }
  }

}
