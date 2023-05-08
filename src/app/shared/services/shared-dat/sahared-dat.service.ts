import { Injectable } from '@angular/core';
import { movies } from '../../interfaces/movieInterface';

@Injectable({
  providedIn: 'root'
})
export class SaharedDatService {

  constructor() { }
  private movies:movies[]=[]
  setMovies(mov:movies[]){
    this.movies=mov;
  }
  getMovies():movies[]{
    return this.movies;
  }

}
