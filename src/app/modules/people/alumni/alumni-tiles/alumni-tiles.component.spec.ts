import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniTilesComponent } from './alumni-tiles.component';

describe('AlumniTilesComponent', () => {
  let component: AlumniTilesComponent;
  let fixture: ComponentFixture<AlumniTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
