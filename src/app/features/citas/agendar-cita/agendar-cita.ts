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
import { Cita } from '../../../models/cita';

import { MascotaService } from '../../../core/services/mascota.service';
import { CitaService } from '../../../core/services/cita.service';

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './agendar-cita.html',
  styleUrl: './agendar-cita.css'
})
export class AgendarCita implements OnInit {

  citaForm!: FormGroup;

  mascotas: Mascota[] = [];

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private citaService: CitaService
  ) {}

  ngOnInit(): void {

    this.mascotas = this.mascotaService.obtenerTodas();

    this.citaForm = this.fb.group({

      mascotaId: ['', Validators.required],

      fecha: ['', Validators.required],

      hora: ['', Validators.required],

      veterinario: ['', Validators.required],

      motivo: ['', Validators.required],

      estado: ['Pendiente', Validators.required],

      observaciones: ['']

    });

  }

  guardar(): void {

    if (this.citaForm.invalid) {

      this.citaForm.markAllAsTouched();

      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Complete todos los campos.'
      });

      return;

    }

    const mascota = this.mascotas.find(
      m => m.id == this.citaForm.value.mascotaId
    );

    const cita: Cita = {

      id: 0,

      mascotaId: mascota!.id,

      mascotaNombre: mascota!.nombre,

      fecha: this.citaForm.value.fecha,

      hora: this.citaForm.value.hora,

      veterinario: this.citaForm.value.veterinario,

      motivo: this.citaForm.value.motivo,

      estado: this.citaForm.value.estado,

      observaciones: this.citaForm.value.observaciones

    };

    this.citaService.agregar(cita);

    Swal.fire({

      icon: 'success',

      title: 'Cita registrada',

      text: 'La cita fue registrada correctamente.',

      timer: 1800,

      showConfirmButton: false

    });

    this.citaForm.reset();

    this.citaForm.patchValue({

      estado: 'Pendiente'

    });

  }

}