import { Component, OnInit } from '@angular/core';
import { DatePipe } from '../../../../node_modules/@angular/common';
import { Router } from '../../../../node_modules/@angular/router';
import { NgxSpinnerService } from '../../../../node_modules/ngx-spinner';
import { VenueRequest } from '../../shared/VenueRequest';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-home-page-search-box',
  templateUrl: './home-page-search-box.component.html',
  styleUrls: ['./home-page-search-box.component.css']
})
export class HomePageSearchBoxComponent implements OnInit {

  currentDate: Date = new Date();

  capacity: number = null;
  date: Date = null;
  city: String = null;
  venueType: String = null;

  cities: String[] = [];
  formattedDate: string;

  venues: any[] = [];

  venueRequest: VenueRequest = {
    capacity: 0,
    city: "",
    venueType: "",
    date: this.currentDate
  };


  constructor(private venueService: LetsWorkServiceService, public datepipe: DatePipe, private spinner: NgxSpinnerService, private router: Router) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

  }


  ngOnInit() {
    this.formattedDate = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.loadCities();
  }

  loadCities() {
    this.venueService.getCities().subscribe(data => {
      this.cities = data;
    });
  }


  submit() {
    this.venueRequest.capacity = this.capacity;
    this.venueRequest.city = this.city;
    this.venueRequest.venueType = this.venueType;
    this.venueRequest.date = this.date;
    let navigationExtras: any = {
      queryParams: {
        "venueRequest": JSON.stringify(this.venueRequest)
      },
      relativeTo: this.router

    };
    this.routeToPage(navigationExtras)

  }

  routeToPage(navigationExtras: any) {
    this.router.navigate(['/search'], navigationExtras)
  }

}
