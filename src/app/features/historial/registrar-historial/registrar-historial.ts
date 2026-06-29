import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import Swal from 'sweetalert2';

import { Mascota } from '../../../models/mascota';
import { Historial } from '../../../models/historial';

import { MascotaService } from '../../../core/services/mascota.service';
import { HistorialService } from '../../../core/services/historial.service';

@Component({
  selector: 'app-registrar-historial',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registrar-historial.html',
  styleUrl: './registrar-historial.css'
})
export class RegistrarHistorial implements OnInit {

  historialForm!: FormGroup;

  mascotas: Mascota[] = [];

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private historialService: HistorialService
  ) {}

  ngOnInit(): void {

    this.mascotas = this.mascotaService.obtenerTodas();

    this.historialForm = this.fb.group({

      mascotaId: ['', Validators.required],

      fecha: ['', Validators.required],

      peso: ['', Validators.required],

      temperatura: ['', Validators.required],

      diagnostico: ['', Validators.required],

      tratamiento: ['', Validators.required],

      medicamentos: ['', Validators.required],

      observaciones: [''],

      veterinario: ['', Validators.required]

    });

  }

  guardar(): void {

    if (this.historialForm.invalid) {

      this.historialForm.markAllAsTouched();

      Swal.fire(
        'Formulario',
        'Complete todos los campos.',
        'warning'
      );

      return;

    }

    const mascota = this.mascotas.find(
      m => m.id == this.historialForm.value.mascotaId
    );

    const historial: Historial = {

      id: 0,

      mascotaId: mascota!.id,

      mascotaNombre: mascota!.nombre,

      fecha: this.historialForm.value.fecha,

      peso: this.historialForm.value.peso,

      temperatura: this.historialForm.value.temperatura,

      diagnostico: this.historialForm.value.diagnostico,

      tratamiento: this.historialForm.value.tratamiento,

      medicamentos: this.historialForm.value.medicamentos,

      observaciones: this.historialForm.value.observaciones,

      veterinario: this.historialForm.value.veterinario

    };

    this.historialService.agregar(historial);

    Swal.fire({

      icon: 'success',

      title: 'Historial registrado',

      timer: 1500,

      showConfirmButton: false

    });

    this.historialForm.reset();

  }

}