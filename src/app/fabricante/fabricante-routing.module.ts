import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FabricanteCadastroComponent} from './fabricante-cadastro/fabricante-cadastro.component';
import {FabricantePesquisaComponent} from './fabricante-pesquisa/fabricante-pesquisa.component';


const routes: Routes = [
  {path:'',component:FabricanteCadastroComponent,children:[
      {path:'pesquisa',component:FabricantePesquisaComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricanteRoutingModule { }
