import { environment } from './../../environments/environment';
import { Contribuyente } from './../models/Contribuyente';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribuyenteService {


  contribuyente: ContribuyenteService[];
  constructor(protected http: HttpClient) { }

   Url='http://localhost:8085/contribuyentes';

   getContribuyente(){

    return this.http.get<Contribuyente[]>(this.Url);
   }
}