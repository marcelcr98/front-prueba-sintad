import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Entidad } from 'src/app/models/Entidad';
import { EntidadService } from 'src/app/services/entidad.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentE implements OnInit {

  entidades:Entidad[];

  constructor(private entidad:EntidadService,private router:Router) { }

  ngOnInit(){

    this.entidad.getEntidad()
    .subscribe(data=>{

      this.entidades=data;
    })
  }
}
