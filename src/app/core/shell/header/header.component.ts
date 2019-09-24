import { Component, OnInit } from '@angular/core';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/user';
import { TrackServiceService } from '../../../core/shell/track-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  displayFooter: boolean;
  user: User = null;

  constructor(private letsWorkService: LetsWorkServiceService, private routeConfig: Router, private service: TrackServiceService) { }
  data1;
  ngOnInit() {
    this.letsWorkService.getLogStatus().subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.letsWorkService.getUser().subscribe(user => this.user = user);
    this.service.displayTrack().subscribe(data => this.data1 = data)
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
    console.log("Logging into user profile:");
    console.log(this.user);
    if (this.user) {
      if (this.user.role.toUpperCase() === 'ADMIN') {
        this.routeConfig.navigate(['/login/admin/' + this.user.username]);
      } else {
        this.routeConfig.navigate(['/getUser/' + this.user.username]);
      }
    }
  }


  submit1() {
    this.displayFooter = true;
    this.routeConfig.navigate(['/display']);
  }

  // count=0;
  // flag=false;
  // submit1()
  // {  this.count++;
  //   if(this.count%2==0)
  //   {
  //     this.flag=false;
  //     this.routeConfig.navigate(['display'])
  //   }
  //   else{
  //     this.flag=true;
  //     this.routeConfig.navigate(['display'])
  //   }
  // }
}
