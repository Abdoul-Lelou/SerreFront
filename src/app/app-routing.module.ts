import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosSerreComponent } from './pages/infos-serre/infos-serre.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {component:LoginComponent, path:'login'},
  {component:InfosSerreComponent, path:'info'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
