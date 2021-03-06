import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MapService } from '../../../shared/map.service';

import { Venue } from '../../../shared/venue';
import { BookNowComponent } from '../../../booking/book-now/book-now.component';

@Component({
  selector: 'app-read-details',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.css']
})
export class ReadDetailsComponent implements OnInit {
  id: any;
  venue: Venue;
  flag = false;
  check:any;

  constructor(
    private route: ActivatedRoute,
    private venueService: LetsWorkServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private mapService: MapService,
    private booknow: BookNowComponent) {

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
    });
  }

  onSubmit() {
    // this.router.navigate(['/login']);

    this.venueService.getLogStatus().subscribe(data=>{
      this.check=data;
    });
    if(this.check==true)
    {
      console.log(true);
      console.log(this.id);
      // this.booknow.getbookingid(this.id);
      this.venueService.venueId=this.id;
      this.router.navigate(['book']);
    }
    else
    {
      console.log(this.route.snapshot['_routerState'].url);
      this.router.navigate(['login'], { queryParams: {returnUrl: this.route.snapshot['_routerState'].url}});
    }
  }

}
