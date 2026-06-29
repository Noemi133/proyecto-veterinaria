import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Mascota } from '../../../models/mascota';
import { MascotaService } from '../../../core/services/mascota.service';

@Component({
  selector: 'app-listar-mascotas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './listar-mascotas.html',
  styleUrl: './listar-mascotas.css'
})
export class ListarMascotas implements OnInit {

  mascotas: Mascota[] = [];

  filtro = '';

  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarMascotas();
  }

  cargarMascotas(): void {
    this.mascotas = this.mascotaService.obtenerTodas();
  }

  get mascotasFiltradas(): Mascota[] {

    return this.mascotas.filter(m =>
      m.nombre.toLowerCase().includes(
        this.filtro.toLowerCase()
      )
    );

  }

  editar(id: number): void {

    this.router.navigate([
      '/editar-mascota',
      id
    ]);

  }

eliminar(id: number): void {

  Swal.fire({

    title: '¿Eliminar mascota?',

    text: 'Esta acción no se puede deshacer.',

    icon: 'warning',

    showCancelButton: true,

    confirmButtonColor: '#d33',

    cancelButtonColor: '#3085d6',

    confirmButtonText: 'Sí, eliminar',

    cancelButtonText: 'Cancelar'

  }).then((result) => {

    if (result.isConfirmed) {

      this.mascotaService.eliminar(id);

      this.cargarMascotas();

      Swal.fire({

        icon: 'success',

        title: 'Eliminada',

        text: 'La mascota fue eliminada correctamente.',

        timer: 1700,

        showConfirmButton: false

      });

    }

  });

}

}