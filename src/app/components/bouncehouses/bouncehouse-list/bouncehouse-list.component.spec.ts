import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncehouseListComponent } from './bouncehouse-list.component';

describe('BouncehouseListComponent', () => {
  let component: BouncehouseListComponent;
  let fixture: ComponentFixture<BouncehouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouncehouseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncehouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
