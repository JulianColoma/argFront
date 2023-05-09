import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{
 proyecto: Proyecto[] = [];
 isLogged = false;

 constructor(private proyectoS: ProyectoService, private tokenService: TokenService){

 }
  ngOnInit(): void {
   this.cargarProyecto();
   if(this.tokenService.getToken()){
    this.isLogged = true;
   }else{
    this.isLogged = false;
   }
 }

 cargarProyecto():void{
  this.proyectoS.lista().subscribe(
    data=>{
      this.proyecto = data;
    }
  )
 }

 delete(id?: number){
  if(id != undefined){
    this.proyectoS.delete(id).subscribe(
      data =>{
        this.cargarProyecto();
      }, err=>{
        alert("No se pudo eliminar")
      }
    )
  }
 }
}
