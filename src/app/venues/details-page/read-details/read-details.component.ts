import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner';

import Swal from 'sweetalert2';
import { MapService } from '../../../shared/map.service';

@Component({
  selector: 'app-read-details',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.css']
})
export class ReadDetailsComponent implements OnInit {
  id: any;
  venue: any;
  venueImg: any[] = [];
  flag = false;


  constructor(private route: ActivatedRoute,
    private venueService: LetsWorkServiceService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private mapService: MapService) {
    this.id = +this.route.snapshot.params['venueId'];
    console.log(this.id);
  }

  ngOnInit() {
    this.spinner.show();
    this.venueService.getDetails(this.id).subscribe(venue => {
      this.venue = venue;
      this.flag = true;
      console.log(this.venue);
      this.mapService.setLocation(this.venue.city.toLowerCase());
      this.spinner.hide();
    });
  }

  onSubmit() {
    Swal.fire(
      'Booking is successful!',
      'Thanks for choosing us',
      'success'
    ).then((result) => {

      this.router.navigate(['']);
    })


  }

}
