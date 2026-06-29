import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Mascota } from '../../../models/mascota';
import { MascotaService } from '../../../core/services/mascota.service';

@Component({
  selector: 'app-registrar-mascota',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registrar-mascota.html',
  styleUrl: './registrar-mascota.css'
})
export class RegistrarMascota implements OnInit {

  mascotaForm: FormGroup;

  editando = false;

  idMascota = 0;

  constructor(

    private fb: FormBuilder,

    private mascotaService: MascotaService,

    private route: ActivatedRoute,

    private router: Router

  ) {

    this.mascotaForm = this.fb.group({

      nombre: ['', Validators.required],

      especie: ['', Validators.required],

      raza: ['', Validators.required],

      edad: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ],

      sexo: ['', Validators.required],

      nombreDueno: ['', Validators.required],

      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{9}$')
        ]
      ]

    });

  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.editando = true;

      this.idMascota = Number(id);

      const mascota = this.mascotaService.obtenerPorId(this.idMascota);

      if (mascota) {

        this.mascotaForm.patchValue({

          nombre: mascota.nombre,
          especie: mascota.especie,
          raza: mascota.raza,
          edad: mascota.edad,
          sexo: mascota.sexo,
          nombreDueno: mascota.nombreDueno,
          telefono: mascota.telefono

        });

      }

    }

  }

guardar(): void {

  if (this.mascotaForm.invalid) {

    this.mascotaForm.markAllAsTouched();

    Swal.fire({
      icon: 'warning',
      title: 'Formulario incompleto',
      text: 'Complete todos los campos obligatorios.'
    });

    return;

  }

  const mascota: Mascota = {

    id: this.idMascota,

    ...this.mascotaForm.value

  };

  if (this.editando) {

    this.mascotaService.actualizar(mascota);

    Swal.fire({
      icon: 'success',
      title: 'Mascota actualizada',
      text: 'Los datos fueron actualizados correctamente.',
      timer: 1800,
      showConfirmButton: false
    }).then(() => {

      this.router.navigate(['/listar-mascotas']);

    });

  } else {

    this.mascotaService.agregar(mascota);

    Swal.fire({
      icon: 'success',
      title: 'Mascota registrada',
      text: 'La mascota fue registrada correctamente.',
      timer: 1800,
      showConfirmButton: false
    }).then(() => {

      this.router.navigate(['/listar-mascotas']);

    });

  }

}

}