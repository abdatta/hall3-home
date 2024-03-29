import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfficeComponent } from './hall-office.component';

describe('HallOfficeComponent', () => {
  let component: HallOfficeComponent;
  let fixture: ComponentFixture<HallOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
