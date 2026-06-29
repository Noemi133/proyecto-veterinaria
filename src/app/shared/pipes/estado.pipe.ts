import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado',
  standalone: true
})
export class EstadoPipe implements PipeTransform {

  transform(valor: string): string {

    switch(valor){

      case 'Pendiente':

        return '🟡 Pendiente';

      case 'Atendida':

        return '🟢 Atendida';

      case 'Cancelada':

        return '🔴 Cancelada';

      default:

        return valor;

    }

  }

}