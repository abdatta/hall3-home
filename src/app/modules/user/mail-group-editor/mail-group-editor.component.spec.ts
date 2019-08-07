import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailGroupEditorComponent } from './mail-group-editor.component';

describe('MailGroupEditorComponent', () => {
  let component: MailGroupEditorComponent;
  let fixture: ComponentFixture<MailGroupEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailGroupEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailGroupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
