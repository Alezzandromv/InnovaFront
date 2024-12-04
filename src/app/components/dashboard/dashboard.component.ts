import { Component } from '@angular/core';
import { Evento } from '../../models/Evento';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/Usuario';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  usuarioActual!:User;

  constructor(
    private _eventoService:EventoService,
    private router: Router,
    private _authService:AuthService
  ){
    
  }

  ngOnInit():void{
    this.obtenerEventos();
    this.usuarioActual = this._authService.getUserDetails();
  }

  
  obtenerEventos(){
    this._eventoService.getEventos().subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    })    
  }

}
