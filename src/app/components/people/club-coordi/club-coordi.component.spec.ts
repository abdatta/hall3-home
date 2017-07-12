import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCoordiComponent } from './club-coordi.component';

describe('ClubCoordiComponent', () => {
  let component: ClubCoordiComponent;
  let fixture: ComponentFixture<ClubCoordiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubCoordiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubCoordiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
