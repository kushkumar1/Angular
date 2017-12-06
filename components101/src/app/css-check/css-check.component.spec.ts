import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCheckComponent } from './css-check.component';

describe('CssCheckComponent', () => {
  let component: CssCheckComponent;
  let fixture: ComponentFixture<CssCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
