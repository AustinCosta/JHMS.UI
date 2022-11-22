import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInflatablesComponent } from './edit-inflatables.component';

describe('EditInflatablesComponent', () => {
  let component: EditInflatablesComponent;
  let fixture: ComponentFixture<EditInflatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInflatablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInflatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
