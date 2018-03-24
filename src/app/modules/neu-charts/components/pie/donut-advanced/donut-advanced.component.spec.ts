import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutAdvancedComponent } from './donut-advanced.component';

describe('DonutAdvancedComponent', () => {
  let component: DonutAdvancedComponent;
  let fixture: ComponentFixture<DonutAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
