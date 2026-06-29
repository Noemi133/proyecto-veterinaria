import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';

import { Cita } from '../../../models/cita';
import { CitaService } from '../../../core/services/cita.service';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css'
})
export class Calendario implements OnInit {

  citas: Cita[] = [];

  filtro = '';

  constructor(
    private citaService: CitaService
  ) {}

  ngOnInit(): void {

    this.cargar();

  }

  cargar(): void {

    this.citas = this.citaService.obtenerTodas();

  }

  cambiarEstado(cita: Cita): void {

    this.citaService.actualizar(cita);

    Swal.fire({

      icon: 'success',

      title: 'Estado actualizado',

      text: 'La cita fue actualizada correctamente.',

      timer: 1200,

      showConfirmButton: false

    });

  }

}