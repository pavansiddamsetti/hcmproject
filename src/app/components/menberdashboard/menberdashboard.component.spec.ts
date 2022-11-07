import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenberdashboardComponent } from './menberdashboard.component';

describe('MenberdashboardComponent', () => {
  let component: MenberdashboardComponent;
  let fixture: ComponentFixture<MenberdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenberdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenberdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
