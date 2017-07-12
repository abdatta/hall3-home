import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SGComponent } from './sg.component';

describe('SGComponent', () => {
  let component: SGComponent;
  let fixture: ComponentFixture<SGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
