import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
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
  public modalRef: BsModalRef;
  email: string;
  referral: string;
  referred: string;
  constructor(
    private modalService: BsModalService,
    private service: LetsWorkServiceService,
    private route: ActivatedRoute, private routeconfig: Router) { }

  ngOnInit() {
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  onSelect() {
    this.service.OnLogin(this.username, this.password).subscribe(
      user => {
        if (user) {
          console.log(user);
          const u: User = user;
          const token: string = '' + u.token.toString();
          localStorage.setItem('token', token);
          console.log(token);
          this.routeconfig.navigate(['/profile/', this.username]);
        }
      });
  }

}
