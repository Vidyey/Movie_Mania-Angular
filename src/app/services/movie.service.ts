import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { Theater } from '../models/Theater';
import { Customer } from '../models/Customer';
import { Ticket } from '../models/Ticket';
import { Admin } from '../models/Admin';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


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
 
public addmovie(movie:Movie)
{
  console.log(movie);
  return this.http.post("http://localhost:1091/movie/addMovie",movie,{responseType:'text'});
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

public addScreen(screen:Screen,theaterId:number)
{
  return this.http.post(`http://localhost:1091/movie/addScreen/${theaterId}`,screen,{responseType:'text'});
}

public deleteScreen(screenId:number)
{
  return this.http.delete(`http://localhost:1091/movie/deleteScreen/${screenId}`,{responseType:'text'});
} 
}
