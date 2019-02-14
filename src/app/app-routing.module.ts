import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WorkoutComponent } from './components/workout/workout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuardService } from './services/auth-guard.service';
import { SecureInnerPagesService } from './services/secure-inner-pages.service';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesService] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [SecureInnerPagesService] },
  { path: 'workout', component: WorkoutComponent, canActivate: [AuthGuardService] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesService] },
  { path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecureInnerPagesService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
