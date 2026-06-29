import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;

  constructor(

    private fb: FormBuilder,

    private router: Router

  ){

    this.loginForm = this.fb.group({

      usuario: ['', Validators.required],

      password: ['', Validators.required]

    });

  }

  ingresar(): void {

    if(this.loginForm.invalid){

      this.loginForm.markAllAsTouched();

      return;

    }

    const usuario = this.loginForm.value.usuario;

    const password = this.loginForm.value.password;

    if(usuario === 'admin' && password === '123456'){

      localStorage.setItem('login', 'true');

      Swal.fire({

        icon:'success',

        title:'Bienvenido',

        text:'Inicio de sesión correcto.',

        timer:1500,

        showConfirmButton:false

      });

      this.router.navigate(['/home']);

    }else{

      Swal.fire({

        icon:'error',

        title:'Credenciales incorrectas',

        text:'Usuario o contraseña inválidos.'

      });

    }

  }

}