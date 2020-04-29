import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratoreComponent } from './decoratore.component';

describe('DecoratoreComponent', () => {
  let component: DecoratoreComponent;
  let fixture: ComponentFixture<DecoratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
