import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/Usuario';


@Component({
  selector: 'app-perfil-nav',
  standalone: false,
  
  templateUrl: './perfil-nav.component.html',
  styleUrl: './perfil-nav.component.css'
})
export class PerfilNavComponent {

  usuarioActual!:User;

  constructor(
    private router: Router,
    private _authService:AuthService
  ){}

  ngOnInit():void{
    this.usuarioActual = this._authService.getUserDetails();
    if(this.usuarioActual.imagenPerfil==undefined){
      this.usuarioActual.imagenPerfil="fotoPerfil.jpg";
    }
  }

}
