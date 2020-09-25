import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailusComponent } from './emailus.component';

describe('EmailusComponent', () => {
  let component: EmailusComponent;
  let fixture: ComponentFixture<EmailusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
