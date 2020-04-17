import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculoRoutingModule } from './veiculo-routing.module';
import { VeiculoComponent } from './veiculo/veiculo.component';


@NgModule({
  declarations: [VeiculoComponent],
  imports: [
    CommonModule,
    VeiculoRoutingModule
  ]
})
export class VeiculoModule { }
