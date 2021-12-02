import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event! : EventModel;
  @Output() eventSelected = new EventEmitter<EventModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onEventSelected( event : any ){
    this.eventSelected.emit(event);
  }
}
