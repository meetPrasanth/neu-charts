import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHorizontalStackedComponent } from './bar-horizontal-stacked.component';

describe('BarHorizontalStackedComponent', () => {
  let component: BarHorizontalStackedComponent;
  let fixture: ComponentFixture<BarHorizontalStackedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarHorizontalStackedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarHorizontalStackedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
