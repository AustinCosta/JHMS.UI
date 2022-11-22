import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInflatablesComponent } from './view-inflatables.component';

describe('ViewInflatablesComponent', () => {
  let component: ViewInflatablesComponent;
  let fixture: ComponentFixture<ViewInflatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInflatablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInflatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
