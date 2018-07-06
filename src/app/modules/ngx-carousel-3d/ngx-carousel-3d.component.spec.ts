import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCarousel3dComponent } from './ngx-carousel-3d.component';

describe('NewsTileComponent', () => {
  let component: NgxCarousel3dComponent;
  let fixture: ComponentFixture<NgxCarousel3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCarousel3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCarousel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
