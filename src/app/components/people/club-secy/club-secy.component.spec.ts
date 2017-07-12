import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSecyComponent } from './club-secy.component';

describe('ClubSecyComponent', () => {
  let component: ClubSecyComponent;
  let fixture: ComponentFixture<ClubSecyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubSecyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
