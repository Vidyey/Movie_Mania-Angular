import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTheatreComponent } from './select-theatre.component';

describe('SelectTheatreComponent', () => {
  let component: SelectTheatreComponent;
  let fixture: ComponentFixture<SelectTheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTheatreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
