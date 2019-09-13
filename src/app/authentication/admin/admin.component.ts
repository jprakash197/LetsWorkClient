import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  venues: Venue[];

  constructor(private letsWorkService: LetsWorkServiceService, private http: HttpClient) { }

  ngOnInit() {
    this.letsWorkService.getAllVenues().subscribe(venues => this.venues = venues);
  }

}
