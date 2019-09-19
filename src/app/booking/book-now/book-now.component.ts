import { Component, OnInit } from '@angular/core';
import { Payment } from '../../shared/Payment';
import { PaymentService } from '../../shared/payment.service';
import { Router } from '../../../../node_modules/@angular/router';
import { SavedcardComponent } from '../savedcard/savedcard.component';
import { CardComponent } from '../card/card.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  username:String;
  data:any;
  errorData:any;
  payment:Payment=new Payment();
  constructor(private service:PaymentService, private route:Router,private savedCards:SavedcardComponent, private card:CardComponent) { }

  ngOnInit() {
  }

  onSubmit()
  {
    // this.ngOnInit();
    this.service.paymentMode=this.payment.paymentMode;
    console.log(this.username);
    if(this.username==null)
    {
      window.alert("Please enter the username");
    }
    
    else if(this.payment.paymentMode==null)
    {
      window.alert("Please select the payment mode");
    }
    else
    {
    this.service.getCardDetails(this.username).subscribe(data=>{
      // this.data=data;
      this.service.user=data;
      // console.log(this.data);
      // console.log(Object.keys(this.data).length);
      // this.service.user=this.data;
      if(this.payment.paymentMode=="Cash")
      {
        Swal.fire(
          'Booking is successful!',
          'Thanks for booking with us',
          'success'
        ).then((result) => {
          this.route.navigate(['']);
        });
      }
      else
      {
        // this.service.status=true;
        
        // window.location.replace('cards')
          this.savedCards.refresh();
          // this.route.navigate(['cards']);
          this.savedCards.openFormModal();
          // window.location.href='cards';
      }
    },
    error=>{
      // this.errorData=error.error;
      // window.alert(this.errorData)
      // this.check(this.errorData.length);
      if(this.payment.paymentMode=="Cash")
      {
        Swal.fire(
          'Booking is successful!',
          'Thanks for booking with us',
          'success'
        ).then((result) => {
          this.route.navigate(['']);
        });
      }
      else
      { 
          // this.route.navigate(['card']);
          this.card.openFormModal();
      }
    }
  );
    // this.data.forEach(element => {
    //   console.log(element.cardName);
    // });
    
  }
}

}
