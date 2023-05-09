import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit{
nombre: string;
descripcion: string;
link: string;
constructor(private proyectoS: ProyectoService, private router: Router){}
  ngOnInit(): void {
  
}

onCreate():void{
  const proyecto = new Proyecto(this.nombre, this.descripcion, this.link);
  this.proyectoS.save(proyecto).subscribe(
    data=>{
      alert("proyecto añadido correctamente");
      this.router.navigate(['']);
    },err=>{
      alert("fallo");
      this.router.navigate(['']);
    }
  )
}
}
