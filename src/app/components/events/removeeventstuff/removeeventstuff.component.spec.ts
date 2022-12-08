import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveeventstuffComponent } from './removeeventstuff.component';

describe('RemoveeventstuffComponent', () => {
  let component: RemoveeventstuffComponent;
  let fixture: ComponentFixture<RemoveeventstuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveeventstuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveeventstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
