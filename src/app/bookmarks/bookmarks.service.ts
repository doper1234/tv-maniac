import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark> {

  private items: T[] = [];
  private readonly apiRoot = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {
    this.http.get<T[]>(this.apiRoot)
      .subscribe(items => this.items = items);
  }

  getAll(): T[] {
    return [...this.items];
  }

  add(item: T): void {
    this.http.post(this.apiRoot, item)
      .subscribe(() => this.items.push(item));
  }

  remove(id: BookmarkId): void {
    this.http.delete(`${this.apiRoot}/${id}`)
      .subscribe(() => this.items = this.items.filter(b => b.id !== id));
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }
}
