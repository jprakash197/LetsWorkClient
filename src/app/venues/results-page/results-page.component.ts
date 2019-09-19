import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenueRequest } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl} from '@angular/forms';



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

  // new change 
  category = new FormGroup({
    first:new FormControl(),second:new FormControl(),third:new FormControl(),four:new FormControl(),five:new FormControl()
  })

  venueRequest: VenueRequest = {
    date: null,
    capacity: 0,
    city: '',
    venueType: ''
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
    if(this.category.value.first === true && this.category.value.second===true && this.category.value.third===true && this.category.value.four===true && this.category.value.five===true){
      this.filtervenues = this.venueService.allFilter();
    }

     else if (this.category.value.first === true ) {
       if(this.category.value.five===true) {
        this.filtervenues = this.venueService.filterPrice().filter(x=> x.rating <4);
       }
       else if(this.category.value.third===true) {
        this.filtervenues = this.venueService.filterPrice().filter(x=> (x.rating >3 || x.rating ==5));
       }
       else {
           this.filtervenues = this.venueService.filterPrice();
       } 
    }

     else if (this.category.value.third===true) {
      if(this.category.value.second===true ){
        this.filtervenues = this.venueService.filterPrice2().filter(x=> (x.rating>3 && x.rating<6));
      } else if (this.category.value.four===true){
        this.filtervenues = this.venueService.filterPrice3().filter(x=> (x.rating>3 && x.rating<6));
      } else if (this.category.value.first===true) {
        this.filtervenues = this.venueService.filterPrice().filter(x=> (x.rating>3 || x.rating==5));
      }
      else {
      this.filtervenues = this.venueService.filterRating();  
      }
    }
    
    else if ( this.category.value.second===true ) {
      if(this.category.value.five===true) {
        this.filtervenues = this.venueService.filterPrice2().filter(x=> x.rating <4);
       }
       else if(this.category.value.third===true) {
        this.filtervenues = this.venueService.filterPrice2().filter(x=>(x.rating >3));
       }
      else {
        this.filtervenues = this.venueService.filterPrice2();
      }
    }
    
    else if (this.category.value.four===true ) {
      if(this.category.value.five===true ) {
        this.filtervenues = this.venueService.filterPrice3().filter(x=> x.rating <4);
       }
       else if(this.category.value.third===true) {
        this.filtervenues = this.venueService.filterPrice3().filter(x=> (x.rating >3));
       }
      else {
        this.filtervenues = this.venueService.filterPrice3();
      }
    }

    else if (this.category.value.five===true) {
       this.filtervenues = this.venueService.filterRating2();
    }

    else {
      this.filtervenues = this.venues;
    }

    if (this.filtervenues.length === 0) {
      this.flag = false;
    } else {
      this.flag = true;
    }

  }

  // sorting
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
  }

}
