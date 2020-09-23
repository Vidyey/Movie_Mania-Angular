import { Injectable } from '@angular/core';
import {Admin} from '../models/Admin';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';
import { Screenn } from '../models/Screenn';
import { Show } from '../models/Show';
import { Customer } from '../models/Customer';
import { Ticket } from '../models/Ticket';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

 
public addmovie(movie:Movie)
{
  console.log(movie);
  return this.http.post("http://localhost:1091/movie/addMovie",movie,{responseType:'text'});
}

public addShow(show:Show)
{
return this.http.post("http://localhost:1091/movie/addShow",show,{responseType:'text'});

}

public getallMovies()
{
  return this.http.get<Movie[]>("http://localhost:1091/movie/getMovies");
}


public getAllShows()
{
return this.http.get<Show[]>("http://localhost:1091/movie/getShow");
}


public addtheater(theater:Theater)
{
  console.log(theater);
  return this.http.post("http://localhost:1091/movie/addTheater",theater,{responseType:'text'});
}

public deletetheater(theaterId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteTheater/${theaterId}`);
}

public getAllTheaters()
{
  return this.http.get<Theater[]>("http://localhost:1091/movie/getTheater");
}

public getAllScreens()
{
  return this.http.get<Screenn[]>("http://localhost:1091/movie/getScreen");
}
public addScreen(screen:Screenn,theaterId:number)
{
  return this.http.post(`http://localhost:1091/movie/addScreen/${theaterId}`,screen,{responseType:'text'});
}

public deleteScreen(screenId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteScreen/${screenId}`,{responseType:'text'});
} 

public deleteShow(showId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteShow/${showId}`,{responseType:'text'});
}
registerNewUser(customer: Customer) {
  return this.http.post("http://localhost:8080/movie/regCust", customer,  { responseType: 'text' as 'json' });
}

registerNewAdmin(admin: Admin) {
  return this.http.post("http://localhost:8080/movie/regAdmin", admin,  { responseType: 'text' as 'json' });
}


login(username, password) {
  return this.http.get<boolean>("http://localhost:8080/movie/custLogin/" + username + "/" + password);
}

loginAdmin(username, password) {
  return this.http.get<boolean>("http://localhost:8080/movie/adminLogin/" + username + "/" + password);
}

changePassword(username, currentPass, newPass) {
  return this.http.get("http://localhost:8080/movie/changePassword/"+username + "/" + currentPass + "/" + newPass, { responseType: 'text' as 'json' });
}

changePasswordAdmin(username, currentPass, newPass) {
  return this.http.get("http://localhost:8080/movie/changePasswordAdmin/"+username + "/" + currentPass + "/" + newPass, { responseType: 'text' as 'json' });
}

forgotPassword(uname,securityQue,securityAns) {
  let forgotPassRequest={
     "username":uname,
     "securityQuestion":securityQue,
     "securityAnswer":securityAns
   }
   return this.http.post<String>("http://localhost:8080/movie/forgotPassword",forgotPassRequest, { responseType: 'text' as 'json' });
 }

 forgotPasswordAdmin(uname,securityQue,securityAns) {
  let forgotPassRequest={
     "username":uname,
     "securityQuestion":securityQue,
     "securityAnswer":securityAns
   }
   return this.http.post<String>("http://localhost:8080/movie/forgotPasswordAdmin",forgotPassRequest, { responseType: 'text' as 'json' });
 }


 public getcustomerdetails(username) 
{
 
  return this.http.get<Customer>("http://localhost:8080/movie/getCust/"+username);
}

public getAdmindetails(username) 
{
 
  return this.http.get<Admin>("http://localhost:8080/movie/getAdmin/"+username);
}

public editUser(cust:Customer)
{
 
 return this.http.put("http://localhost:8080/movie/editCust",cust,{responseType:'text'})
}

public editAdmin(admin:Admin)
{
 
 return this.http.put("http://localhost:8080/movie/editAdmin",admin,{responseType:'text'})
}

public getBookings(username){
      return this.http.get<Ticket[]>("http://localhost:8080/movie/myTickets/"+username);
}

}
