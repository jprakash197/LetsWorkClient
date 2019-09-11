import { Component, OnInit, TemplateRef } from '@angular/core';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../shared/user';

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
          if (role === 'USER') {
            this.routeconfig.navigate(['/getUser/', this.username]);
          } else {
            this.routeconfig.navigate(['/admin/', this.username]);
          }
        }
      });
  }

}
