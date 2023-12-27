import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './listdbz.component.html'
})

export class ListDBZComponent {


  //Para traer los characters desde la main page components.ts
  // sustituir en el listdbz component html (izq), que a su vez son enviados a mainpage.html
  //aqui agregar decorador @input, asi desaparace el por defecto que es trunks,
  //y sale krilin y goku

  @Input()

  public characterList: Character[] =[
    {
      name: 'Trunks',
      power: 10

    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?:string):void {
    // TODO: Emitir el ID del personaje

    if (!id) return;
    this.onDelete.emit (id);

  }

}
