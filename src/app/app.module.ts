import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarComponent } from './components/events/calendar/calendar.component';
import { EventCardComponent } from './components/events/event-card/event-card.component';
import { EventCardCarrousellComponent } from './components/events/event-card-carrousell/event-card-carrousell.component';
import { EventCarrousellComponent } from './components/events/event-carrousell/event-carrousell.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelEventComponent } from './components/events/model-event/model-event.component';
import { MainMenuComponent } from './components/common/main-menu/main-menu.component';
import { CreateEventsComponent } from './pages/create-events/create-events.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamsComponent,
    EventsComponent,
    CalendarComponent,
    EventCardComponent,
    EventCardCarrousellComponent,
    EventCarrousellComponent,
    EventosComponent,
    WhoWeAreComponent,
    ModelEventComponent,
    MainMenuComponent,
    CreateEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
