import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSessionsComponent } from './report-sessions.component';

describe('ReportSessionsComponent', () => {
  let component: ReportSessionsComponent;
  let fixture: ComponentFixture<ReportSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
