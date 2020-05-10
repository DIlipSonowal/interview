import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IifeComponent } from './iife.component';

describe('IifeComponent', () => {
  let component: IifeComponent;
  let fixture: ComponentFixture<IifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
