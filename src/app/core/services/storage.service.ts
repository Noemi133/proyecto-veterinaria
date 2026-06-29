import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  guardar<T>(clave: string, datos: T[]): void {

    localStorage.setItem(
      clave,
      JSON.stringify(datos)
    );

  }

  obtener<T>(clave: string): T[] {

    const datos = localStorage.getItem(clave);

    if (!datos) {

      return [];

    }

    return JSON.parse(datos);

  }

  eliminar(clave: string): void {

    localStorage.removeItem(clave);

  }

  limpiar(): void {

    localStorage.clear();

  }

}