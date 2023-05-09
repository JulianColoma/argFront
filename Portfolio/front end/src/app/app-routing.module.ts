import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion/nueva-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewSkillComponent } from './components/hard-soft/new-skill/new-skill.component';
import { EditSkillComponent } from './components/hard-soft/edit-skill/edit-skill.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NuevaEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'newskill', component:NewSkillComponent},
  {path:'editskill/:id', component:EditSkillComponent},
  {path:'editacercade/:id', component:EditAcercadeComponent},
  {path:'editproyecto/:id', component:EditProyectComponent},
  {path:'newproyecto', component:NewProyectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
