import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './pipe/token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ArchivosCardComponent } from './components/archivos-card/archivos-card.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { EventosCardComponent } from './components/eventos-card/eventos-card.component';
import { FooterInnovaComponent } from './components/footer-innova/footer-innova.component';
import { InitCardsComponent } from './components/init-cards/init-cards.component';
import { PerfilNavComponent } from './components/perfil-nav/perfil-nav.component';
import { CarruselDashComponent } from './components/carrusel-dash/carrusel-dash.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RegistrarEventoComponent } from './components/registrar-evento/registrar-evento.component';
import { PagesNavComponent } from './components/pages-nav/pages-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ArchivosCardComponent,
    CalendarCardComponent,
    EventosCardComponent,
    FooterInnovaComponent,
    InitCardsComponent,
    PerfilNavComponent,
    CarruselDashComponent,
    RegistrarEventoComponent,
    PagesNavComponent,
  ],
  imports: [
    CarouselModule.forRoot(),
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
