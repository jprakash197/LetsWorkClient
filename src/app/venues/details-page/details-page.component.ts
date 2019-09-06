import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  // id:any;
  // venue:any;
  // flag=false;
  
  constructor(private route: ActivatedRoute,private venueService: LetsWorkServiceService) {
    // this.id = +this.route.snapshot.params['venueId'];
    // console.log(this.id);
   }

   ngOnInit() {
    // this.venueService.getDetails(this.id).subscribe(venue=>{
    //   this.venue=venue;
    //   this.flag=true;
    //   console.log(this.venue)
    //  });
   }

}
