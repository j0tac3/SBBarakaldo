import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event! : EventModel;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo( event : any ){
    event.expanded = !event.expanded;
  }
}
