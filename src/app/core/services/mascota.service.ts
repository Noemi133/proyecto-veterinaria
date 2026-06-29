import { Injectable } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotas: Mascota[] = [];

  constructor() {
    this.cargar();
  }

  obtenerTodas(): Mascota[] {
    return [...this.mascotas];
  }

  obtenerPorId(id: number): Mascota | undefined {

    return this.mascotas.find(
      mascota => mascota.id === id
    );

  }

  agregar(mascota: Mascota): void {

    mascota.id = Date.now();

    this.mascotas.push(mascota);

    this.guardar();

  }

  actualizar(mascotaActualizada: Mascota): void {

    const indice = this.mascotas.findIndex(
      mascota => mascota.id === mascotaActualizada.id
    );

    if (indice !== -1) {

      this.mascotas[indice] = mascotaActualizada;

      this.guardar();

    }

  }

  eliminar(id: number): void {

    this.mascotas = this.mascotas.filter(
      mascota => mascota.id !== id
    );

    this.guardar();

  }

  cantidadMascotas(): number {

    return this.mascotas.length;

  }

  private guardar(): void {

    localStorage.setItem(
      'mascotas',
      JSON.stringify(this.mascotas)
    );

  }

  private cargar(): void {

    const datos = localStorage.getItem('mascotas');

    if (datos) {

      this.mascotas = JSON.parse(datos);

    }

  }

}