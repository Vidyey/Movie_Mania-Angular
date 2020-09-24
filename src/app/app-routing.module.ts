import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { ShowComponent } from './components/Admin/show/show.component';
import { TheaterComponent } from './components/Admin/theater/theater.component';
import { BookingHistoryComponent } from './components/Customer/booking-history/booking-history.component';
import { ChangePasswordComponent } from './components/Customer/change-password/change-password.component';
import { EditUserComponent } from './components/Customer/edit-user/edit-user.component';
import { ForgotPasswordComponent } from './components/Customer/forgot-password/forgot-password.component';
import { LoginComponent } from './components/Customer/login/login.component';
import { RegisterComponent } from './components/Customer/register/register.component';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { SeatMapComponent } from './components/SeatBooking/seat-map/seat-map.component';
import { CityComponent } from './components/SeatBooking/city/city.component';
import { SelectMovieComponent } from './components/SeatBooking/select-movie/select-movie.component';

import { SelectShowComponent } from './components/SeatBooking/select-show/select-show.component';
import { SelectTheatreComponent } from './components/SeatBooking/select-theatre/select-theatre.component';
import { SelectPaymentComponent } from './components/SeatBooking/select-payment/select-payment.component';
import { BookingDetailsComponent } from './components/SeatBooking/booking-details/booking-details.component';


const routes: Routes = [
  {path:'search',component:SearchMovieComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'theater',component:TheaterComponent},
  {path:'screen',component:ScreenComponent},
  {path:'selectseat', component:SeatMapComponent},
  {path:'citysetting',component:CityComponent},
  {path:'SelectMovie', component:SelectMovieComponent},
  {path:"selectshow", component:SelectShowComponent},
  {path:"selectTheatre",component:SelectTheatreComponent},
  {path:'selectPaymentOption',component:SelectPaymentComponent},
  {path:'BookingDetails',component:BookingDetailsComponent},
  {path:'show',component:ShowComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'editUser',component:EditUserComponent},
  {path:'changePass',component:ChangePasswordComponent},
  {path:'forgotPass',component:ForgotPasswordComponent},
  {path:'bookings',component:BookingHistoryComponent},
  {path:'**',redirectTo:'/search',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
