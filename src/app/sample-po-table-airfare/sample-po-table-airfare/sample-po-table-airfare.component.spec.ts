import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePoTableAirfareComponent } from './sample-po-table-airfare.component';

describe('SamplePoTableAirfareComponent', () => {
  let component: SamplePoTableAirfareComponent;
  let fixture: ComponentFixture<SamplePoTableAirfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePoTableAirfareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePoTableAirfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
