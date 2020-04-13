import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricanteRoutingModule } from './fabricante-routing.module';
import { FabricanteCadastroComponent } from './fabricante-cadastro/fabricante-cadastro.component';
import { FabricantePesquisaComponent } from './fabricante-pesquisa/fabricante-pesquisa.component';
import {HttpClientModule} from '@angular/common/http';
import {FabricanteService} from './fabricante.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FabricanteCadastroComponent, FabricantePesquisaComponent],
  imports: [
    CommonModule,
    FabricanteRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers:[
    FabricanteService
  ]
})
export class FabricanteModule { }
