import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { Workout } from 'src/app/models/workout';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-workout-sheet',
  templateUrl: './edit-workout-sheet.component.html',
  styleUrls: ['./edit-workout-sheet.component.scss']
})
export class EditWorkoutSheetComponent implements OnInit {
  workout: Workout;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<EditWorkoutSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.workout = this.data.workout;
  }

  confirm() {
    this.bottomSheetRef.dismiss(this.workout);
  }

  cancel() {
    this.bottomSheetRef.dismiss();
  }

}
