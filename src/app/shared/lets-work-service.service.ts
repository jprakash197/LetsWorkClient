import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from './user';

import { Venue, VenueRequest } from './venue';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class LetsWorkServiceService {

  venues: BehaviorSubject<Venue[]>;
  currentUser: BehaviorSubject<User>;

  filteredVenues: Venue[] = [];
  searchedVenues: Venue[] = [];
  myvenue: Venue[] = [];
  cities: string[] = [];
  url: string = environment.url;

  configUrl = this.url + '/venues';
  citiesUrl = this.url + '/cities';
  detailUrl = this.url + '/getDetails/';

  constructor(private http: HttpClient, private mapService: MapService) {
    this.venues = new BehaviorSubject<Venue[]>(null);
    this.currentUser = new BehaviorSubject<User>(null);
  }

  getVenues(venueRequest: VenueRequest): Observable<any> {
    console.log(venueRequest.capacity + '/' + venueRequest.city + 'service');

    // Intercept the venueRequest city location with the map service
    this.mapService.setLocation(venueRequest.city.toLowerCase());

    return this.http.post<Venue>(this.configUrl, venueRequest);
  }

  getCities(): Observable<string[]> {
    return this.http.get<string[]>(this.citiesUrl);
  }

  getSearchedVenues(venues: Venue[]) {
    this.searchedVenues = venues;
  }

  public filterPrice(): Venue[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(k => {
      if (k.price > 5000) {
        this.filteredVenues.push(k);
      }

    });
    return this.filteredVenues;
  }

  public filterRating(): Venue[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(element => {
      if (element.rating > 5) {
        this.filteredVenues.push(element);
      }
    });
    return this.filteredVenues;
  }

  public allFilter(): Venue[] {
    while (this.filteredVenues.length > 0) {
      this.filteredVenues.pop();
    }
    this.searchedVenues.forEach(element => {
      if (element.price > 5000 && element.rating > 5) {
        this.filteredVenues.push(element);
      }
    });
    return this.filteredVenues;
  }

  getDetails(venueId): Observable<Venue> {
    return this.http.get<Venue>(this.detailUrl + venueId);
  }

  onSignUp(user): Observable<User> {
    return this.http.post<User>(this.url + '/signup', user);
  }

  OnLogin(username: string, password: string): Observable<User> {
    console.log(`Logging in: ${username}, password: ${password}`);
    return this.http.get<User>(this.url + '/login/' + username + '&' + password);
  }

  setUser(user: User) {
    this.currentUser.next(user);
  }



}
