import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ChildActivationStart } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { VenueRequest } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page-search-box',
  templateUrl: './home-page-search-box.component.html',
  styleUrls: ['./home-page-search-box.component.css']
})
export class HomePageSearchBoxComponent implements OnInit {

  currentDate: Date = new Date();
  maxDate: Date = new Date();
  formattedCurrentDate: string;
  formattedMaxDate: string;

  submitted: boolean = false;

  cities: String[] = [];

  venues: any[] = [];

  venueRequest: VenueRequest = {
    capacity: 0,
    city: '',
    venueType: '',
    date: this.currentDate
  };

  registerForm = new FormGroup({
    formCapacity: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$"), Validators.max(5000)]),
    formCity: new FormControl('', [Validators.required]),
    formVenueType: new FormControl('', Validators.required),
    formDate: new FormControl('', [Validators.required]),
  });

  constructor(
    private venueService: LetsWorkServiceService,
    public datepipe: DatePipe,
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.maxDate.setDate(this.maxDate.getDate() + 365);

  }


  ngOnInit() {
    this.formattedCurrentDate = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd');
    this.formattedMaxDate = this.datepipe.transform(this.maxDate, 'yyyy-MM-dd');
    this.spinner.show();
    this.loadCities();
  }

  get f() { return this.registerForm.controls; }

  loadCities() {
    this.venueService.getCities().subscribe(data => {
      this.cities = data;
      this.spinner.hide();
    });
  }


  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;

    }

    this.venueRequest.capacity = this.registerForm.value.formCapacity;
    this.venueRequest.city = this.registerForm.value.formCity;
    this.venueRequest.venueType = this.registerForm.value.formVenueType;
    this.venueRequest.date = this.registerForm.value.formDate;
    let navigationExtras: any = {
      queryParams: {
        ' venueRequest ': JSON.stringify(this.venueRequest)
      },
      relativeTo: this.router

    };
    this.routeToPage(navigationExtras);

  }

  routeToPage(navigationExtras: any) {
    this.router.navigate(['/search'], navigationExtras);
  }
  

}
