import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarVerticalGroupedComponent } from './bar-vertical-grouped.component';

describe('BarVerticalGroupedComponent', () => {
  let component: BarVerticalGroupedComponent;
  let fixture: ComponentFixture<BarVerticalGroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarVerticalGroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarVerticalGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
