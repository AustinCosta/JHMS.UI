import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventequipmentComponent } from './add-eventequipment.component';

describe('AddEventequipmentComponent', () => {
  let component: AddEventequipmentComponent;
  let fixture: ComponentFixture<AddEventequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventequipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
