import { environment } from './../../environments/environment';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Documento } from './../models/Documento';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService{

  documento: DocumentoService[];

  constructor(protected http: HttpClient) {
 
   }

   
 
    Url='http://localhost:8085/documentos';
 
    getDocumento(){
 
     return this.http.get<Documento[]>(this.Url);
    }
}