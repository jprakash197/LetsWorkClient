import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { } from 'googlemaps';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  // Initialize and add the map
  initMap() {
    // The location of Bengaluru
    var bengaluru = { lat: 12.9, lng: 77.3 };
    // The map, centered at Bengaluru
    this.map = new google.maps.Map(
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
        infoWindow.open(this.map);
        this.map.setCenter(pos);
        const marker = new google.maps.Marker({ position: bengaluru, map: this.map });
      }, () => {
        this.handleLocationError(true, infoWindow, this.map.getCenter());
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
    infoWindow.open(this.map)
  }

}
