import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/Models/event.model';

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
  private index = 0;

  constructor() { }

  ngOnInit(): void {
    this.fillEvents();
    this.currentEvent =  this.events[0];
    this.lasEvents = this.events.slice(0, 4);
    console.log(this.events);
    console.log(this.lasEvents);
    this.otherEvents = this.events.slice(4);
  }

  fillEvents(){
    this.events.push(new EventModel('2021/11/15', 'Evento especial', 'evento_especial.jpg', 'Evento especial para el cierre de la temporada, que tendra lugar en la guarida.', false));
    this.events.push(new EventModel('2021/10/25', 'Partidos de Octavos', 'fase_octavos.jpg', 'Partidos oficiales de octavos de finales para el torneo III', false));
    this.events.push(new EventModel('2021/10/20', 'Ultima Jornada', 'fase_grupos.jpg', 'Ultima jornada para la liguilla antes de los partidos de octavos de final.', false));
    this.events.push(new EventModel('2021/10/06', 'Presentación', 'presentacion_torneo.jpg', 'Presentacion del torneo III, donde veremos todos los participantes y explicaremos las reglas.', false));
    this.events.push(new EventModel('2021/09/21', 'Partidos libres', 'partidos_amistosos.jpg', 'Quedada en La Guarida para partidos libres entre los miembros de club.', false));
    this.events.push(new EventModel('2021/11/15', 'Evento especial', 'evento_especial.jpg', 'Evento especial para el cierre de la temporada, que tendra lugar en la guarida.', false));
    this.events.push(new EventModel('2021/10/25', 'Partidos de Octavos', 'fase_octavos.jpg', 'Partidos oficiales de octavos de finales para el torneo III', false));
    this.events.push(new EventModel('2021/10/20', 'Ultima Jornada', 'fase_grupos.jpg', 'Ultima jornada para la liguilla antes de los partidos de octavos de final.', false));
    this.events.push(new EventModel('2021/10/06', 'Presentación', 'presentacion_torneo.jpg', 'Presentacion del torneo III, donde veremos todos los participantes y explicaremos las reglas.', false));
    this.events.push(new EventModel('2021/09/21', 'Partidos libres', 'partidos_amistosos.jpg', 'Quedada en La Guarida para partidos libres entre los miembros de club.', false));
  }
}
