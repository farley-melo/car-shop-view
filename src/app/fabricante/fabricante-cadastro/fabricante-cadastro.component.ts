import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {FabricanteService} from '../fabricante.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Fabricante} from '../fabricante';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-fabricante-cadastro',
  templateUrl: './fabricante-cadastro.component.html',
  styleUrls: ['./fabricante-cadastro.component.css']
})
export class FabricanteCadastroComponent implements OnInit ,OnDestroy{
  inscricao:Subscription;
  constructor(private fabricanteService:FabricanteService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnDestroy(): void {
       this.inscricao.unsubscribe();
    }
  formularioDeCadastro:FormGroup;
  ngOnInit(): void {
    this.formularioDeCadastro=this.formBuilder.group({
      nome:[null,[Validators.required]],
      codigo:[null]
    });
    this.router.navigate(['/fabricante/pesquisa']);
    this.fabricanteService.emissorUpdate.subscribe((res:Fabricante)=>{this.formularioDeCadastro.setValue({
      nome:res.nome,codigo:res.codigo
    })});
  }


  cadastrarFabricante(formularioDeCadastro: FormGroup) {
    if(this.formularioDeCadastro.valid){
      this.fabricanteService.emissorInput.emit(formularioDeCadastro.value);
      this.inscricao=this.fabricanteService.cadastraFabricante(formularioDeCadastro.value).subscribe();
      console.log(formularioDeCadastro.value);
      this.formularioDeCadastro.reset();

    }else{
      alert('verificar se todos os campos estao preenchidos corretamente');
    }

  }

  verificarErros() :string|null{
    if(this.formularioDeCadastro.get('nome').touched&&this.formularioDeCadastro.get('nome').invalid){
      return 'is-invalid'
    }else if(this.formularioDeCadastro.get('nome').touched&&this.formularioDeCadastro.get('nome').valid){
      return 'is-valid'
    }else{
      return null
    }
  }
}
