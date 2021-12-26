import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestv2Component } from './style-testv2.component';

describe('StyleTestv2Component', () => {
  let component: StyleTestv2Component;
  let fixture: ComponentFixture<StyleTestv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTestv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTestv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
