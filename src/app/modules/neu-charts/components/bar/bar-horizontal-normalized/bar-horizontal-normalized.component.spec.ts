import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHorizontalNormalizedComponent } from './bar-horizontal-normalized.component';

describe('BarHorizontalNormalizedComponent', () => {
  let component: BarHorizontalNormalizedComponent;
  let fixture: ComponentFixture<BarHorizontalNormalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarHorizontalNormalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarHorizontalNormalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
