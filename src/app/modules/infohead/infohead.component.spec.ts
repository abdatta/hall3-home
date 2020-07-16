import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoheadComponent } from './infohead.component';

describe('InfoheadComponent', () => {
  let component: InfoheadComponent;
  let fixture: ComponentFixture<InfoheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
