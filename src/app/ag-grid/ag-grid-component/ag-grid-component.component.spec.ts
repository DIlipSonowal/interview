import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridComponentComponent } from './ag-grid-component.component';

describe('AgGridComponentComponent', () => {
  let component: AgGridComponentComponent;
  let fixture: ComponentFixture<AgGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
