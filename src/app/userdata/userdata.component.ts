import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';



@Component({
 
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  active=true;

    //availableSlot:Available;
    constructor(private router: Router, private route: ActivatedRoute) { 
      //this.availableSlot = new Available();
      //console.log("before clicking",this.availableSlot.slotAvailable)
      console.log(this.route.snapshot.paramMap.get('id'));
      
  }


  onClick() {
    alert("Successfully submitted your data");
    this.active=false;
    this.router.navigate(['/home',{id:this.route.snapshot.paramMap.get('id')}]);
    console.log(this.route.snapshot.paramMap.get('id'));
    ///this.availableSlot.slotAvailable=false;
  
      

  }

  onCancle(){
     this.router.navigate(['/'])
  }

  ngOnInit() {

   }

}
