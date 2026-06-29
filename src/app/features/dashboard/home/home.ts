import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MascotaService } from '../../../core/services/mascota.service';
import { CitaService } from '../../../core/services/cita.service';
import { HistorialService } from '../../../core/services/historial.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  totalMascotas = 0;

  totalCitas = 0;

  totalHistoriales = 0;

  constructor(

    private router: Router,

    private mascotaService: MascotaService,

    private citaService: CitaService,

    private historialService: HistorialService

  ) {}

  ngOnInit(): void {

    this.cargarEstadisticas();

  }

  cargarEstadisticas(): void {

    this.totalMascotas =
      this.mascotaService.obtenerTodas().length;

    this.totalCitas =
      this.citaService.obtenerTodas().length;

    this.totalHistoriales =
      this.historialService.obtenerTodos().length;

  }

  ir(ruta: string): void {

    this.router.navigate([ruta]);

  }

  salir(): void {

     localStorage.removeItem('login');

  this.router.navigate(['']);
  }

}