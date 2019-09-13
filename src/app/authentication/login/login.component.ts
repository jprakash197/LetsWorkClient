import { Component, OnInit, TemplateRef } from '@angular/core';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private service: LetsWorkServiceService,
    private route: ActivatedRoute, private routeconfig: Router) { }

  ngOnInit() {
  }

  onSelect() {
    this.service.OnLogin(this.username, this.password).subscribe(
      user => {

        if (user) {
          const u: User = user;
          const token: string = '' + u.token.toString();
          const role: string = '' + u.role.toString();
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          this.service.setUser(u);

          if (role === 'USER') {
            this.routeconfig.navigate(['/getUser/', this.username]);
          } else {
            this.routeconfig.navigate(['/login/admin/', this.username]);
          }
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 404) {
            alert('Username could not be found');
          } else {
            alert('Incorrect Password');
          }
        }
      }
    );
  }

}
