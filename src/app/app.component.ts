import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-front-sintad';

  constructor(private router:Router) {}

  //Contribuyente
  ListarC(){
    this.router.navigate(["listar-c"])
  }

  NuevoC(){
    this.router.navigate(["listar-c"])
  }

  EditarC(){
    this.router.navigate(["listar-c"])
  }


    //Documentos
    ListarD(){
      this.router.navigate(["listar-d"])
    }
  
    NuevoD(){
      this.router.navigate(["listar-d"])
    }
  
    EditarD(){
      this.router.navigate(["listar-d"])
    }

    
  //Entidad
  ListarE(){
    this.router.navigate(["listar-e"])
  }

  NuevoE(){
    this.router.navigate(["listar-e"])
  }

  EditarE(){
    this.router.navigate(["listar-e"])
  }


}
