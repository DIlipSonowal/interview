import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaptulationComponent } from './encaptulation.component';

describe('EncaptulationComponent', () => {
  let component: EncaptulationComponent;
  let fixture: ComponentFixture<EncaptulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncaptulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncaptulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
