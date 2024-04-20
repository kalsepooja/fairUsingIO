import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairDashboradComponent } from './fair-dashborad.component';

describe('FairDashboradComponent', () => {
  let component: FairDashboradComponent;
  let fixture: ComponentFixture<FairDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairDashboradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
