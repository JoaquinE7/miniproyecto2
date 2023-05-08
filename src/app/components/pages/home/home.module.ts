import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DoomPipePipe } from 'src/app/shared/pipes/doom-pipe.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    DoomPipePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
