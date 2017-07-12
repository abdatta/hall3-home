import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMComponent } from './am.component';

describe('AMComponent', () => {
  let component: AMComponent;
  let fixture: ComponentFixture<AMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
