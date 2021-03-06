import { Component, OnInit } from '@angular/core';
import { Venue } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  venues: Venue[] = [];
  venueSelected: boolean = false;
  venueToEdit: Venue = null;

  constructor(private letsWorkService: LetsWorkServiceService, private ngxSpinner: NgxSpinnerService) { }

  ngOnInit() {
    this.ngxSpinner.show();
    this.letsWorkService.getAllVenues().subscribe(venues => {
      this.venues = venues;
      this.ngxSpinner.hide();
    });
  }

  onClick(venue: Venue) {
    this.venueSelected = !this.venueSelected;
    if (venue === null) {
      this.venueToEdit = new Venue();
      this.venueToEdit.venueId = -1;
    } else {
      this.venueToEdit = venue;
    }
  }

  save() {
    this.venueSelected = !this.venueSelected;

    // Add a new Venue
    if (this.venueToEdit.venueId === -1) {
      this.letsWorkService.createVenue(this.venueToEdit).subscribe((response) => {
        console.log('Created venue:');
        console.log(response);
        // @TODO :: Need to parse JSON response and extract venue id from back-end
        // let venueStr = response.toString().split(',');
        // console.log(venueStr);
        // let venueId = venueStr.filter(s => s.match['[0-9]+']);
        // console.log(venueId);
        // this.venueToEdit.venueId = parseInt(venueId[0]);
        // this.venues.push(this.venueToEdit);
        // this.venues.sort((v1, v2) => {
        //   return v1.venueId - v2.venueId;
        // });
      }, (error) => {
        console.error(error);
      });
    } else {
      this.letsWorkService.updateVenue(this.venueToEdit).subscribe((response) => {
        console.log('Updated venue:');
        console.log(response);
        // Update the venue with response
        let newVenue = Object.assign(new Venue(), response);
        let foundVenue = this.venues.find(venue => venue.venueId === newVenue.venueId);
        foundVenue = newVenue;
        this.venues[foundVenue.venueId - 1] = foundVenue;
      }, (error) => {
        console.error(error);
      });
    }

    this.venueToEdit = null;
  }

  cancel() {
    this.venueSelected = !this.venueSelected;
    this.venueToEdit = null;
  }

  delete() {
    this.letsWorkService.deleteVenue(this.venueToEdit).subscribe((response) => {
      console.log('Deleted venue:');
      console.log(response);
      // filter out all the venues bar for which are not deleting foo
      this.venues = this.venues.filter(v => v.venueId !== this.venueToEdit.venueId);
    }, (error) => {
      console.error(error);
    });

    this.venueToEdit = null;
    this.venueSelected = !this.venueSelected;
  }

}
