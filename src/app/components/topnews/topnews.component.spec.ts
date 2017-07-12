/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopnewsComponent } from './topnews.component';

describe('TopnewsComponent', () => {
  let component: TopnewsComponent;
  let fixture: ComponentFixture<TopnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
