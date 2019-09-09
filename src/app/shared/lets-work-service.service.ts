import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { VenueRequest } from './VenueRequest';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

import { Image } from './image';
import { Feature } from './feature';
import { Booking } from './booking';

export interface Venue {
  id: number;
  name: string;
  city: string;
  address: string;
  size: number;
  capacity: number;
  price: number;
  description: string;
  type: string;
  rating: number;
  images: Image[];
  feature: Feature[];
  bookings: Booking[];
}

@Injectable({
  providedIn: 'root'
})
export class LetsWorkServiceService {

  filteredVenues: any[] = [];
  searchedVenues: any[] = [];
  myvenue: any[] = [];
  cities: String[] = [];
  url: String = environment.url;

  configUrl = this.url + '/venues';
  citiesUrl = this.url + '/cities';
  detailUrl = this.url + '/getDetails/';

  constructor(private http: HttpClient) {
    console.log(this.citiesUrl)

  }
  getVenues(venueRequest: VenueRequest): Observable<any> {
    console.log(venueRequest.capacity + "/" + venueRequest.city + "service")
    // this.http.post<VenueRequest>(this.configUrl, venueRequest).subscribe(data => console.log(data))
    return this.http.post<any>(this.configUrl, venueRequest);
  }

  getCities(): Observable<String[]> {
    return this.http.get<String[]>(this.citiesUrl);
  }

  getSearchedVenues(venues: any[]) {
    this.searchedVenues = venues;
  }

  public filterPrice(): any[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(k => {
      if (k.price > 5000) {
        this.filteredVenues.push(k);
      }

    })
    return this.filteredVenues;
  }

  public filterRating(): any[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(element => {
      if (element.rating > 5) {
        this.filteredVenues.push(element);
      }
    })
    return this.filteredVenues;
  }

  public allFilter(): any[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(element => {
      if (element.price > 5000 && element.rating > 5) {
        this.filteredVenues.push(element);
      }
    })
    return this.filteredVenues;
  }

  getDetails(venueId): Observable<any> {
    return this.http.get<any>(this.detailUrl + venueId);
  }

}
