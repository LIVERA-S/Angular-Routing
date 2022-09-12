import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCompComponent } from './animal-comp/animal-comp.component';
import { FruitCompComponent } from './fruit-comp/fruit-comp.component';
import { GenericComponent } from './generic/generic.component';

const routes: Routes = [
  { path: 'animals', component: AnimalCompComponent },
  { path: 'fruits', component: FruitCompComponent},
  {path: '', redirectTo: '/animals', pathMatch: 'full'},
  { path: 'generic/:id', component: GenericComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
