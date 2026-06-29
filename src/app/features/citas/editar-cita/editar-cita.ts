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
import { Cita } from '../../../models/cita';

import { MascotaService } from '../../../core/services/mascota.service';
import { CitaService } from '../../../core/services/cita.service';

@Component({
  selector: 'app-editar-cita',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-cita.html',
  styleUrl: './editar-cita.css'
})
export class EditarCita implements OnInit {

  citaForm!: FormGroup;

  mascotas: Mascota[] = [];

  citaId!: number;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private citaService: CitaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.mascotas = this.mascotaService.obtenerTodas();

    this.citaForm = this.fb.group({

      mascotaId: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      veterinario: ['', Validators.required],
      motivo: ['', Validators.required],
      estado: ['', Validators.required],
      observaciones: ['']

    });

    this.citaId = Number(this.route.snapshot.paramMap.get('id'));

    const cita = this.citaService.obtenerPorId(this.citaId);

    if (!cita) {

      Swal.fire(
        'Error',
        'La cita no existe.',
        'error'
      );

      this.router.navigate(['/listar-citas']);

      return;

    }

    this.citaForm.patchValue(cita);

  }

  actualizar(): void {

    if (this.citaForm.invalid) {

      this.citaForm.markAllAsTouched();

      return;

    }

    const mascota = this.mascotas.find(
      m => m.id == this.citaForm.value.mascotaId
    );

    const cita: Cita = {

      id: this.citaId,

      mascotaId: mascota!.id,

      mascotaNombre: mascota!.nombre,

      fecha: this.citaForm.value.fecha,

      hora: this.citaForm.value.hora,

      veterinario: this.citaForm.value.veterinario,

      motivo: this.citaForm.value.motivo,

      estado: this.citaForm.value.estado,

      observaciones: this.citaForm.value.observaciones

    };

    this.citaService.actualizar(cita);

    Swal.fire({

      icon: 'success',

      title: 'Cita actualizada',

      timer: 1500,

      showConfirmButton: false

    });

    this.router.navigate(['/listar-citas']);

  }

}