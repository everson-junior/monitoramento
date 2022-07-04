import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePoPageDynamicTableUsersComponent } from './sample-po-page-dynamic-table-users.component';

describe('SamplePoPageDynamicTableUsersComponent', () => {
  let component: SamplePoPageDynamicTableUsersComponent;
  let fixture: ComponentFixture<SamplePoPageDynamicTableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePoPageDynamicTableUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePoPageDynamicTableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
