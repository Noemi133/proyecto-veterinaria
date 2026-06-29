import { Injectable } from '@angular/core';
import { Historial } from '../../models/historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private historiales: Historial[] = [];

  constructor() {
    this.cargar();
  }

  obtenerTodos(): Historial[] {
    return [...this.historiales];
  }

  obtenerPorId(id: number): Historial | undefined {
    return this.historiales.find(h => h.id === id);
  }

  agregar(historial: Historial): void {

    historial.id = Date.now();

    this.historiales.push(historial);

    this.guardar();

  }

  actualizar(historial: Historial): void {

    const index = this.historiales.findIndex(
      h => h.id === historial.id
    );

    if(index!=-1){

      this.historiales[index]=historial;

      this.guardar();

    }

  }

  eliminar(id:number):void{

    this.historiales=this.historiales.filter(
      h=>h.id!=id
    );

    this.guardar();

  }

  private guardar():void{

    localStorage.setItem(
      'historiales',
      JSON.stringify(this.historiales)
    );

  }

  private cargar():void{

    const datos=localStorage.getItem('historiales');

    if(datos){

      this.historiales=JSON.parse(datos);

    }

  }

}