import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeClientComponent } from './acme-client.component';

describe('AcmeClientComponent', () => {
  let component: AcmeClientComponent;
  let fixture: ComponentFixture<AcmeClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmeClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
