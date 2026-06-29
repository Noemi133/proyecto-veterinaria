import { Injectable } from '@angular/core';
import { Cita } from '../../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citas: Cita[] = [];

  constructor() {
    this.cargar();
  }

  obtenerTodas(): Cita[] {
    return [...this.citas];
  }

  obtenerPorId(id: number): Cita | undefined {

    return this.citas.find(
      cita => cita.id === id
    );

  }

  agregar(cita: Cita): void {

    cita.id = Date.now();

    this.citas.push(cita);

    this.guardar();

  }

  actualizar(citaActualizada: Cita): void {

    const indice = this.citas.findIndex(
      cita => cita.id === citaActualizada.id
    );

    if (indice !== -1) {

      this.citas[indice] = citaActualizada;

      this.guardar();

    }

  }

  eliminar(id: number): void {

    this.citas = this.citas.filter(
      cita => cita.id !== id
    );

    this.guardar();

  }

  cantidadCitas(): number {

    return this.citas.length;

  }

  private guardar(): void {

    localStorage.setItem(
      'citas',
      JSON.stringify(this.citas)
    );

  }

  private cargar(): void {

    const datos = localStorage.getItem('citas');

    if (datos) {

      this.citas = JSON.parse(datos);

    }

  }
  

}