import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addcharacter.component.html'
})

export class AddCharacterComponent  {

  //para enviar propiedad y characters a mainpagecomponent.ts
  //nombrepropiedad: tipo(extraido de aC) <va a emitir un character|tipo de dato> = new eventemitter

  @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();


    public character: Character = {
      name: '',
      power: 0
    };

    emitCharacter (): void {
      console.log (this.character);

      //para que no acepte valor en 0 en nombre
      if(this.character.name.length === 0) return;

      //para emitir el nuevo character
      this.onNewCharacter.emit(this.character);


//para limpiar el formulario
      this.character = {name: '', power: 0};
    }





}
