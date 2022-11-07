import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliamsubmitComponent } from './cliamsubmit.component';

describe('CliamsubmitComponent', () => {
  let component: CliamsubmitComponent;
  let fixture: ComponentFixture<CliamsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliamsubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliamsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
