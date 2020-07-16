import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HecComponent } from './hec.component';

describe('HecComponent', () => {
  let component: HecComponent;
  let fixture: ComponentFixture<HecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
