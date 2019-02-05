import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { BackEndService }  from './services/back-end.service';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatProgressSpinnerModule, MatBottomSheetModule } from '@angular/material';
import { MdcListModule, MdcDrawerModule } from '@angular-mdc/web';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EditWorkoutSheetComponent } from './components/edit-workout-sheet/edit-workout-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WorkoutComponent,
    EditWorkoutSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MdcListModule,
    MatSidenavModule,
    MatToolbarModule,
    MdcDrawerModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BackEndService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  entryComponents: [EditWorkoutSheetComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
