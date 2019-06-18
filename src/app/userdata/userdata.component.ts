
import { TimeService } from './../shared/time.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';


@Component({

  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  inputForm = new FormGroup({
       firstname:new FormControl(''),
       lastname: new FormControl(''),
       number:new FormControl('')
  }); 

  active = true;
  tid;
  avail:Boolean=true;

  // trimming_fn(x) {    
  //   return x ? x.replace(/\s/g,'') : '';    
  // }
  cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
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

    if(!this.inputForm.value.firstname){
      alert("name is must required");
      
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
    return ;
    }  
    
    if(!this.inputForm.value.number){
      alert("number is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
    return ;
    }  
    this.avail = false;
    ///this.availableSlot.slotAvailable=false;
     this.tid=this.route.snapshot.paramMap.get('id');
     this.data.timeSlots[this.tid].userData.push(
       {
         fname:this.inputForm.value.firstname,
         lname:this.inputForm.value.lastname,
         mnumber:this.inputForm.value.number
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
