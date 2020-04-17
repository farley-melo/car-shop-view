import { Component, OnInit } from '@angular/core';
import {FabricanteService} from '../../fabricante/fabricante.service';
import {Fabricante} from '../../fabricante/fabricante';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
   listaDeFabricantes:Fabricante[];
  constructor(private fabricanteService:FabricanteService) { }

  ngOnInit(): void {
    this.fabricanteService.listarFabricantes().subscribe(lista=>this.listaDeFabricantes=lista);
  }

}
