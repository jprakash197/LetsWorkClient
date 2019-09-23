import { Component, OnInit, TemplateRef } from '@angular/core';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/user';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  referral: string;
  referred: string;
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private service: LetsWorkServiceService,
    private routeconfig: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onSelect() {
    this.service.OnLogin(this.username, this.password).subscribe(
      user => {
        if (user) {
          const u: User = user;
          localStorage.setItem('user', this.username);
          const token: string = '' + u.token.toString();
          const role: string = '' + u.role.toString();
          u.token = token;
          u.role = role;
          this.service.setUser(user);
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          this.service.setLogStatus(true);
          // this.routeconfig.navigate(['/']);
          this.routeconfig.navigateByUrl(this.returnUrl);
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          alert(error.error.message);
        }
      }
    );
  }

  onSignUp() {
    this.service.setLogStatus(false);
  }
}
