import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuGraphComponent } from './neu-graph.component';

describe('NeuGraphComponent', () => {
  let component: NeuGraphComponent;
  let fixture: ComponentFixture<NeuGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
