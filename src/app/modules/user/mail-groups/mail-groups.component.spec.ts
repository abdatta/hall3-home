import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailGroupsComponent } from './mail-groups.component';

describe('MailGroupsComponent', () => {
  let component: MailGroupsComponent;
  let fixture: ComponentFixture<MailGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
