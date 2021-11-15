import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';

const APP_ROUTES: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'eventos', component : EventosComponent },
  { path : 'nosotros', component : WhoWeAreComponent },
  { path : '', pathMatch : 'full', redirectTo : 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
