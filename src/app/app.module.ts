import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConocimientoComponent } from './componentes/conocimiento/conocimiento.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EditProyectoComponent } from './editComponentes/edit-proyecto/edit-proyecto.component';

import { AgregarProyectoComponent } from './editComponentes/agregar-proyecto/agregar-proyecto.component';
import { AgregarEducacionComponent } from './editComponentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './editComponentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarConocimientoComponent } from './editComponentes/agregar-conocimiento/agregar-conocimiento.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    ConocimientoComponent,
    ProyectoComponent,
    EducacionComponent,
    NavbarComponent,
    EditProyectoComponent,
    AgregarProyectoComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarConocimientoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
