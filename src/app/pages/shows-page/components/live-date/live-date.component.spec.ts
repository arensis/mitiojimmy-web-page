import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDateComponent } from './live-date.component';

describe('LiveDateComponent', () => {
  let component: LiveDateComponent;
  let fixture: ComponentFixture<LiveDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
