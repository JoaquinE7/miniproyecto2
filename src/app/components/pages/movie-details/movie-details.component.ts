import { Component } from '@angular/core';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie:any
  constructor(private movies: MovieDatService){
    
  }
 async ngOnInit(){
    this.movie=await this.movies.getMovie();
    
  }


}
