import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCareersComponent } from './report-careers.component';

describe('ReportCareersComponent', () => {
  let component: ReportCareersComponent;
  let fixture: ComponentFixture<ReportCareersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCareersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
