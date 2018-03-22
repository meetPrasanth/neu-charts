import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuChartsComponent } from './neu-charts.component';

describe('NeuChartsComponent', () => {
  let component: NeuChartsComponent;
  let fixture: ComponentFixture<NeuChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
