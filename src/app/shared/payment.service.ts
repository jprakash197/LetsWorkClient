import { Injectable } from '@angular/core';
import { Payment } from './Payment';
import { Card } from './Card';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment:Payment=new Payment();
  paymentMode:String;
  card:Card= new Card();
  constructor(private http:HttpClient) { }

  private add="http://localhost:8080/payment";
  private read="http://localhost:8080/payment"

  addPayment(payment):Observable<Payment>
  {
    return this.http.post<Payment>(this.add, payment, {responseType:'text' as 'json'});
  }

  getCardDetails(username):Observable<Card>
  {
    return this.http.get<Card>(this.read+"/"+username);
  }

  user:any;


}
