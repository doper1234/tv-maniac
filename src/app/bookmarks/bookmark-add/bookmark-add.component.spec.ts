import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Bookmark} from '@models';
import { Provider} from '@angular/core';
import {BookmarkAddComponent} from './bookmark-add.component';
import {BookmarksService} from '../bookmarks.service';
import {By} from '@angular/platform-browser';

describe('bookmark add', () => {
  let service: BookmarksService<Bookmark>;
  let fixture: ComponentFixture<BookmarkAddComponent>;
  let component: BookmarkAddComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkAddComponent],
      providers: [
        <Provider>{
          provide: BookmarksService,
          useValue: {
            add: jasmine.createSpy('add()'),
            has: () => {
            }
          }
        }
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BookmarkAddComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BookmarksService);
  });

  it('runs \'add\' method of bookmarks service with an item\'s', () => {
    component.item = {id: 123};
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});

    expect(service.add).toHaveBeenCalledTimes(1);
    expect(service.add).toHaveBeenCalledWith(component.item);
  });
});
