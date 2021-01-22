import { ServerErrorsInterceptor } from './shared/server-errors.interceptor';
import { environment } from './../environments/environment';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtModule } from '@auth0/angular-jwt';
import { AddComponentC } from './views/contribuyentes/add/add.component';
import { ListComponentC } from './views/contribuyentes/list/list.component';
import { EditComponentC } from './views/contribuyentes/edit/edit.component';
import { AddComponentD } from './views/documentos/add/add.component';
import { ListComponentD } from './views/documentos/list/list.component';
import { EditComponentD } from './views/documentos/edit/edit.component';
import { AddComponentE } from './views/entidad/add/add.component';
import { ListComponentE } from './views/entidad/list/list.component';
import { EditComponentE } from './views/entidad/edit/edit.component';
import { ContribuyenteService } from './services/contribuyente.service';

export function tokenGetter() {
  return sessionStorage.getItem(environment.TOKEN_NAME);
}

@NgModule({
  declarations: [
    AppComponent,
    AddComponentC,
    ListComponentC,
    EditComponentC,
    AddComponentD,
    ListComponentD,
    EditComponentD,
    AddComponentE,
    ListComponentE,
    EditComponentE
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8085"],
        disallowedRoutes: ["http://localhost:8085/login/"]
      },
    })

  
 
  ],
  providers: [ContribuyenteService,
    {
      
      provide:HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi:true,
    }],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
