import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/Models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private url = 'https://mi-primera-furgo-api.herokuapp.com/api/user';
  private url = 'http://127.0.0.1:8000/api/user';

  constructor( private http : HttpClient ) { }

  getUsers() : Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.url);
  }
}
