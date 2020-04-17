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
  inscricaoEmissor:Subscription;

  constructor(private fabricanteService:FabricanteService) { }



   ngOnInit(): void {
    this.inscricao= this.fabricanteService.listarFabricantes().subscribe(res=>{this.listaDeFabricantes=res.sort((a,b)=>a.codigo-b.codigo)});
     this.inscricaoEmissor=this.fabricanteService.emissorInput.subscribe(result=>{
       this.listaDeFabricantes.push(result);
     })
  }




  excluirFabricante(linha: HTMLTableRowElement, codigo: number) {
    this.fabricanteService.deletarFabricante(codigo).subscribe();
    linha.remove();

  }

  ngOnDestroy(): void {
    if(this.inscricao){
      this.inscricao.unsubscribe();
      this.inscricaoEmissor.unsubscribe();
    }

  }

  editarFabricate(fabricante: Fabricante, linha: HTMLTableRowElement) {
      this.fabricanteService.emissorUpdate.emit(fabricante);
      linha.remove();
  }
}



