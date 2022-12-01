import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddMovieComponent,
    EditMovieComponent
  ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        ReactiveFormsModule
    ]
})
export class MovieModule { }
