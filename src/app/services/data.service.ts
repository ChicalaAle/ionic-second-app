import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComponentInterface } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient)
  {}


  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getMenuOpts(){
    return this.http.get<ComponentInterface[]>("/assets/data/menu-opts.json");
  }

  getAlbums(){
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getHeroes(){
    return this.http.get<any[]>("/assets/data/superheroes.json")
      .pipe(
        delay( 1500 )
      );
  }

}
