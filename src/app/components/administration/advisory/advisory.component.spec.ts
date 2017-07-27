import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryComponent } from './advisory.component';

describe('AdvisoryComponent', () => {
  let component: AdvisoryComponent;
  let fixture: ComponentFixture<AdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
