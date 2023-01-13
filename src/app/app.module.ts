import { NgModule } from '@angular/core';


import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorService } from './service/Interceptor.service';
import { AppService } from './service/app.service';

//components
import { AgregarProyectoComponent } from './editComponentes/agregar-proyecto/agregar-proyecto.component';
import { AgregarEducacionComponent } from './editComponentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './editComponentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarConocimientoComponent } from './editComponentes/agregar-conocimiento/agregar-conocimiento.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AppComponent } from './app.component';
import { ConocimientoComponent } from './componentes/conocimiento/conocimiento.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { CommonModule } from '@angular/common';


import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HabilidadesBlandasComponent } from './componentes/habilidades-blandas/habilidades-blandas.component';
import { AgregarHabilidadBlandaComponent } from './editComponentes/agregar-habilidades-blanda/agregar-habilidades-blanda.component';
import { EditInicioComponent } from './editComponentes/edit-inicio/edit-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienciaComponent,
    ConocimientoComponent,
    ProyectoComponent,
    EducacionComponent,
    NavbarComponent,
    AgregarProyectoComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarConocimientoComponent,
    InicioComponent,
    LoginComponent,
    HabilidadesBlandasComponent,
    AgregarHabilidadBlandaComponent,
    EditInicioComponent
  ],
  imports: [
    
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  
   

    
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
