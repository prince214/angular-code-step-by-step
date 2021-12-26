import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestv1Component } from './style-testv1.component';

describe('StyleTestv1Component', () => {
  let component: StyleTestv1Component;
  let fixture: ComponentFixture<StyleTestv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTestv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTestv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
