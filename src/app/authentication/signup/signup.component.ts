import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

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

  constructor(private service: LetsWorkServiceService) { }

  ngOnInit() {
  }

  onSelect() {
    if (this.password === this.confirmpassword) {
      this.user = new User(this.username, this.password, this.email, this.referral, this.realname);
      console.log(this.user);
      this.service.onSignUp(this.user).subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
      });
    } else {
      alert('Password and Password Confirmation does not match.');
    }
  }


}
