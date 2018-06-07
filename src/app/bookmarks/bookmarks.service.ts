import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from '../shared/models/bookmarks.models';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService<T extends Bookmark> {
  loaded$ = new BehaviorSubject<boolean>(false);
  private items: T[] = [];
  private items$ = new BehaviorSubject<T[]>([]);
  private readonly apiRoot = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {

    this.http.get<T[]>(this.apiRoot)
      .subscribe(items => {
        this.updateItems(items);
        this.loaded$.next(true);
      });
  }

  getAll(): Observable<T[]> {
    //needs to be share if we want every usage to have the same instance
    return this.items$.pipe(share());
  }

  add(item: T): void {
    this.http.post(this.apiRoot, item)
      .subscribe(() => this.updateItems([...this.items, item]));
  }

  remove(id: BookmarkId): void {
    this.http.delete(`${this.apiRoot}/${id}`)
      .subscribe(() => this.updateItems(this.items.filter(b => b.id !== id)));
  }

  has(id: BookmarkId): boolean {
    return this.items.some(item => item.id === id);
  }

  private updateItems(items: T[]): void {
    this.items = items;
    this.items$.next(items);
  }
}
