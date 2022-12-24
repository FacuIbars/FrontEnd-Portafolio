import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AgregarConocimientoComponent } from './editComponentes/agregar-conocimiento/agregar-conocimiento.component';
import { AgregarEducacionComponent } from './editComponentes/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './editComponentes/agregar-experiencia/agregar-experiencia.component';
import { AgregarProyectoComponent } from './editComponentes/agregar-proyecto/agregar-proyecto.component';
import { EditProyectoComponent } from './editComponentes/edit-proyecto/edit-proyecto.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  { path: 'editarProyecto/:id', component: EditProyectoComponent },
  { path: 'agregarProyecto', component:AgregarProyectoComponent },
  { path: 'agregarEducacion', component:AgregarEducacionComponent },
  { path: 'agregarExperiencia', component:AgregarExperienciaComponent },
  { path: 'agregarConocimiento', component:AgregarConocimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
