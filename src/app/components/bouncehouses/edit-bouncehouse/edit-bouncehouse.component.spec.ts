import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBouncehouseComponent } from './edit-bouncehouse.component';

describe('EditBouncehouseComponent', () => {
  let component: EditBouncehouseComponent;
  let fixture: ComponentFixture<EditBouncehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBouncehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBouncehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
