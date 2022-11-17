import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceHouseCreateComponent } from './bounce-house-create.component';

describe('BounceHouseCreateComponent', () => {
  let component: BounceHouseCreateComponent;
  let fixture: ComponentFixture<BounceHouseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounceHouseCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounceHouseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
