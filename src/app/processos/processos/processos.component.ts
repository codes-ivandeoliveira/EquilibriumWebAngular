import { Processos } from './model/processos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent {

  processos : Processos[];
  displayedColumns = ['numeroProcesso', 'tipoProcesso', 'dataEntrada', 'valorRecurso', 'objetivo']

  constructor(){
    this.processos= [];
  }

}
