import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { RouterLink } from '@angular/router';
import { DoomPipe } from './doom.pipe';



@NgModule({
  declarations: [
    MovieCardComponent,
    DoomPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
  ], 
  exports:[
    MovieCardComponent
  ]
})
export class MovieCardModule { 
 

}
