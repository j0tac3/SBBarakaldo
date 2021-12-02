import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  public events : EventModel[] = [];
  public lasEvents : EventModel[] = [];
  public otherEvents : EventModel[] = [];

  public showInfoState : boolean = false;
  public currentEvent! : EventModel;

  constructor( private eventsService : EventService ) { }

  ngOnInit(): void {
    this.getEventsFromDB();
    
    this.fillEvents();
    this.lasEvents = this.events.slice(0, 4);
    console.log(this.events);
    console.log(this.lasEvents);
    this.otherEvents = this.events.slice(4);
  }

  getEventsFromDB(){
    this.eventsService.getEvents()
    .subscribe( resp => {
      this.events = resp['data'];
      console.log('Eventos: ' + this.events);
    })
  }

  fillEvents(){
    this.events.push(new EventModel(1, 'evento_especial.jpg', 
                                        'Evento especial', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Evento especial para el cierre de la temporada, que tendra lugar en la guarida.', 
                                        '2021/11/15',
                                        '2021/11/15',
                                        false,
                                        false));
    this.events.push(new EventModel(2, 'fase_octavos.jpg', 
                                        'Partidos de Octavos', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Partidos oficiales de octavos de finales para el torneo III', 
                                        '2021/10/25',
                                        '2021/10/25',
                                        false,
                                        false));
    this.events.push(new EventModel(3, 'fase_grupos.jpg', 
                                        'Ultima Jornada', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Ultima jornada para la liguilla antes de los partidos de octavos de final.',
                                        '2021/10/20', 
                                        '2021/10/20',
                                        false,
                                        false));
    this.events.push(new EventModel(4, 'presentacion_torneo.jpg', 
                                        'Presentación', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Presentacion del torneo III, donde veremos todos los participantes y explicaremos las reglas.', 
                                        '2021/10/06', 
                                        '2021/10/06', 
                                        false,
                                        false));
    this.events.push(new EventModel(5, 'partidos_amistosos.jpg', 
                                        'Partidos libres', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Quedada en La Guarida para partidos libres entre los miembros de club.', 
                                        '2021/09/21', 
                                        '2021/09/21', 
                                        false,
                                        false));
    this.events.push(new EventModel(6, 'evento_especial.jpg', 
                                        'Evento especial', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Evento especial para el cierre de la temporada, que tendra lugar en la guarida.', 
                                        '2021/11/15', 
                                        '2021/11/15', 
                                        false,
                                        false));
    this.events.push(new EventModel(7, 'fase_octavos.jpg', 
                                        'Partidos de Octavos', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Partidos oficiales de octavos de finales para el torneo III',
                                        '2021/10/25', 
                                        '2021/10/25', 
                                        false,
                                        false));
    this.events.push(new EventModel(8, 'fase_grupos.jpg', 
                                        'Ultima Jornada', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Ultima jornada para la liguilla antes de los partidos de octavos de final.',
                                        '2021/10/20', 
                                        '2021/10/20', 
                                        false,
                                        false));
    this.events.push(new EventModel(9, 'presentacion_torneo.jpg',
                                        'Presentación', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Presentacion del torneo III, donde veremos todos los participantes y explicaremos las reglas.',
                                        '2021/10/06', 
                                        '2021/10/06', 
                                        false,
                                        false));
    this.events.push(new EventModel(10, 'partidos_amistosos.jpg', 
                                        'Partidos libres', 
                                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nulla, in temporibus minima vero aperiam veritatis, voluptate est ducimus mollitia harum dignissimos vel natus rem rerum fugiat ex labore praesentium.', 
                                        'Quedada en La Guarida para partidos libres entre los miembros de club.', 
                                        '2021/09/21',
                                        '2021/09/21',
                                        true,
                                        true));
  }

  onSelectEvent(event : any){
    this.currentEvent = event;
  }

  onCloseModal(){
    this.currentEvent = null;
  }
}