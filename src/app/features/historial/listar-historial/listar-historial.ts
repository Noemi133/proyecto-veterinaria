import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import Swal from 'sweetalert2';

import { Historial } from '../../../models/historial';
import { HistorialService } from '../../../core/services/historial.service';

@Component({
  selector: 'app-listar-historial',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './listar-historial.html',
  styleUrl: './listar-historial.css'
})
export class ListarHistorial implements OnInit {

  historiales: Historial[] = [];

  filtro = '';

  constructor(
    private historialService: HistorialService
  ) {}

  ngOnInit(): void {

    this.cargar();

  }

  cargar(): void {

    this.historiales = this.historialService.obtenerTodos();

  }

  get historialesFiltrados(): Historial[] {

    return this.historiales.filter(h =>
      h.mascotaNombre.toLowerCase()
      .includes(this.filtro.toLowerCase())
    );

  }

  eliminar(id: number): void {

    Swal.fire({

      title: '¿Eliminar historial?',

      text: 'Esta acción no se puede deshacer.',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Eliminar',

      cancelButtonText: 'Cancelar'

    }).then(result => {

      if(result.isConfirmed){

        this.historialService.eliminar(id);

        this.cargar();

        Swal.fire({

          icon:'success',

          title:'Historial eliminado',

          timer:1500,

          showConfirmButton:false

        });

      }

    });

  }

}