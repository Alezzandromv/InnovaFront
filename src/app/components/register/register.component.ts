import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  message: string = '';
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private fb: FormBuilder) {
        this.registerForm = this.fb.group({
           nombres: ['', [Validators.required]],
           apellidos: ['', Validators.required],
           email: ['', [Validators.required, Validators.email]],
           codigo: ['', Validators.required],
           facultad: ['', Validators.required],
           carrera: ['', Validators.required],
           password: ['', Validators.required]
          });
    }


    onRegister(){

      if (this.registerForm.invalid) {
        this.message = 'Por favor completa los campos correctamente.';
        return;
      }
      const registerData = this.registerForm.value;
      console.log(registerData);
      this.authService.register(registerData).subscribe(
        (response: any) => {
            // Guardar el token en el localStorage
            localStorage.setItem('token', response.token);

            // Redirigir al usuario a la página principal o dashboard
            this.router.navigate(['/dashboard']);
        },
        (error) => {
            // Mostrar mensaje de error
            this.message = 'Error al iniciar sesión. Verifica tus credenciales.';
            console.log(this.message);
        }
    );
    }


   
}
