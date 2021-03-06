import {Component} from '@angular/core';
import {TvMazeService} from '../tv-maze.service';
import {Show} from '../../shared/models/tv.models';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {startsWithLetterValidator} from '../../shared/forms/starts-with-letter.validator';
// import {userNameAvailableValidator} from '../../shared/forms/user-name-available.validator';
import {TvService} from '../tv.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'tm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    // good practice to use class, eg. Animations.fadeIn, Animations.fateIn(123)
    trigger('staggerAnim', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, transform: 'translateY(-50px)'}),
          stagger(300, [
            animate('0.1s', style({opacity: 1, transform: 'translateY(0) rotate(360000deg)'}))
          ])
        ], {optional: true}),
        query(':leave', [
          style({opacity: 0, transform: 'translateX(0) scale(1)'}),
          stagger(300, [
            animate('0.2s', style({opacity: 1, transform: 'translateX(-500px) scale(0)'}))
          ])
        ], {optional: true})

      ])
    ])
  ]
})
export class SearchComponent {
  shows: Show[] = [];
  query = 'flash';
  bookmarks$: Observable<Show[]>;
  bookmarksLoaded$: Observable<boolean>;
  searchForm: FormGroup;

  constructor(private tv: TvMazeService,
              private bs: BookmarksService<Show>,
              private tvService: TvService,
              private fb: FormBuilder) {
    this.initForm();
    this.search(this.searchForm.value.query);
    this.bookmarks$ = this.bs.getAll();
    this.bookmarksLoaded$ = this.bs.loaded$;
  }

  private initForm() {
    // const queryControl = this.fb.control('batman');
    this.searchForm = this.fb.group({
      query: [this.tvService.searchCache.query, [
        Validators.required,
        Validators.minLength(3),
        startsWithLetterValidator(),
      ], /*[userNameAvailableValidator
      ]*/],
    });
    // this.searchForm.valueChanges
    //   .pipe(map(({query}) => query))
    //   .subscribe(v => this.search(v));
    // or
    this.searchForm.get('query')
      .valueChanges
      .pipe(
        debounceTime(200),
        tap(() => console.log(this.searchForm.controls.query.errors)),
        tap(query => this.tvService.searchCache.query = query),
        filter(() => this.searchForm.valid)
      )
      .subscribe(this.search);
  }

  search = (query: string) => {
    this.tv.searchShows(query)
      .subscribe(shows => this.shows = shows,
        error => console.log(error));
  };

}


