import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePoPageDynamicTableBasicComponent } from './sample-po-page-dynamic-table-basic.component';

describe('SamplePoPageDynamicTableBasicComponent', () => {
  let component: SamplePoPageDynamicTableBasicComponent;
  let fixture: ComponentFixture<SamplePoPageDynamicTableBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePoPageDynamicTableBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePoPageDynamicTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
