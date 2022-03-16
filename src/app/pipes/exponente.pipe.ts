import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class ExponentePipe implements PipeTransform {

  transform(value: number, exponente: number): unknown {
    let multiplicacion = value * exponente;
    return multiplicacion;
  }

}
