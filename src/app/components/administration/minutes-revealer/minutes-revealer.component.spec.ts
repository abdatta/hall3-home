import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesRevealerComponent } from './minutes-revealer.component';

describe('MinutesRevealerComponent', () => {
  let component: MinutesRevealerComponent;
  let fixture: ComponentFixture<MinutesRevealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutesRevealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesRevealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
