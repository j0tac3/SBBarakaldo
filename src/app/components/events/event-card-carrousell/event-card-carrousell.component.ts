import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-event-card-carrousell',
  templateUrl: './event-card-carrousell.component.html',
  styleUrls: ['./event-card-carrousell.component.css']
})
export class EventCardCarrousellComponent implements OnInit {
  @Input() event! : EventModel;

  constructor() { }

  ngOnInit(): void {
  }

}
