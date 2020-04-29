import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftUnshiftComponent } from './shift-unshift.component';

describe('ShiftUnshiftComponent', () => {
  let component: ShiftUnshiftComponent;
  let fixture: ComponentFixture<ShiftUnshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftUnshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftUnshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
