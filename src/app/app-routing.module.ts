import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauhistoComponent } from './tableauhisto/tableauhisto.component';

const routes: Routes = [
 
  {path: 'temp_hum',component:TableauhistoComponent}, 
  {path: 'tens-hum',component:TableauhistoComponent}, 
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
