import { Component, OnInit } from '@angular/core';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { Router } from  '@angular/router';
import { ResultsPageComponent } from '../results-page.component';

@Component({
  selector: 'app-filter-venues',
  templateUrl: './filter-venues.component.html',
  styleUrls: ['./filter-venues.component.css']
})
export class FilterVenuesComponent implements OnInit {

  constructor() {  }
  ngOnInit() {

  }


}
