import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TheaterComponent } from './components/Admin/theater/theater.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { LoginComponent } from './components/Customer/login/login.component';
import { RegisterComponent } from './components/Customer/register/register.component';
import { ChangePasswordComponent } from './components/Customer/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/Customer/forgot-password/forgot-password.component';
import { BookingHistoryComponent } from './components/Customer/booking-history/booking-history.component';
import { EditUserComponent } from './components/Customer/edit-user/edit-user.component';
import { SearchMovieComponent } from './components/Customer/search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
  
    MovielistComponent,
  
    TheaterComponent,
  
    ScreenComponent,
  
    LoginComponent,
  
    RegisterComponent,
  
    ChangePasswordComponent,
  
    ForgotPasswordComponent,
  
    BookingHistoryComponent,
  
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
