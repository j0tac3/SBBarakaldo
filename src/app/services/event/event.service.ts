import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/Models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
   //private url = 'https://mi-primera-furgo-api.herokuapp.com/api/user';
   private url = 'http://127.0.0.1:8000/api/event';

   constructor( private http : HttpClient ) { }
 
   getEvents() : Observable<EventModel[]>{
     return this.http.get<EventModel[]>(this.url);
   }
}
