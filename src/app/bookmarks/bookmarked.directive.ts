import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {Bookmark} from '../shared/models/bookmarks.models';
import {BookmarksService} from './bookmarks.service';

// noinspection SpellCheckingInspection
@Directive({
  selector: '[tmBookmarked]',
  exportAs: 'bookmarked',
})
export class BookmarkedDirective {

  // usually we don't rename the input, but for directives it's ok
  @Input('tmBookmarked') item: Bookmark; // tslint:disable-line

  constructor(private bs: BookmarksService<Bookmark>) {
  }

  @HostBinding('class.transparent')
  transparent = false;

  @HostBinding('class.bookmarked')
  get isBookMarked() {
    return this.bs.has(this.item.id);
  }

  @HostListener('click', ['$event.target'])
  toggleTransparent(target: HTMLElement) {
    if (target.tagName === 'IMG') {
      this.transparent = !this.transparent;
    }
  }
}
