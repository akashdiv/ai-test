import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutterdashboardComponent } from './outterdashboard.component';

describe('OutterdashboardComponent', () => {
  let component: OutterdashboardComponent;
  let fixture: ComponentFixture<OutterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutterdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
