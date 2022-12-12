import { Processos } from './../processos/model/processos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor() { }

  list () : Processos[]{
return [{
  numeroProcesso: 123 ,
  tipoProcesso: "Trabalhista",
  dataEntrada: 2022,
  valorRecurso: 20000,
  objetivo: "Indenização"


}]

  }
}
