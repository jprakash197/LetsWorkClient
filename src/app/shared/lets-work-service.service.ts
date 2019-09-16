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

  venues: BehaviorSubject<Venue[]> = new BehaviorSubject<Venue[]>(null);
  currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  logSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  filteredVenues: Venue[] = [];
  searchedVenues: Venue[] = [];
  myvenue: Venue[] = [];
  cities: string[] = [];
  url: string = environment.url;

  configUrl = this.url + '/venues';
  citiesUrl = this.url + '/cities';
  detailUrl = this.url + '/getDetails/';

  constructor(private http: HttpClient, private mapService: MapService) {

  }

  getVenues(venueRequest: VenueRequest): Observable<any> {
    console.log(`venue capacity: ${venueRequest.capacity}\n venue city: ${venueRequest.city}`);

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

  getAllVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.configUrl);
  }

  addVenues(venues): void {
    const tempVenues = this.venues.getValue();
    tempVenues.push(venues);
    this.venues.next(tempVenues);
  }

  onSignUp(user): Observable<User> {
    return this.http.post<User>(this.url + '/signup', user);
  }

  OnLogin(username: string, password: string): Observable<User> {
    console.log(`Logging in: ${username}\npassword: ${password}`);
    return this.http.get<User>(this.url + '/login/' + username + '&' + password);
  }

  setUser(user: User) {
    this.currentUser.next(user);
  }

  getUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  getLogStatus(): Observable<boolean> {
    return this.logSubject.asObservable();
  }

  setLogStatus(status: boolean): void {
    this.logSubject.next(status);
  }

  updateVenue(venue: Venue) {
    this.http.put(this.configUrl, venue);
  }

}
