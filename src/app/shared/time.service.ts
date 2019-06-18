
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TimeService  {
  dataURL = '../assets/time.json';

  timeSlots: any = [
    {
        "time_slot_id": 0,
        "value": "09am-10am",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 1,
        "value": "10am-11am",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 2,
        "value": "11am-12pm",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 3,
        "value": "12pm-1pm",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 4,
        "value": "1pm-2pm",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 5,
        "value": "2pm-3pm",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 6,
        "value": "3pm-4pm",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 7,
        "value": "4pm-5pm",
        "data": [],
        "val": true,
        "userData": []
    }

]

  constructor(public http: HttpClient) {
    console.log('test', this.dataURL);


  }

  getTimeSlots() {
    return this.http.get(this.dataURL)
  }

  addUserDetails(data) {
    return this.http.post(this.dataURL, { data });

  }
}
