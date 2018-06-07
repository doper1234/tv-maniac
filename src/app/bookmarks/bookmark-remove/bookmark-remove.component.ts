import {Component, Input} from '@angular/core';
import {Show} from '../../shared/models/tv.models';
import {BookmarksService} from '../bookmarks.service';

@Component({
  selector: 'tm-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.scss']
})
export class BookmarkRemoveComponent {
  @Input() item: Show;

  constructor(private bs: BookmarksService<Show>) {
  }

  removeBookmark() {
    this.bs.remove(this.item.id);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }

}
