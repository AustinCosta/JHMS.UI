import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editevent3Component } from './editevent3.component';

describe('Editevent3Component', () => {
  let component: Editevent3Component;
  let fixture: ComponentFixture<Editevent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editevent3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editevent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
