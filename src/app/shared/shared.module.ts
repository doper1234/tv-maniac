import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {RouterModule} from '@angular/router';
import {EpisodisePipe} from '../episodise.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class SharedModule { }
