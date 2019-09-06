import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsWorkServiceService } from '../../../shared/lets-work-service.service';
@Component({
  selector: 'app-read-details',
  templateUrl: './read-details.component.html',
  styleUrls: ['./read-details.component.css']
})
export class ReadDetailsComponent implements OnInit {
  id:any;
  venue:any;
  flag=false;
  
  constructor(private route: ActivatedRoute,private venueService: LetsWorkServiceService) {
    this.id = +this.route.snapshot.params['venueId'];
    console.log(this.id);
   }

   ngOnInit() {
    this.venueService.getDetails(this.id).subscribe(venue=>{
      this.venue=venue;
      this.flag=true;
      console.log(this.venue)
    });
   }

}
