import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCurriculumsComponent } from './list-curriculums.component';

describe('ListCurriculumsComponent', () => {
  let component: ListCurriculumsComponent;
  let fixture: ComponentFixture<ListCurriculumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCurriculumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCurriculumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
