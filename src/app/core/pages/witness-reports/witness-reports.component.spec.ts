import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessReportsComponent } from './witness-reports.component';

describe('WitnessReportsComponent', () => {
  let component: WitnessReportsComponent;
  let fixture: ComponentFixture<WitnessReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WitnessReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
