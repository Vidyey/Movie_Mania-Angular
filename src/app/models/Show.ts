import { Seat } from './Seat';

export class Show
{
    showId:number;
    showStartTime:string;
    showEndTime:string;
    showName:string;
    // movieName:string;
     screenId:number;
     theaterId:number;
    SeatList: Seat[];  // do check type
}