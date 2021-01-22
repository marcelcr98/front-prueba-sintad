
import { GuardService } from './services/guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentE } from './views/entidad/list/list.component';
import { AddComponentE } from './views/entidad/add/add.component';
import { EditComponentE } from './views/entidad/edit/edit.component';
import { ListComponentC } from './views/contribuyentes/list/list.component';
import { AddComponentC } from './views/contribuyentes/add/add.component';
import { EditComponentC } from './views/contribuyentes/edit/edit.component';
import { ListComponentD } from './views/documentos/list/list.component';
import { EditComponentD } from './views/documentos/edit/edit.component';

const routes: Routes = [

  {path:'listar-e',component:ListComponentE },
  {path:'add-e',component:AddComponentE },
  {path:'edit-e',component:EditComponentE },

  {path:'listar-c',component:ListComponentC },
  {path:'add-c',component:AddComponentC },
  {path:'edit-c',component:EditComponentC },


  {path:'listar-d',component:ListComponentD },
  {path:'add-d',component:ListComponentD },
  {path:'edit-d',component:EditComponentD },




  /*
  {
    path: 'contribuyente', component: ContribuyenteComponent, children: [
      { path: 'nuevo', component: EditCComponent },
      { path: 'edicion/:id', component: EditCComponent }
    ], canActivate:[GuardService]
  },
  {
    path: 'documento', component: DocumentoComponent, children: [
      { path: 'nuevo', component: EditDComponent },
      { path: 'edicion/:id', component: EditDComponent  }
    ], canActivate:[GuardService]
  },
  {
    path: 'entidad', component: EntidadComponent, children: [
      { path: 'nuevo', component: EditEComponent },
      { path: 'edicion/:id', component: EditEComponent }
    ], canActivate:[GuardService]
  },
  { path: 'login', component:LoginComponent},*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
