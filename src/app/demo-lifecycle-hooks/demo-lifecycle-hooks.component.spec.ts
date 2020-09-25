import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLifecycleHooksComponent } from './demo-lifecycle-hooks.component';

describe('DemoLifecycleHooksComponent', () => {
  let component: DemoLifecycleHooksComponent;
  let fixture: ComponentFixture<DemoLifecycleHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLifecycleHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLifecycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
