import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

@Component({
  selector: 'app-model-event',
  templateUrl: './model-event.component.html',
  styleUrls: ['./model-event.component.css']
})
export class ModelEventComponent implements OnInit {
  @Input() event! : EventModel;
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseModal(){
    this.closeModal.emit();
  }

}
