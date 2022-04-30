import { Pipe, PipeTransform } from '@angular/core';
import { MutantesActivos } from '../interfaces/mutantes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( mutante:MutantesActivos ): string {

      return `assets/mutantes/no-image.png`;
   
  }

}
