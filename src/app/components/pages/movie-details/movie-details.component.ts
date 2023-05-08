import { Component } from '@angular/core';
import { MovieDatService } from 'src/app/shared/services/movie-dat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  id:any;
  movie:any
  constructor(private movies: MovieDatService,private route: ActivatedRoute){
    
  }

 async ngOnInit(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.movie=await this.movies.getMovie(this.id);
    
  }
 

}
