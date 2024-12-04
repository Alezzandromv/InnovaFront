import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-evento',
  standalone: false,
  
  templateUrl: './registrar-evento.component.html',
  styleUrl: './registrar-evento.component.css'
})
export class RegistrarEventoComponent {
  
  eventoForm: FormGroup;
  
  //firebase
  downloadURL: string;
  localURL : File;

  selectedFile: File | null = null;
  selectedFileUrl: string | ArrayBuffer | null = null;

  
  usuarioActual!:User;
  constructor(
    private router: Router,
    private _authService:AuthService,
    private fb: FormBuilder
  ){
    this.eventoForm = this.fb.group({
      nombreEvento: ['', Validators.required],
      facultad: ['', Validators.required],
      fechaEvento: ['', Validators.required],
      horaEvento: ['', Validators.required],
      validezEvento : ['', Validators.required],
      maxAsistentes: ['', [Validators.required]],
      lugarEvento: ['', [Validators.required]],
    });
    this.downloadURL = "";
    this.localURL = null as any;
  }

  ngOnInit():void{
    this.usuarioActual = this._authService.getUserDetails();
    console.log(this.usuarioActual._id);
  }

}
