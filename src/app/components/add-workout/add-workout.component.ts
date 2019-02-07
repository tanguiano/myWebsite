import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss']
})
export class AddWorkoutComponent implements OnInit {
  workout: Workout;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<AddWorkoutComponent>,
  ) { }

  ngOnInit() {
    this.workout = {
      complete: false,
      dateAdded: '',
      name: '',
      bodyParts: '',
      sets: 0,
      reps: 0
    }
    this.bottomSheetRef.backdropClick().subscribe((result) => {
      if (result) {
        this.cancel();
      }
    })
  }

  add() {
    this.bottomSheetRef.dismiss(this.workout);
  }

  cancel() {
    this.bottomSheetRef.dismiss();
  }

}
