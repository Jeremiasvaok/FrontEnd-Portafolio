import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion.model';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.components.html',
  styleUrls: ['./new-education.components.css']
})
export class NewEducationComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}