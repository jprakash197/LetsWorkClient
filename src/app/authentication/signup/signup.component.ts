import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  realname: string;
  referral: string;
  password: string;
  confirmpassword: string;
  email: string;
  user: User;
  data: User;

  constructor(private service: LetsWorkServiceService, private route: ActivatedRoute, private routeconfig: Router) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.password === this.confirmpassword) {
      this.user = new User(this.username, this.password, this.email, this.referral, this.realname);
      this.service.onSignUp(this.user).subscribe(data => {
        localStorage.setItem('user', this.username);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        this.routeconfig.navigate(['/']);
      },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            alert(error.error.message);
          }
        });
    } else {
      alert('Password and Password Confirmation does not match.');
    }
  }


}
