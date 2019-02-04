import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class BackEndService implements InMemoryDbService {

  createDb() {
    const date = new Date().toDateString();
    const workouts: Workout[] = [
      { id: 1, complete: false, dateAdded: date, name: 'Bench Press', sets: 4, reps: 12, bodyParts: 'Chest & Triceps' }
    ];
    return { workouts };
  }
}
