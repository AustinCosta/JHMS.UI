import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvent2Component } from './add-event2.component';

describe('AddEvent2Component', () => {
  let component: AddEvent2Component;
  let fixture: ComponentFixture<AddEvent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEvent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEvent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
