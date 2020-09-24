import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShowComponent } from './select-show.component';

describe('SelectShowComponent', () => {
  let component: SelectShowComponent;
  let fixture: ComponentFixture<SelectShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
