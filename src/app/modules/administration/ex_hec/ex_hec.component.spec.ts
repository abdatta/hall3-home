import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExHecComponent } from './ex_hec.component';

describe('ExHecComponent', () => {
  let component: ExHecComponent;
  let fixture: ComponentFixture<ExHecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExHecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExHecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
