import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { User } from '../../shared/user';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  referral: string;
  password: string;
  email: string;
  user: User;
  data: User;

  constructor(private service: LetsWorkServiceService) { }

  ngOnInit() {
  }

  onSelect() {
    this.user = new User(this.username, this.password, this.email, this.referral);
    console.log(this.user);
    this.service.onSignUp(this.user).subscribe(data => this.data = data);
  }


}
