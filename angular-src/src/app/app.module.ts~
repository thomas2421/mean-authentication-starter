import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InputMaxComponent } from './components/input-max/input-max.component';
import { InputRepsComponent } from './components/input-reps/input-reps.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {WeightService} from './services/weight.service';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { RoundPipe } from './pipes/round.pipe';


const appRoutes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'max', component: InputMaxComponent, canActivate:[AuthGuard]},
  {path:'work', component: InputRepsComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InputMaxComponent,
    InputRepsComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService,
    WeightService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
