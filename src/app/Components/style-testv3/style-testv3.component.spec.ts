import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTestv3Component } from './style-testv3.component';

describe('StyleTestv3Component', () => {
  let component: StyleTestv3Component;
  let fixture: ComponentFixture<StyleTestv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTestv3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTestv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
