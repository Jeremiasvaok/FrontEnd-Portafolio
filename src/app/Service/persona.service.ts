import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { Persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'localhost:8080/' + 'personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ 'traer/perfil');
  }
}
