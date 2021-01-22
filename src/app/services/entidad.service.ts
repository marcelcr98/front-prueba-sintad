import { GenericService } from './generic.service';
import { Entidad } from './../models/Entidad';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  documento: EntidadService[];

  constructor(protected http: HttpClient) {
 
   }

   
 
    Url='http://localhost:8085/entidades';
 
    getEntidad(){
 
     return this.http.get<Entidad[]>(this.Url);
    }
}