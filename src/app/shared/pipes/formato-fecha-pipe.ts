import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha',
})
export class FormatoFechaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
