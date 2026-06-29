import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';

import { Cita } from '../../../models/cita';
import { CitaService } from '../../../core/services/cita.service';

import { EstadoPipe } from '../../../shared/pipes/estado.pipe';
import { ResaltarEstado } from '../../../shared/directives/resaltar-estado';

@Component({
  selector: 'app-listar-citas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EstadoPipe,
    ResaltarEstado
  ],
  templateUrl: './listar-citas.html',
  styleUrl: './listar-citas.css'
})
export class ListarCitas implements OnInit {

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

  get citasFiltradas(): Cita[] {

    return this.citas.filter(cita =>

      cita.mascotaNombre
        .toLowerCase()
        .includes(this.filtro.toLowerCase())

    );

  }

  eliminar(id: number): void {

    Swal.fire({

      title: '¿Eliminar cita?',

      text: 'Esta acción no se puede deshacer.',

      icon: 'warning',

      showCancelButton: true,

      confirmButtonText: 'Eliminar',

      cancelButtonText: 'Cancelar',

      confirmButtonColor: '#d33'

    }).then(result => {

      if(result.isConfirmed){

        this.citaService.eliminar(id);

        this.cargar();

        Swal.fire({

          icon:'success',

          title:'Eliminada',

          text:'La cita fue eliminada correctamente.',

          timer:1500,

          showConfirmButton:false

        });

      }

    });

  }

}