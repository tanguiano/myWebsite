import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditWorkoutSheetComponent } from '../edit-workout-sheet/edit-workout-sheet.component';
import { AddWorkoutComponent } from '../add-workout/add-workout.component';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { Workout } from '../../models/workout';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatBottomSheet, MatBottomSheetRef, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { map, timeout } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  currentDay: string;
  greeting: string;

  constructor(
    private http: HttpClient,
    private workoutsService: WorkoutsService,
    private afs: AngularFirestore,
    private editWorkoutSheet: MatBottomSheet,
    private addWorkoutSheet: MatBottomSheet,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
  ) {
    this.workoutsCollectionRef = this.afs.collection<Workout>('workouts', ref => {
      return ref.where('uid', '==', this.authService.getUser.uid);
    });
    this.workouts$ = this.workoutsCollectionRef.snapshotChanges()
      .pipe(
        map(actions => {
          console.log(actions);
          return actions.map(action => {
            const data: Workout = action.payload.doc.data();
            const id = action.payload.doc.id;
            const uid = this.authService.getUser.uid;
            this.update({ id, uid, ...data })
            return { id, uid, ...data };
          });
        }));
    this.currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });
    this.greetUser();
  }

  ngOnInit() {
    console.log(this.authService.getUser);
  }

  greetUser() {
    const currentHour = new Date().getHours();
    let greeting = '';
    console.log(currentHour);
    if (currentHour <= 11) {
      greeting = `${this.currentDay} - Good morning!`;
    } else if (currentHour >= 12 && currentHour <= 13) {
      greeting = `${this.currentDay} - Have a good Lunch!`;
    } else if (currentHour >= 14 && currentHour <= 16) {
      greeting = `${this.currentDay} - Good afternoon!`;
    } else if (currentHour >= 17 && currentHour <= 20) {
      greeting = `${this.currentDay} - Good evening!`;
    } else {
      greeting = 'Goodnight!';
    }
    const user = this.authService.getUser.displayName;
    this.greeting = `${greeting}, ${user}`;
  }

  update(workout: Workout) {
    if (workout) {
      console.log(workout);
      this.workoutsCollectionRef.doc(workout.id).update(workout);
    }
  }

  add(workout: Workout) {
    console.log(workout);
    if (workout) {
      const uid = this.authService.getUser.uid;
      this.workoutsCollectionRef.add({ uid, ...workout});
      this.snackBar.open('Workout added!', '', this.SNACKBAR_CONFIG);
    }
  }

  delete(workout: Workout) {
    if (workout) {
      this.workoutsCollectionRef.doc(workout.id).delete();
      this.snackBar.open('Workout deleted!', '', this.SNACKBAR_CONFIG);
    }
  }

  complete(workout: Workout) {
    if (workout && !workout.complete) {
      workout.complete = true;
      this.update(workout);
    } else if (workout && workout.complete) {
      workout.complete = false;
      this.update(workout);
    }
  }

  openAddSheet() {
    const addWorkoutSheetRef = this.addWorkoutSheet.open(AddWorkoutComponent);
    addWorkoutSheetRef.afterDismissed().subscribe((result: Workout) => {
      if (result) {
        console.log(result);
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
