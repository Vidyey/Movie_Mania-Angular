import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './components/Customer/search-movie/search-movie.component';

import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TheaterComponent } from './components/Admin/theater/theater.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { CityComponent } from './components/SeatBooking/city/city.component';
import { DashBoardComponent } from './components/SeatBooking/dash-board/dash-board.component';
import { SeatMapComponent } from './components/SeatBooking/seat-map/seat-map.component';
import { HeaderComponent } from './components/SeatBooking/header/header.component';
import { SelectMovieComponent } from './components/SeatBooking/select-movie/select-movie.component';
import { SelectTheatreComponent } from './components/SeatBooking/select-theatre/select-theatre.component';
import { SelectShowComponent } from './components/SeatBooking/select-show/select-show.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { ShowComponent } from './components/Admin/show/show.component';
import { BookingHistoryComponent } from './components/Customer/booking-history/booking-history.component';
import { ChangePasswordComponent } from './components/Customer/change-password/change-password.component';
import { EditUserComponent } from './components/Customer/edit-user/edit-user.component';
import { ForgotPasswordComponent } from './components/Customer/forgot-password/forgot-password.component';
import { LoginComponent } from './components/Customer/login/login.component';
import { RegisterComponent } from './components/Customer/register/register.component';
import { SelectPaymentComponent } from './components/SeatBooking/select-payment/select-payment.component';
import { BookingDetailsComponent } from './components/SeatBooking/booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
  
    MovielistComponent,
  
    TheaterComponent,
  
    ScreenComponent,
  
    CityComponent,
  
    DashBoardComponent,
  
    SeatMapComponent,
  
    HeaderComponent,
  
    SelectMovieComponent,
  
    SelectTheatreComponent,
  
    SelectShowComponent,
    ReversePipe,
  
    ShowComponent,
    LoginComponent,
  
    RegisterComponent,
  
    ChangePasswordComponent,
  
    ForgotPasswordComponent,
  
    BookingHistoryComponent,
  
    EditUserComponent,

    SelectPaymentComponent,

    BookingDetailsComponent
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
