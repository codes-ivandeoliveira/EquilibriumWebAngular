import { Processos } from './model/processos';
import { Component, OnInit } from '@angular/core';
import { ProcessosService } from '../sevice/processos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit{

  processos : Observable <Processos[]>;
  displayedColumns = ['numeroProcesso', 'tipoProcesso', 'dataEntrada', 'valorRecurso', 'objetivo']

  //processoService: ProcessosService;

  constructor(private processoService: ProcessosService){
    //this.processos= [];

    //this.processoService= new ProcessosService;
    this.processos=this.processoService.list();
  }

  ngOnInit(): void {

  }

}
