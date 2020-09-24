import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Admin} from '../models/Admin';


import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';
import { Screenn } from '../models/Screenn';
import { Show } from '../models/Show';
import { Customer } from '../models/Customer';
import { Ticket } from '../models/Ticket';
import { Seat } from '../models/Seat';
import { Booking } from '../models/Booking';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
 

  private baseURL = 'http://localhost:1091/movie';
  private headers = new HttpHeaders ({'Content-Type': 'application/json'});
  private options = {headers: this.headers};
  constructor(private http:HttpClient) { }
//Pratik Module

makepayment(bid: number) {
  return this.http.get<Booking>(this.baseURL +`/makePayment/${bid}`);
}
getTheaterbyMovieId(movieId:number) {
  return this.http.get<Theater[]>(this.baseURL +`/getTheater/${movieId}`);
}

getShowbyId( id : number) {
  return this.http.get<Show>(this.baseURL +`/getShowbyId/${id}`);
}

selectSeatbyid(seatId: number) {
  return this.http.get<Seat>( this.baseURL +`/selectSeat/${seatId}`);
}

getchoosePaymentMethod(sid: any, loc: any[], cust: number) {

  return this.http.put<Booking>( this.baseURL +`/choosePaymentmethod/${sid}/${cust}`,loc);
  
}
// Prajakta's Module 
public addmovie(movie:Movie)
{
  console.log(movie);
  return this.http.post( this.baseURL +"/addMovie",movie,{responseType:'text'});
}

public addShow(show:Show)
{
return this.http.post(this.baseURL +"/addShow",show,{responseType:'text'});

}

public getallMovies()
{
  return this.http.get<Movie[]>(this.baseURL +"/getMovies");
}


public getAllShows()
{
return this.http.get<Show[]>(this.baseURL +"/getShow");
}


public addtheater(theater:Theater)
{
  console.log(theater);
  return this.http.post( this.baseURL + "/addTheater",theater,{responseType:'text'});
}

public deletetheater(theaterId:number)
{
  return this.http.delete(this.baseURL +`/deleteTheater/${theaterId}`);
}

public getAllTheaters()
{
  return this.http.get<Theater[]>( this.baseURL +"/getTheater");
}

public getAllScreens()
{
  return this.http.get<Screenn[]>( this.baseURL +"/getScreen");
}
public addScreen(screen:Screenn,theaterId:number)
{
  return this.http.post( this.baseURL + `/addScreen/${theaterId}`,screen,{responseType:'text'});
}

public deleteScreen(screenId:number)
{
  return this.http.delete( this.baseURL + `/deleteScreen/${screenId}`,{responseType:'text'});
} 

public deleteShow(showId:number)
{
  return this.http.delete(this.baseURL + `/deleteShow/${showId}`,{responseType:'text'});
}
registerNewUser(customer: Customer) {
  return this.http.post( this.baseURL + "/regCust", customer,  { responseType: 'text' as 'json' });
}

registerNewAdmin(admin: Admin) {
  return this.http.post( this.baseURL + "/regAdmin", admin,  { responseType: 'text' as 'json' });
}


login(username, password) {
  return this.http.get<boolean>( this.baseURL + "/custLogin/" + username + "/" + password);
}

loginAdmin(username, password) {
  return this.http.get<boolean>( this.baseURL + "/adminLogin/" + username + "/" + password);
}

changePassword(username, currentPass, newPass) {
  return this.http.get( this.baseURL + "/changePassword/"+username + "/" + currentPass + "/" + newPass, { responseType: 'text' as 'json' });
}

changePasswordAdmin(username, currentPass, newPass) {
  return this.http.get( this.baseURL + "/changePasswordAdmin/"+username + "/" + currentPass + "/" + newPass, { responseType: 'text' as 'json' });
}

forgotPassword(uname,securityQue,securityAns) {
  let forgotPassRequest={
     "username":uname,
     "securityQuestion":securityQue,
     "securityAnswer":securityAns
   }
   return this.http.post<String>( this.baseURL + "/forgotPassword",forgotPassRequest, { responseType: 'text' as 'json' });
 }

 forgotPasswordAdmin(uname,securityQue,securityAns) {
  let forgotPassRequest={
     "username":uname,
     "securityQuestion":securityQue,
     "securityAnswer":securityAns
   }
   return this.http.post<String>( this.baseURL + "/forgotPasswordAdmin",forgotPassRequest, { responseType: 'text' as 'json' });
 }


 public getcustomerdetails(username) 
{
 
  return this.http.get<Customer>( this.baseURL + "/getCust/"+username);
}

public getAdmindetails(username) 
{
 
  return this.http.get<Admin>( this.baseURL + "/getAdmin/"+username);
}

public editUser(cust:Customer)
{
 
 return this.http.put( this.baseURL + "/editCust",cust,{responseType:'text'})
}

public editAdmin(admin:Admin)
{
 
 return this.http.put( this.baseURL + "/editAdmin",admin,{responseType:'text'})
}

public getBookings(username){
      return this.http.get<Ticket[]>( this.baseURL + "/myTickets/"+username);
}

}
