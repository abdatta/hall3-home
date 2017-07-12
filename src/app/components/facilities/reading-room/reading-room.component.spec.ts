import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingRoomComponent } from './reading-room.component';

describe('ReadingRoomComponent', () => {
  let component: ReadingRoomComponent;
  let fixture: ComponentFixture<ReadingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
