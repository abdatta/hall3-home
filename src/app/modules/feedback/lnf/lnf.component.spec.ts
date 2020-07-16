import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnfComponent } from './lnf.component';

describe('LnfComponent', () => {
  let component: LnfComponent;
  let fixture: ComponentFixture<LnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
