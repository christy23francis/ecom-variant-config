import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantDashboardComponent } from './variant-dashboard.component';

describe('VariantDashboardComponent', () => {
  let component: VariantDashboardComponent;
  let fixture: ComponentFixture<VariantDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
