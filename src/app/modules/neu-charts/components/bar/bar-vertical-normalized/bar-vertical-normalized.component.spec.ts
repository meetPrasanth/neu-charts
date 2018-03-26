import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarVerticalNormalizedComponent } from './bar-vertical-normalized.component';

describe('BarVerticalNormalizedComponent', () => {
  let component: BarVerticalNormalizedComponent;
  let fixture: ComponentFixture<BarVerticalNormalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarVerticalNormalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarVerticalNormalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
