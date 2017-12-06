import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperybindingComponent } from './properybinding.component';

describe('ProperybindingComponent', () => {
  let component: ProperybindingComponent;
  let fixture: ComponentFixture<ProperybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
