import { Component, OnInit } from '@angular/core';

import { } from 'googlemaps';
import { MapService } from '../../../shared/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  userMap: google.maps.Map;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.createGoogleMap();
  }

  // Initialize and add the map
  createGoogleMap() {

    const venueLocation = this.mapService.getLocation();

    // The map, centered at Bengaluru
    this.userMap = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: venueLocation });

    const infoWindow = new google.maps.InfoWindow;

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     let pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };

    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent('Location found.');
    infoWindow.open(this.userMap);
    this.userMap.setCenter(venueLocation);
    const marker = new google.maps.Marker({ position: venueLocation, map: this.userMap });
    //   }, () => {
    //     this.handleLocationError(true, infoWindow, this.userMap.getCenter());
    //   });
    // } else {
    //   this.handleLocationError(false, infoWindow, venueLocation);
    // }
  }

  handleLocationError(browserHasGeolocaiton, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocaiton
      ? 'Error: Geolocation service failed'
      : 'Error: Browser does not support geolocation');
    infoWindow.open(this.userMap)
  }

}
