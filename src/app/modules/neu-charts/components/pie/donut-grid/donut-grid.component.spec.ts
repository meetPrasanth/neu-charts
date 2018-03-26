import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutGridComponent } from './donut-grid.component';

describe('DonutGridComponent', () => {
  let component: DonutGridComponent;
  let fixture: ComponentFixture<DonutGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
