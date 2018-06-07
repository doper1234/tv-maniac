import {BookmarkedDirective} from './bookmarked.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, Provider} from '@angular/core';
import {Bookmark} from '../shared/models/bookmarks.models';
import {BookmarksService} from './bookmarks.service';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <div [tmBookmarked]="item" class="abc"></div>`,
})
class DummyComponent {
  item: Bookmark;
}

describe('BookmarkedDirective', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedDirective, DummyComponent],
      providers: [
        <Provider>{
          provide: BookmarksService,
          useValue: {
            has: id => id === 123
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });

  it('compiles', () => {
    expect(component).toBeTruthy();
  });

  it('adds "bookmarked"class if item is bookmarked', () => {
    component.item = {id: 123};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));
    console.log(host.classes);
    expect(host.classes.bookmarked).toBe(true);
  });

  it('does not adds "bookmarked"class if item is not bookmarked', () => {
    component.item = {id: 1232435};
    fixture.detectChanges();

    const host = fixture.debugElement.query(By.css('div'));
    console.log(host.classes);
    expect(host.classes.bookmarked).not.toBe(true);
  });

  it('does not initially add "transparent" class', () => {
    const host = fixture.debugElement.query(By.css('div'));
    expect(host.classes.transparent).toBeFalsy();
  });

  describe('transparent class', () => {
    it('adds when host image is clicked', () => {
      const host = fixture.debugElement.query(By.css('div'));
      component.item = {id: 1};

      host.triggerEventHandler('click', {target: {tagName: 'IMG'}});
      fixture.detectChanges();

      expect(host.classes.transparent).toBe(true);
    });

    it(`doesn't add when host element other than image is clicked`, () => {
      const host = fixture.debugElement.query(By.css('div'));
      component.item = {id: 1};

      host.triggerEventHandler('click', {target: {tagName: 'DIV'}});
      fixture.detectChanges();

      expect(host.classes.transparent).toBeFalsy();
    });
  });
});
