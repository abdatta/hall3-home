import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRoomComponent } from './guest-room.component';

describe('GuestRoomComponent', () => {
  let component: GuestRoomComponent;
  let fixture: ComponentFixture<GuestRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
