import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';


const routes: Routes = [
  {
    path: '', component: BookNowComponent,
    
  },
  {
    path: 'book', component: BookNowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
