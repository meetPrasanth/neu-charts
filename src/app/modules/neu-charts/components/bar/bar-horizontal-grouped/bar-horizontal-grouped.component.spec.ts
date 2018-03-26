import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHorizontalGroupedComponent } from './bar-horizontal-grouped.component';

describe('BarHorizontalGroupedComponent', () => {
  let component: BarHorizontalGroupedComponent;
  let fixture: ComponentFixture<BarHorizontalGroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarHorizontalGroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarHorizontalGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
