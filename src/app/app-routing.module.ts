import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path:'fabricante',loadChildren:()=>import('./fabricante/fabricante.module').then(m=>m.FabricanteModule)},
  {path:'veiculo',loadChildren:()=>import('./veiculo/veiculo.module').then(m=>m.VeiculoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
