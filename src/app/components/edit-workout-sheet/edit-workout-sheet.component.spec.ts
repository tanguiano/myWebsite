import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkoutSheetComponent } from './edit-workout-sheet.component';

describe('EditWorkoutSheetComponent', () => {
  let component: EditWorkoutSheetComponent;
  let fixture: ComponentFixture<EditWorkoutSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkoutSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkoutSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
