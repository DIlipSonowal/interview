import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbhvrsbjComponent } from './subbhvrsbj.component';

describe('SubbhvrsbjComponent', () => {
  let component: SubbhvrsbjComponent;
  let fixture: ComponentFixture<SubbhvrsbjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbhvrsbjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbhvrsbjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
