import {Component} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '../tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, map, tap} from 'rxjs/operators';
import {startsWithLetterValidator} from '../../shared/forms/starts-with-letter.validator';
import {userNameAvailableValidator} from '../../shared/forms/user-name-available.validator';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  shows: Show[] = [];
  query = 'flash';
  bookmarks$: Observable<Show[]>;
  bookmarksLoaded$: Observable<boolean>;
  searchForm: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>,
              private fb: FormBuilder) {
    this.initForm();
    this.search('flash');
    this.bookmarks$ = this.bs.getAll();
    this.bookmarksLoaded$ = this.bs.loaded$;
  }

  private initForm() {
    // const queryControl = this.fb.control('batman');
    this.searchForm = this.fb.group({
      query: ['batman', [
        Validators.required,
        Validators.minLength(3),
        startsWithLetterValidator(),
      ], [userNameAvailableValidator
      ]],
    });
    // this.searchForm.valueChanges
    //   .pipe(map(({query}) => query))
    //   .subscribe(v => this.search(v));
    // or
    this.searchForm.get('query')
      .valueChanges
      .pipe(
        debounceTime(200),
        tap(v => console.log(this.searchForm.controls.query.errors)),
        filter(() => this.searchForm.valid)
      )
      .subscribe(this.search);
  }

  updateQueryAndSearch(query: string) {
    this.query = query;
    this.search(query);
  }

  search = (query: string) => {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows,
        error => console.log(error));
  };

}


