import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000

  },{
    id: uuid(),
    name: 'Goku',
    power: 95000
  },{
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }

];

//nombre de metodo (recibe un character tipo character)
onNewCharacter(character:Character):void{

  const newCharacter: Character = {
    id: uuid(),
    ...character
  };

  //para agregar character en la lista anterior, al final (push), al inicio (unshift)

  this.characters.push(character);

};

//onDeleteCharacter (index:number){
//  this.characters.splice(index, 1);
//}

deleteCharacterById (id?:string){


  //filtrara todo el arreglo donde el character.id es diferente
  //filter barre con todos los argumentos del arreglo, y el elemento que no cumpla
  this.characters = this.characters.filter (character => character.id != id);
}


}
