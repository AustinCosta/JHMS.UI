import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipment2Component } from './edit-equipment2.component';

describe('EditEquipment2Component', () => {
  let component: EditEquipment2Component;
  let fixture: ComponentFixture<EditEquipment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
