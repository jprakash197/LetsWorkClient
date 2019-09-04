import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { VenueRequest } from './VenueRequest';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LetsWorkServiceService {

 
  cities:String[]=[];
  url:String=environment.url;
  
  configUrl = this.url+'/venues';
  citiesUrl = this.url+'/cities';
  
  constructor(private http: HttpClient) {
    console.log(this.citiesUrl)
  }
  getVenues(venueRequest: VenueRequest): Observable<any> {
    console.log(venueRequest.capacity+"/"+venueRequest.city+"service")
    this.http.post<VenueRequest>(this.configUrl, venueRequest).subscribe(data => console.log(data))
    return this.http.post<any>(this.configUrl, venueRequest);

  }

  getCities():Observable<String[]> {
    return this.http.get<String[]>(this.citiesUrl);
  }
}
