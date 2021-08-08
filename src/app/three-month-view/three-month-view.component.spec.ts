import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeMonthViewComponent } from './three-month-view.component';

describe('ThreeMonthViewComponent', () => {
  let component: ThreeMonthViewComponent;
  let fixture: ComponentFixture<ThreeMonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeMonthViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeMonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
