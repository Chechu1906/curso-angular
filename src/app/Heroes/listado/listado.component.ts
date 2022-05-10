import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironmal', 'Hulk', 'Thor'];
  borrado: string = '';

  public borrarHeroe(){
    this.borrado = this.heroes.shift() || '';    
  }
}
