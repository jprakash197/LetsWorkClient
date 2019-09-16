import { Component, OnInit } from '@angular/core';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private letsWorkService: LetsWorkServiceService) { }

  ngOnInit() {
    this.letsWorkService.getLogStatus().subscribe(loggedIn => this.isLoggedIn = loggedIn);

  }

  onLogin(event: any) {
    this.letsWorkService.setLogStatus(true);
  }

  onLogout(event: any) {
    this.letsWorkService.setLogStatus(false);
    localStorage.setItem('token', null);
    localStorage.setItem('role', null);
  }

}
