import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVRoomComponent } from './tvroom.component';

describe('TVRoomComponent', () => {
  let component: TVRoomComponent;
  let fixture: ComponentFixture<TVRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
