import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex_HecComponent } from './ex_hec.component';

describe('Ex_HecComponent', () => {
  let component: Ex_HecComponent;
  let fixture: ComponentFixture<Ex_HecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex_HecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex_HecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
