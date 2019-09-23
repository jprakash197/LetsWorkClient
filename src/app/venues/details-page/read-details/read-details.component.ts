import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { MapService } from '../../../shared/map.service';

import { Venue } from '../../../shared/venue';

@Component({
  selector: 'app-read-details',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.css']
})
export class ReadDetailsComponent implements OnInit {
  id: any;
  venue: Venue;
  flag = false;
  errorflag=false;
  errorData:any;


  constructor(
    private route: ActivatedRoute,
    private venueService: LetsWorkServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private mapService: MapService) {

  }

  ngOnInit() {
    this.spinner.show();
    this.id = +this.route.snapshot.params['venueId'];
    console.log(`venueId: ${this.id}`);

    this.venueService.getDetails(this.id).subscribe(venue => {
      this.venue = venue;
      this.flag = true;
      this.mapService.setLocation(this.venue.city.toLowerCase());
      this.spinner.hide();
      console.log('venue (read-details component):');
      console.log(this.venue);
    },
  (error)=>{
    console.log(error.error);
    this.errorflag = true;
    this.errorData=error.error.message;
    alert(this.errorData)
  });
  }

  onSubmit() {
    // Swal.fire(
    //   'Booking is successful!',
    //   'Thanks for choosing us',
    //   'success'
    // ).then((result) => {

    //   this.router.navigate(['']);
    // });
    this.router.navigate(['/','book']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

}
