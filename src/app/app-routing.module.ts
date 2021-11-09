import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';

const APP_ROUTES: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'eventos', component : EventosComponent },
  { path : '', pathMatch : 'full', redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
