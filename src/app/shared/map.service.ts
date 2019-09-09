import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Location {
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  bhubaneshwar: Location = { lat: 20.30, lng: 85.86 };
  mumbai: Location = { lat: 19.07, lng: 72.88 };
  bengaluru: Location = { lat: 12.97, lng: 77.60 };

  locationSubject = new BehaviorSubject<Location>(this.bhubaneshwar);

  constructor() { }

  setLocation(location: String) {
    console.log(`location: ${location}`);
    if (location === 'mumbai') {
      this.locationSubject.next(this.mumbai);
    } else if (location === 'bangalore') {
      this.locationSubject.next(this.bengaluru);
    } else {
      this.locationSubject.next(this.bhubaneshwar);
    }
  }

  getLocation() {
    return this.locationSubject.getValue();
  }

}
