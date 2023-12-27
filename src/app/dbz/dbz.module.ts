import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/listdbz.component';
import { AddCharacterComponent} from './components/addcharacter/addcharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListDBZComponent,
    AddCharacterComponent



  ],
  exports: [
    MainPageComponent,
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
