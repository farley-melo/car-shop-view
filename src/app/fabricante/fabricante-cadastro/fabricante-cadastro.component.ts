import {Component, EventEmitter, OnInit} from '@angular/core';
import {FabricanteService} from '../fabricante.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fabricante-cadastro',
  templateUrl: './fabricante-cadastro.component.html',
  styleUrls: ['./fabricante-cadastro.component.css']
})
export class FabricanteCadastroComponent implements OnInit {

  constructor(private fabricanteService:FabricanteService,
              private formBuilder:FormBuilder,
              private router:Router) { }
  formularioDeCadastro:FormGroup;
  ngOnInit(): void {
    this.formularioDeCadastro=this.formBuilder.group({
      nome:[null,[Validators.required]]
    });
  }


  cadastrarFabricante(formularioDeCadastro: FormGroup) {
    if(this.formularioDeCadastro.valid){
      this.fabricanteService.emissor.emit(formularioDeCadastro.value);
      this.router.navigate(['/fabricante/pesquisa']);
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
