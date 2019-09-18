import { Component, OnInit } from '@angular/core';
import { Venue } from '../../shared/venue';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  venues: Venue[] = [];
  venueSelected: boolean = false;
  venueToEdit: Venue = null;

  constructor(private letsWorkService: LetsWorkServiceService) { }

  ngOnInit() {
    this.letsWorkService.getAllVenues().subscribe(venues => this.venues = venues);
  }

  onClick(venue: Venue) {
    this.venueSelected = !this.venueSelected;
    this.venueToEdit = venue;
  }

  save() {
    this.venueSelected = !this.venueSelected;
    this.letsWorkService.updateVenue(this.venueToEdit).subscribe((response) => {
      console.log('Updated venue:');
      console.log(this.venueToEdit);
      console.log(response);
    }, (error) => {
      console.error(error);
    })
    this.venueToEdit = null;
  }

  cancel() {
    this.venueSelected = !this.venueSelected;
    this.venueToEdit = null;
  }

  delete() {
    this.letsWorkService.deleteVenue(this.venueToEdit).subscribe((response) => {
      console.log('Deleted venue:');
      console.log(this.venueToEdit);
      this.venues = this.venues.filter(v => v.venueId !== this.venueToEdit.venueId);
      console.log(response);
    }, (error) => {
      console.error(error);
    });

    this.venueToEdit = null;
    this.venueSelected = !this.venueSelected;
  }

}
