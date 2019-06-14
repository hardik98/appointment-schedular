//import { UserdataComponent } from './../userdata/userdata.component';

import { Component, OnInit } from '@angular/core';
import { TimeService } from '../shared/time.service';
//import  {UserdataComponent}  from './../shared/available';
import {Router,ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

  timeslots;
rid:any;
  


  constructor(public time: TimeService, private hardik: ActivatedRoute ) { 
     //this.id=this.hardik.snapshot.paramMap.get('value');
     //this.timeslots[this.id].val=false
      
  }

  
  ngOnInit() {
    
    return this.time.getTimeSlots().subscribe(data => {
     
       console.log(data);
       this.timeslots=data;
       if(this.hardik.snapshot.paramMap.get('id')){
        this.rid=this.hardik.snapshot.paramMap.get('id');
        console.log("checcking",this.timeslots);
        this.timeslots[this.rid].val=false
        
  
      } 
  
       })
  }


}

