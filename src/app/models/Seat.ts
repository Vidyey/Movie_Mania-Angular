import { Booking } from './Booking';
import { Show } from './Show';

export class Seat{
    seatId:number;
    //  Enum<BookingState> seatStatus;
      seatPrice:number;
       booking:Booking;
       show:Show ;
       seatStatus:string;
     
       seatLocation:Array<number>;

}