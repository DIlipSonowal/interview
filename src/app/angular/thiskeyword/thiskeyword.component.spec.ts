import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiskeywordComponent } from './thiskeyword.component';

describe('ThiskeywordComponent', () => {
  let component: ThiskeywordComponent;
  let fixture: ComponentFixture<ThiskeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiskeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiskeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
