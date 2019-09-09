import { Component, OnInit } from '@angular/core';

import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  userMap: google.maps.Map;

  constructor() { }

  ngOnInit() {
    this.createGoogleMap();
  }

  // Initialize and add the map
  createGoogleMap() {
    const bhubaneshwar = { lat: 20.30, lng: 85.86 };
    const mumbai = { lat: 19.07, lng: 72.88 };
    const bengaluru = { lat: 12.97, lng: 77.60 };
    // The map, centered at Bengaluru
    this.userMap = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: bengaluru });

    const infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(this.userMap);
        this.userMap.setCenter(pos);
        const marker = new google.maps.Marker({ position: pos, map: this.userMap });
      }, () => {
        this.handleLocationError(true, infoWindow, this.userMap.getCenter());
      });
    } else {
      this.handleLocationError(false, infoWindow, bengaluru);
    }
  }

  handleLocationError(browserHasGeolocaiton, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocaiton
      ? 'Error: Geolocation service failed'
      : 'Error: Browser does not support geolocation');
    infoWindow.open(this.userMap)
  }

}
