import {Component, Input} from '@angular/core';
import {Show} from '../../tv/tv.models';
import {BookmarksService} from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent {
  @Input() item: Show;

  constructor(private bs: BookmarksService<Show>) {
  }

  saveBookmark() {
    this.bs.add(this.item);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

}
