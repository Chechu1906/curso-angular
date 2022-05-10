import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heroesModule } from './Heroes/heroes.module';
import { contadorModule } from './Contador/contador.module';

//Crear modulo contadorModule
//Declaraciones y exportaciones
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
