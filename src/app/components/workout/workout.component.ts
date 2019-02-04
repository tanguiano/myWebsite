import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { Workout } from '../../models/workout';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  workouts;
  constructor(
    private http: HttpClient,
    private workoutsService: WorkoutsService,
  ) { }

  ngOnInit() {
    this.workoutsService.getWorkouts().subscribe((result: Workout[]) => {
      console.log(result);
      this.workouts = result;
    });
  }
}
