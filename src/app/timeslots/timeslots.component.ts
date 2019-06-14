//import { UserdataComponent } from './../userdata/userdata.component';

import { Component, OnInit } from '@angular/core';
import { TimeService } from '../shared/time.service';
//import  {UserdataComponent}  from './../shared/available';
import { Router, ActivatedRoute } from '@angular/router';
import { timeout } from 'q';




@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

  timeslots;
  rid: any;
  isAvailable:Boolean=true;



  constructor(
    public time: TimeService,
    private hardik: ActivatedRoute,
    public route:Router
    
  ) {
    //this.id=this.hardik.snapshot.paramMap.get('value');
    //this.timeslots[this.id].val=false
   console.log("i am number 1");
  }


  ngOnInit() {

       console.log("i am number 2")

    //console.log(data);
    this.timeslots = this.time.timeSlots;
    if (this.hardik.snapshot.paramMap.get('id')) {
      this.rid = this.hardik.snapshot.paramMap.get('id');
      console.log("checcking", this.timeslots);
      this.timeslots[this.rid].val = false
       console.log("checking the timeslots",this.timeslots);
      //console.log(this.timeslots.time_slot_id)
    }

  
  }

  onclick(id){
    if(this.timeslots[id].val){
    this.route.navigate(['/detail',id])
    }
    else {
    alert("this slot is no longer available but you can edit your details")
     this.route.navigate(['/user',id]);
      return;
    }
  }

  //this.time.getTimeSlots().subscribe(data => {


}
