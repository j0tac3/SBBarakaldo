import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Input() event! : EventModel;
  @Output() eventSelected = new EventEmitter<EventModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onEventSelected( event : any ){
    this.eventSelected.emit(event);
  }

}
