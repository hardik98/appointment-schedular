
import { TimeService } from './../shared/time.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';




@Component({

  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  active = true;
  name;
  firstname;
  lastname;
  number;
  tid;
  avail:Boolean=true;

  trimming_fn(x) {    
    return x ? x.replace(/\s/g,'') : '';    
  }

  //availableSlot:Available;
  constructor(private router: Router,
     private route: ActivatedRoute,
     public data:TimeService
     ) {
    //this.availableSlot = new Available();
    //console.log("before clicking",this.availableSlot.slotAvailable)
    console.log(this.route.snapshot.paramMap.get('id'));
     
  }


  onClick() {

    if(!this.firstname){
      alert("name is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
    return ;
    }  

    if(!this.number){
      alert("number is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
    return ;
    }  
    this.avail = false;
    ///this.availableSlot.slotAvailable=false;
     this.tid=this.route.snapshot.paramMap.get('id');
     this.data.timeSlots[this.tid].userData.push(
       {
         fname:this.firstname,
         lname:this.lastname,
         mnumber:this.number
        });


        alert("Successfully submitted your data");
    
    this.router.navigate(['/home', { id: this.route.snapshot.paramMap.get('id') }]);
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log("userData",this.data.timeSlots)
     
    // console.log(this.lastname);
    // console.log(this.number);
 
   
  }

  onCancle() {
    this.router.navigate(['/'])
  }

  ngOnInit() {

  }

}
