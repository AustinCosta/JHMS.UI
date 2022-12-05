import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventvehicleComponent } from './add-eventvehicle.component';

describe('AddEventvehicleComponent', () => {
  let component: AddEventvehicleComponent;
  let fixture: ComponentFixture<AddEventvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
