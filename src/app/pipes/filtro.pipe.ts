import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any, texto: string = '', searchKey: string = 'title'): any[] {

    console.log(arreglo);

    if(texto === ''){
      return arreglo;
    }

    if( !arreglo ){
      return arreglo;
    }
    
    texto = texto.toLocaleLowerCase();

    return arreglo.filter( 
      item => item[searchKey].toLocaleLowerCase().includes( texto )
     );
  }

}
