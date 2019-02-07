import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditWorkoutSheetComponent } from '../edit-workout-sheet/edit-workout-sheet.component';
import { AddWorkoutComponent } from '../add-workout/add-workout.component';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { Workout } from '../../models/workout';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatBottomSheet, MatBottomSheetRef, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  workoutsCollectionRef: AngularFirestoreCollection<Workout>;
  workouts$: Observable<Workout[]>;
  private workoutDoc: AngularFirestoreDocument<Workout>;
  workout: Observable<Workout>;
  SNACKBAR_CONFIG: MatSnackBarConfig = {
    duration: 700,
  };

  constructor(
    private http: HttpClient,
    private workoutsService: WorkoutsService,
    private afs: AngularFirestore,
    private editWorkoutSheet: MatBottomSheet,
    private addWorkoutSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
  ) {
    this.workoutsCollectionRef = this.afs.collection<Workout>('workouts');
    this.workouts$ = this.workoutsCollectionRef.snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data: Workout = action.payload.doc.data();
            const id = action.payload.doc.id;
            console.log(id)
            console.log({ id, ...data });
            return { id, ...data };
          });
        }));
  }

  ngOnInit() { }

  update(workout: Workout) {
    if (workout) {
      this.workoutsCollectionRef.doc(workout.id).update(workout);
    }
  }

  add(workout: Workout) {
    if (workout) {
      this.workoutsCollectionRef.add(workout);
      this.snackBar.open('Workout added!', '', this.SNACKBAR_CONFIG);
    }
  }

  delete(workout: Workout) {
    if (workout) {
      this.workoutsCollectionRef.doc(workout.id).delete();
      this.snackBar.open('Workout deleted!', '', this.SNACKBAR_CONFIG);
    }
  }

  complete(workout) {
    if (workout && !workout.complete) {
      workout.complete = true;
      this.workoutsCollectionRef.doc(workout.id).update(workout);
    } else if (workout && workout.complete) {
      workout.complete = false;
      this.workoutsCollectionRef.doc(workout.id).update(workout);
    }
  }

  openAddSheet() {
    const addWorkoutSheetRef = this.addWorkoutSheet.open(AddWorkoutComponent);
    addWorkoutSheetRef.afterDismissed().subscribe((result: Workout) => {
      if (result) {
        this.add(result);
      }
    });
  }

  openEditSheet(passedWorkout: Workout) {
    const editWorkoutSheetRef = this.editWorkoutSheet.open(EditWorkoutSheetComponent, {
      data: {
        workout: passedWorkout,
      }
    });
    editWorkoutSheetRef.afterDismissed().subscribe((result: Workout) => {
      if (result) {
        this.update(result);
      }
    });
  }
}
