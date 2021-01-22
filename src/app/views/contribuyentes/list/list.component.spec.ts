import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentC } from './list.component';

describe('ListComponent', () => {
  let component: ListComponentC;
  let fixture: ComponentFixture<ListComponentC>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponentC ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponentC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
