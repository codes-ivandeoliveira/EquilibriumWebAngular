import { Processos } from './../processos/model/processos';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  private readonly API='/assets/processos.json';

  constructor(private httpClient: HttpClient ) { }

  list () {

return this.httpClient.get<Processos[]>(this.API);

  }
}
