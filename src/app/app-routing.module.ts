import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { CarruselDashComponent } from './components/carrusel-dash/carrusel-dash.component';
import { RegistrarEventoComponent } from './components/registrar-evento/registrar-evento.component';

const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'carrousel', component: CarruselDashComponent },
{ path: 'evento', component: RegistrarEventoComponent, canActivate: [AuthGuard] },
{ path: '**', redirectTo: 'login' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
