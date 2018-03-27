import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaNormalizedComponent } from './area-normalized.component';

describe('AreaNormalizedComponent', () => {
  let component: AreaNormalizedComponent;
  let fixture: ComponentFixture<AreaNormalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaNormalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaNormalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
