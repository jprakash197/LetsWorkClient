import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = environment.url + '/';
  }

  public findUser(): Observable<User> {
    if (localStorage.getItem('user') != null) {
      return this.http.get<User>(this.userUrl + 'getUser/' + localStorage.getItem('user'));
    }
    return null;
  }

  // public save(user: User) {
  //   return this.http.post<User>(this.userUrl, user);
  // }

<<<<<<< HEAD
  public editUser(email:string) {
    return this.http.put<string>(this.userUrl+'getUser/' + localStorage.getItem('user'), email);
=======
  public editUser( email: string ) {
    return this.http.put<string>(this.userUrl + 'getUser/Jyoti', email);
>>>>>>> faec37065a918b8d4ee8c6ca5d93d25352cedf22
  }
}
