import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Track } from './Track';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {

  data:any;
  track:Track=new Track();
  url: string = environment.url;

  aboutUsUrl = this.url + '/api/getAll';


  constructor(private http:HttpClient) { }
  
    
    private read="http://localhost:8080/api/getAll";
    

    
    displayTrack():Observable<Track[]>
    {
      return this.http.get<Track[]>(this.aboutUsUrl);
      
    }

   
}
