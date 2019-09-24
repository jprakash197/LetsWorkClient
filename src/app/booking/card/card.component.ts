import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Payment } from '../../shared/Payment';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { PaymentService } from '../../shared/payment.service';
import { LetsWorkServiceService } from '../../shared/lets-work-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  payment: Payment = new Payment();
  expiryDate: any;
  data: any;
  errorData: any;
  @Input() id: number;
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private service: PaymentService, private route: Router, private modalService: NgbModal, private card:LetsWorkServiceService) {
    this.createForm();
  }

  ngOnInit() {
    console.log("Venue ID:-"+this.card.venueId);
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      cardname: '',
      cardnumber: '',
      expirydate:''
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  openFormModal() {
    const modalRef = this.modalService.open(CardComponent);
    modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onSubmit() {
    this.payment.paymentMode = this.service.paymentMode;
    // console.log(this.payment.card.cardName);
    // console.log(this.payment.card.cardNumber);
    // console.log(this.payment.card.expiryDate);
    this.service.addPayment(this.payment).subscribe(data => {
      this.data = data,
      Swal.fire(
        'Booking is successful!',
        'Thanks for booking with us',
        'success'
      ).then((result) => {
        this.route.navigate(['']);
      });
      this.closeModal();
    }
      ,
      error => {
        this.errorData = JSON.parse(error.error);
        console.log(JSON.parse(error.error));
        if (this.errorData.message == "Invalid Record Input")
        {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: "Your card number is not valid!"
          })
        }
        else
        {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: this.errorData.message
          })
       }
        if (this.errorData.message == "Invalid card number") {
          this.payment.card.cardNumber = "";
        }
        else if (this.errorData.message == "Your card is expired!") {

          this.payment.card.expiryDate = "";
        } 
        else if (this.errorData.message == "Please enter a valid date") {

          this.payment.card.expiryDate = "";
        } 
      }
    );
  }

 
}


