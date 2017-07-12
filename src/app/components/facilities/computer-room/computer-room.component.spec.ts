import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerRoomComponent } from './computer-room.component';

describe('ComputerRoomComponent', () => {
  let component: ComputerRoomComponent;
  let fixture: ComponentFixture<ComputerRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
