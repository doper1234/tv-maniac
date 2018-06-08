import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {TvMazeService} from './tv-maze.service';
import {HttpClientModule} from '@angular/common/http';
import {PosterComponent} from './poster/poster.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import {EpisodisePipe} from './episodise.pipe';
import {TvMazeEndpointsService} from './tv-maze-endpoints.service';
import {ClientAreaComponent} from '../dynamic/client-area/client-area.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BookmarksModule
  ],
  providers: [
    TvMazeService,
    TvMazeEndpointsService
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodisePipe]
})
export class TvModule {
}
