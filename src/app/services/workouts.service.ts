import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {
  private backEndUrl = 'api/workouts';

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get(this.backEndUrl);
  }
}
