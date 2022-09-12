import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalCompComponent } from './animal-comp/animal-comp.component';
import { FruitCompComponent } from './fruit-comp/fruit-comp.component';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalCompComponent,
    FruitCompComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
