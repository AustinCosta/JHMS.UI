import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addevent3Component } from './addevent3.component';

describe('Addevent3Component', () => {
  let component: Addevent3Component;
  let fixture: ComponentFixture<Addevent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addevent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addevent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
