import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../Services/usuario.model'
import { Retorno } from '../Services/retorno.model'

import { PlanoLeitura } from './planoleitura.model'

@Component({
  selector: 'app-planoleituraalteracao',
  templateUrl: './planoleitura-alteracao.component.html',
  styleUrls: ['./planoleitura.component.css']
})
export class PlanoleituraAlteracaoComponent implements OnInit {

  planoLeituraForm: FormGroup
  planoLeitura: PlanoLeitura

  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.planoLeituraForm = this.fb.group({
      nome_livro: this.fb.control('', [Validators.required]),
      inicio_leitura: this.fb.control('', [Validators.required]),
      termino_leitura: this.fb.control('', [Validators.required]),
      comentarios: this.fb.control('', [Validators.required])
    })
  }

}
