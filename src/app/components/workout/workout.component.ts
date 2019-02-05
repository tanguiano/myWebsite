import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditWorkoutSheetComponent } from '../edit-workout-sheet/edit-workout-sheet.component';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { Workout } from '../../models/workout';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  workouts: any;
  private workoutDoc: AngularFirestoreDocument<Workout>;
  workout: Observable<Workout>;

  constructor(
    private http: HttpClient,
    private workoutsService: WorkoutsService,
    private afs: AngularFirestore,
    private editWorkoutSheet: MatBottomSheet
  ) {
    this.workoutDoc = this.afs.doc<Workout>('workouts/1');
    this.workout = this.workoutDoc.valueChanges();
  }

  ngOnInit() {
    this.workouts = this.afs.collection('workouts').valueChanges();
    console.log(this.workouts);
  }

  updateWorkout(workout: Workout) {
    this.workoutDoc.update(workout);
  }

  openEditWorkoutSheet() {
    this.editWorkoutSheet.open(EditWorkoutSheetComponent);
  }
}
