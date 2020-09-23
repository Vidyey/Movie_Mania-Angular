import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/Admin/movielist/movielist.component';
import { ScreenComponent } from './components/Admin/screen/screen.component';
import { TheaterComponent } from './components/Admin/theater/theater.component';
import { BookingHistoryComponent } from './components/Customer/booking-history/booking-history.component';
import { ChangePasswordComponent } from './components/Customer/change-password/change-password.component';
import { EditUserComponent } from './components/Customer/edit-user/edit-user.component';
import { ForgotPasswordComponent } from './components/Customer/forgot-password/forgot-password.component';
import { LoginComponent } from './components/Customer/login/login.component';
import { RegisterComponent } from './components/Customer/register/register.component';
import { SearchMovieComponent } from './components/Customer/search-movie/search-movie.component';



const routes: Routes = [
  {path:'',component:SearchMovieComponent},
  {path:'search',component:SearchMovieComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'theater',component:TheaterComponent},
  {path:'screen',component:ScreenComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'editUser',component:EditUserComponent},
  {path:'changePass',component:ChangePasswordComponent},
  {path:'forgotPass',component:ForgotPasswordComponent},
  {path:'bookings',component:BookingHistoryComponent},
  {path:'**',redirectTo:'/search',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
