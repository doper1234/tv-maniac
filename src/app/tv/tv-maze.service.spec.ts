import {TestBed} from '@angular/core/testing';
import {TvMazeService} from './tv-maze.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ShowDetails} from '../shared/models/tv.models';
import {TvMazeEndpointsService} from './tv-maze-endpoints.service';
import {of} from 'rxjs';

describe('TvMazeService', () => {
  let service: TvMazeService;
  let httpMock: HttpTestingController;
  const testApiRoot = 'https://test.api.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TvMazeService,
        // can also be written like this
        /*{
          provide: TvMazeService,
          // for singleton
          useExisting: TvMazeService,
          // for new instance
          useClass: TvMazeService
        }*/
        {
          provide: TvMazeEndpointsService,
          // can use a class or useValue
          // useClass: class {
          //   root = 'http://test.api.com';
          // }
          useValue: {
            root: testApiRoot,
            // can also define/redefine methods
            getShow: of({id: '123'}),
            somePromise: Promise.resolve({id: '123'})
          }
        }
      ]
    });
    service = TestBed.get(TvMazeService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('getShow', () => {
    service.getShow('321')
      .subscribe(show => {
        // can use jasmine.object containing to check specific values
        expect(show).toEqual(jasmine.objectContaining({id: 321, name: 'Show Three'}));
      });
    const req = httpMock.expectOne(testApiRoot + '/shows/321?embed=episodes');
    expect(req.request.method).toBe('GET');
    req.flush(<Partial<ShowDetails>>{
      id: 321,
      name: 'Show Three'
    });
  });
});
