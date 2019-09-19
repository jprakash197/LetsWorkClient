import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../../../core/shell/track-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
data1;
  constructor(private service :TrackServiceService, private spinner: NgxSpinnerService,) { 
    this.spinner.show();
    this.service.displayTrack().subscribe(data=>{
      this.data1=data
      this.spinner.hide();
    });
    
  }
  count = 0;
  flag = false;
  ngOnInit() {

   
    this.count++;
    if (this.count % 2 == 0) {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
  }
}





