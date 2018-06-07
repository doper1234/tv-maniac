import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import {RouterModule} from '@angular/router';
import { StartsWithLetterDirective } from './forms/starts-with-letter.directive';
import { UserNameAvailableDirective } from './forms/user-name-available.directive';
import { SubmitIfValidDirective } from './forms/submit-if-valid.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LoaderComponent, StartsWithLetterDirective, UserNameAvailableDirective, SubmitIfValidDirective],
  exports: [LoaderComponent, StartsWithLetterDirective, UserNameAvailableDirective, SubmitIfValidDirective]
})
export class SharedModule { }
