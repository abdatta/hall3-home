import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardensComponent } from './wardens.component';

describe('WardensComponent', () => {
  let component: WardensComponent;
  let fixture: ComponentFixture<WardensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
