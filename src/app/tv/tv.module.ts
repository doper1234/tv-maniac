import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {TvMazeService} from './tv-maze.service';
import {HttpClientModule} from '@angular/common/http';
import {PosterComponent} from './poster/poster.component';
import {FormsModule} from '@angular/forms';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import {BookmarkAddComponent} from '../bookmarks/bookmark-add/bookmark-add.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import { EpisodisePipe } from './episodise.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BookmarksModule
  ],
  providers: [
    TvMazeService,
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodisePipe]
})
export class TvModule {
}
