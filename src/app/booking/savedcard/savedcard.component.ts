import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Card } from '../../shared/Card';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { PaymentService } from '../../shared/payment.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-savedcard',
  templateUrl: './savedcard.component.html',
  styleUrls: ['./savedcard.component.css']
})
export class SavedcardComponent implements OnInit {

  userdetails:any;
  previousdetails:Card=new Card();
  errorData: any;
  @Input() id: number;
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private service: PaymentService, private route: Router, private modalService: NgbModal) {
    this.createForm();
    this.userdetails=this.service.user;
  }

  ngOnInit() {
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

  refresh()
  {
    this.userdetails=this.service.user;
    this.previousdetails=this.service.user;
  }

  openFormModal() {
    const modalRef = this.modalService.open(SavedcardComponent);
    modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onSubmit() {
      Swal.fire(
        'Booking is successful!',
        'Thanks for choosing us',
        'success'
      ).then((result) => {
          this.route.navigate(['']);
        });
      this.closeModal();
      // this.route.navigate(['']);
    }
     
}
