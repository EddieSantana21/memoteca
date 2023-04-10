import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações filho',
      autoria: 'Pai',
      modelo: 'modelo3'
    }
    ,
    {
      conteudo: 'Minha propriedade é com @input',
      autoria: 'Filho',
      modelo: 'modelo2'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
