import {Component, OnInit, ViewChild} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '../tv.models';
import {catchError} from 'rxjs/operators';
import {BookmarksService} from '../../bookmarks/bookmarks.service';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];
  query = 'flash';

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>) {
    this.search('flash');
  }

  updateQueryAndSearch(query: string) {
    this.query = query;
    this.search(query);
  }

  search(query: string) {
    console.log(query);
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows,
        error => console.log(error));
  }

  get bookmarks(): Show[] {
    console.count('count me ');
    return this.bs.getAll() as Show[];
  }
/*
  saveBookmark(show: Show) {
    this.bs.add(show);
  }

  isBookmarked(show: Show): boolean {
    return this.bs.has(show.id);
  }*/
}
