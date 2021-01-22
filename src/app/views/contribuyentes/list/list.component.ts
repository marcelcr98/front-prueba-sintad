import { Component, OnInit } from '@angular/core';
import { Contribuyente } from 'src/app/models/Contribuyente';
import { ContribuyenteService } from 'src/app/services/contribuyente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentC implements OnInit {

  contribuyentes:Contribuyente[];

  constructor(private contribuyente:ContribuyenteService,private router:Router) { }

  ngOnInit(){

    this.contribuyente.getContribuyente()
    .subscribe(data=>{

      this.contribuyentes=data;
    })
  }

}
