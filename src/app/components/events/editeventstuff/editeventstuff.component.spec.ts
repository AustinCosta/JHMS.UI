import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventstuffComponent } from './editeventstuff.component';

describe('EditeventstuffComponent', () => {
  let component: EditeventstuffComponent;
  let fixture: ComponentFixture<EditeventstuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeventstuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeventstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
