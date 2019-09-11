import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenueRequest } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {

  venues: any[] = [];
  filtervenues: any[] = [];
  isChecked: boolean = false;
  check: boolean = false;
  status1: boolean = true;
  status2: boolean = true;
  flag: boolean = true;
  num: number = 10;

  venueRequest: VenueRequest = {
    capacity: 0,
    city: '',
    venueType: '',
    date: null
  };

  stmt: String;

  constructor(
    private route: ActivatedRoute,
    private venueService: LetsWorkServiceService,
    private spinner: NgxSpinnerService) {

    this.route.queryParams.subscribe(params => {

      this.venueRequest = JSON.parse(params[' venueRequest ']);
      this.spinner.show();
      this.venueService.getVenues(this.venueRequest).subscribe(

        (data) => {
          console.log(data);
          this.venues = data;
          console.log(this.venues);
          this.venueService.getSearchedVenues(this.venues);
          this.filtervenues = this.venues;
          this.spinner.hide();
        },
        (error) => {
          this.flag = false;
          this.filtervenues = this.venues;
          this.spinner.hide();
        },
      );
    });


  }



  ngOnInit() {

  }


  onChkChange() {
    this.isChecked = !this.isChecked;
    if (this.isChecked === true && this.check === true) {
      this.filtervenues = this.venueService.allFilter();

    } else if (this.isChecked === true && this.check === false) {
      this.filtervenues = this.venueService.filterPrice();

    } else if (this.isChecked === false && this.check === true) {
      this.filtervenues = this.venueService.filterRating();
    } else {
      this.filtervenues = this.venues;
    }
    if (this.filtervenues.length === 0) {
      this.flag = false;
    } else {
      this.flag = true;
    }

  }

  onChkChangerating(value) {
    this.check = !value;
    if (this.isChecked === true && this.check === true) {
      this.filtervenues = this.venueService.allFilter();

    } else if (this.isChecked === true && this.check === false) {
      this.filtervenues = this.venueService.filterPrice();

    } else if (this.isChecked === false && this.check === true) {
      this.filtervenues = this.venueService.filterRating();

    } else {
      this.filtervenues = this.venues;
    }
    if (this.filtervenues.length === 0) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  changeit() {

    this.status1 = !this.status1;
    if (this.status1 === false) {
      this.venues.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      this.venues.sort((a, b) => {
        return b.price - a.price;
      });
    }
    console.log(this.status1);
  }

  changedit() {
    this.status2 = !this.status2;
    if (this.status2 === true) {
      this.venues.sort((a, b) => {
        return a.rating - b.rating;
      });
    } else {
      this.venues.sort((a, b) => {
        return b.rating - a.rating;
      });
    }
    console.log(this.status2);
  }

}
