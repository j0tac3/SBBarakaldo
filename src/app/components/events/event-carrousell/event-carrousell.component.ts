import { Component, Input, OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-event-carrousell',
  templateUrl: './event-carrousell.component.html',
  styleUrls: ['./event-carrousell.component.css']
})
export class EventCarrousellComponent implements OnInit {
  @Input() events! : EventModel[];
  public currentEvent! : EventModel;
  private index = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentEvent =  this.events[0];
  }

  previousevent(){
    if (this.index > 0)
      this.index -= 1
    this.currentEvent = this.events[this.index];
  }
  
  nextEvent(){
    if (this.index < this.events.length - 1 )
      this.index += 1
    this.currentEvent = this.events[this.index];
  }

}
