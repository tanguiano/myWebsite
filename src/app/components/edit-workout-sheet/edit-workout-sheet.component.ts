import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-edit-workout-sheet',
  templateUrl: './edit-workout-sheet.component.html',
  styleUrls: ['./edit-workout-sheet.component.scss']
})
export class EditWorkoutSheetComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<EditWorkoutSheetComponent>
  ) { }

  ngOnInit() {
  }

}
