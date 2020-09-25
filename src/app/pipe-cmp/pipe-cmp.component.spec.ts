import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCmpComponent } from './pipe-cmp.component';

describe('PipeCmpComponent', () => {
  let component: PipeCmpComponent;
  let fixture: ComponentFixture<PipeCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
