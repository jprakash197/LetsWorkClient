import { Component, OnInit } from '@angular/core';

import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  // Initialize and add the map
  initMap() {
    var userLat = 12.9;
    var userLong = 77.3;

    // The location of Bengaluru
    var latLongLoc = { lat: userLat, lng: userLong };
    // The map, centered at Bengaluru
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: latLongLoc });
    // The marker, positioned at Bengaluru
    var marker = new google.maps.Marker({ position: latLongLoc, map: map });
  }

}
