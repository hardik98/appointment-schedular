import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  dataURL = '../assets/time.json';

  timeSlots: any = [
    {
        "time_slot_id": 0,
        "value": "09:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 1,
        "value": "10:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 2,
        "value": "11:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 3,
        "value": "12:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 4,
        "value": "13:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 5,
        "value": "14:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 6,
        "value": "15:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 7,
        "value": "16:00",
        "data": [],
        "val": true,
        "userData": []
    },
    {
        "time_slot_id": 8,
        "value": "17:00",
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
