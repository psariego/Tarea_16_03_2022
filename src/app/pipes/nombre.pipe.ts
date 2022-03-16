import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: string, nombre: string): unknown {
    value = nombre.toUpperCase();
    return value;
  }

}
