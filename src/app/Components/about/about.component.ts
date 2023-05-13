import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Model/persona.model'
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
   selector: 'app-about',
   templateUrl:'./about.component.html',
   styleUrls:['./about.component.css'],
})

export class AboutComponent implements OnInit{
 user : Persona = new Persona(" ", "", " ");

 constructor(public userService : PersonaService){

 }
 ngOnInit(): void {
     this.userService.getUser().subscribe(data => {
      this.user = data;
     })
 }
}