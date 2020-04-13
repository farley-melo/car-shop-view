import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'fabricante',loadChildren:()=>import('./fabricante/fabricante.module').then(m=>m.FabricanteModule)},
  {path:'',redirectTo:'fabricante',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
