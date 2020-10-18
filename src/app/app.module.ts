import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
