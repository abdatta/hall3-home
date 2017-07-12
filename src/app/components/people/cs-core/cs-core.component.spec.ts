import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCoreComponent } from './cs-core.component';

describe('CsCoreComponent', () => {
  let component: CsCoreComponent;
  let fixture: ComponentFixture<CsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
