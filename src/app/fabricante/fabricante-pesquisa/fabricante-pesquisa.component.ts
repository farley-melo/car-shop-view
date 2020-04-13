import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Fabricante} from '../fabricante';
import {FabricanteService} from '../fabricante.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-fabricante-pesquisa',
  templateUrl: './fabricante-pesquisa.component.html',
  styleUrls: ['./fabricante-pesquisa.component.css']
})
export class FabricantePesquisaComponent implements OnInit,OnDestroy{
  listaDeFabricantes:Fabricante[]=[];
  inscricao:Subscription;

  constructor(private fabricanteService:FabricanteService) { }



   ngOnInit(): void {
     this.fabricanteService.listarFabricantes().subscribe(res=>{this.listaDeFabricantes=res.sort((a,b)=>a.codigo-b.codigo)});
     this.fabricanteService.emissor.subscribe(result=>{
       this.fabricanteService.cadastraFabricante(result).subscribe(
         result=>{this.listaDeFabricantes.push(result)}
       );
     })
  }




  excluirFabricante(linha: HTMLTableRowElement, codigo: number) {
    this.fabricanteService.deletarFabricante(codigo).subscribe();
    linha.remove();

  }

  ngOnDestroy(): void {
    if(this.inscricao){
      this.inscricao.unsubscribe();
    }

  }
}



