import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PosterComponent} from './poster.component';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {Show} from '../tv.models';

// naming convention, can use '<tm-poster>' or 'PosterComponent'
describe('<tm-poster>', () => {
  let fixture: ComponentFixture<PosterComponent>;
  let component: PosterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PosterComponent],
    })
      .compileComponents();
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
  });

  it('does not display img if show is not defined', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeNull();
  });

  it('shows img when show is defined', () => {
    const show: Partial<Show> = {id: 123, name: 'My Show'};

    component.show = show as Show;
    // detect changes must be called if changes are done on the component
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).not.toBeNull();
  });

  it('displays fallback image if needed', () => {
    const show: Partial<Show> = {id: 123, image: null};

    component.show = show as Show;
    // ngOnChanges needs to be called if we assign a value to an @Input()
    component.ngOnChanges();
    // detect changes must be called if changes are done on the component
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    // if what we're looking for is not in properties, check attributes
    expect(img.properties.src).toContain('fillmurray');
  });

  it('displays show image if provided', () => {
    const show: Partial<Show> = {
      id: 123,
      image: {
        medium: 'http://img.jpg', original: ''
      }
    };

    component.show = show as Show;
    component.ngOnChanges();
    // detect changes must be called if changes are done on the component
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('img'));
    // if what we're looking for is not in properties, check attributes
    expect(img.properties.src).toBe('http://img.jpg');
  });

});
