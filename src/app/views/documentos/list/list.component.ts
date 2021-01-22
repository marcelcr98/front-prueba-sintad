import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Documento } from 'src/app/models/Documento';
import { DocumentoService } from 'src/app/services/documento.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentD implements OnInit {

  documentos:Documento[];

  constructor(private documento:DocumentoService,private router:Router) { }

  ngOnInit(){

    this.documento.getDocumento()
    .subscribe(data=>{

      this.documentos=data;
    })
  }

}