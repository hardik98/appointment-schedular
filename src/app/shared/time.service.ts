import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
}) 
export class TimeService {
   dataURL= '../assets/time.json';

   constructor(public http : HttpClient ) { 
     console.log('test',this.dataURL);


   }

   getTimeSlots(){
        return this.http.get(this.dataURL)
   }
}
