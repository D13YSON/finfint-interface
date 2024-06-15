import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPortalComponent } from './dashboard-portal.component';

describe('DashboardPortalComponent', () => {
  let component: DashboardPortalComponent;
  let fixture: ComponentFixture<DashboardPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
