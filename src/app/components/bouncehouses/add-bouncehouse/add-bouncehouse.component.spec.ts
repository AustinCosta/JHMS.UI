import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBouncehouseComponent } from './add-bouncehouse.component';

describe('AddBouncehouseComponent', () => {
  let component: AddBouncehouseComponent;
  let fixture: ComponentFixture<AddBouncehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBouncehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBouncehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
