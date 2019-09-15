import { Component, OnInit } from '@angular/core';
import { Venue } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  venues: Venue[] = [];

  constructor(private letsWorkService: LetsWorkServiceService) { }

  ngOnInit() {
    this.letsWorkService.getAllVenues().subscribe(venues => this.venues = venues);

    const TOTAL_VENUES = 22;
    for (let i = 1; i <= TOTAL_VENUES; i += 1) {
      this.letsWorkService.getDetails(i).subscribe(venue => {
        this.venues.push(venue);
        console.log(venue);
      });
    }
  }

}
