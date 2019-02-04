import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WorkoutComponent } from './components/workout/workout.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'workout', component: WorkoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
