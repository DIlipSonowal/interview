import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkeywordComponent } from './newkeyword.component';

describe('NewkeywordComponent', () => {
  let component: NewkeywordComponent;
  let fixture: ComponentFixture<NewkeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewkeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
