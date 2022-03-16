import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExponentePipe } from './pipes/exponente.pipe';
import { NombrePipe } from './pipes/nombre.pipe';
import { EspaciosPipe } from './pipes/espacios.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentePipe,
    NombrePipe,
    EspaciosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
