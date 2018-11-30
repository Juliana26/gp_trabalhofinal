import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../../Services/usuario.model'
import { Retorno } from '../../Services/retorno.model'

import { MetaLeitura } from './metaleitura.model'

@Component({
  selector: 'app-metaleitura',
  templateUrl: './metaleitura.component.html',
  styleUrls: ['./metaleitura.component.css']
})
export class MetaleituraComponent implements OnInit {

  metaLeituraForm: FormGroup
  metaleitura: MetaLeitura

  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.metaLeituraForm = this.fb.group({
      nome_livro: this.fb.control('', [Validators.required]),
      tempo_leitura: this.fb.control('', [Validators.required]),
      data_inicio_previsao: this.fb.control('', [Validators.required]),
      data_termino_previsao: this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
    })
  }
}
