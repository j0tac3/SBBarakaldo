import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  public eventForm : FormGroup;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.onFormInit();
  }

  onFormInit(){
    this.eventForm = this.fb.group({
      image : ['', ],
      title : ['', Validators.required],
      start : ['', Validators.required],
      end : ['', ],
      summary : ['', Validators.required],
      description : ['', Validators.required],
      published : ['', ]
    })
  }

  onSaveEvent(){

  }

  onCancelEvent(){
    this.eventForm.reset();
  }

}
