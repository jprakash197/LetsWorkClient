import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { VenueRequest } from '../../shared/VenueRequest';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  venues: any[] = [];

  venueRequest: VenueRequest = {
    capacity: 0,
    city: "",
    venueType: "",
    date: null
  };

  stmt: String;

  constructor(private route: ActivatedRoute,private venueService: LetsWorkServiceService) {
    this.route.queryParams.subscribe(params => {
      this.venueRequest = JSON.parse(params["venueRequest"]);
      this.venueService.getVenues(this.venueRequest).subscribe(data => {
        this.venues = data
      });
    });

  }

  ngOnInit() {
  }

}
