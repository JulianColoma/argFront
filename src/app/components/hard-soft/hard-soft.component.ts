import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
skill: Skills[] = [];

  constructor(private skillS: SkillsService, private tokenService: TokenService){}

isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarSkills():void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }
  delete(id: number):void{
if(id != undefined){
  this.skillS.delete(id).subscribe(
    data=>{
      this.cargarSkills();
    }, err=>{
      alert("no se pudo borrar la skill");
    }
  )
}
  }
}
