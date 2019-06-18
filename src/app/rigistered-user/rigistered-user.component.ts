import { TimeService } from './../shared/time.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-rigistered-user',
  templateUrl: './rigistered-user.component.html',
  styleUrls: ['./rigistered-user.component.css']
})
export class RigisteredUserComponent implements OnInit {

  inputForm = new FormGroup({
    firstname:new FormControl(''),
    lastname: new FormControl(''),
    number:new FormControl('')
}); 

  rid;
  // cleanForm(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
  // }

  // trimming_fn(x) {    
  //   return x ? x.replace(/\s/g,'') : '';    
  // }

  constructor(public data: TimeService, public route: ActivatedRoute, public router: Router) {

    this.rid = this.route.snapshot.paramMap.get('id');
  
    // this.inputForm.patchValue(this.data.timeSlots[this.rid].userData[0]);
    this.inputForm.controls.firstname.setValue(this.data.timeSlots[this.rid].userData[0].fname);
    // this.inputForm.value.firstname = this.data.timeSlots[this.rid].userData[0].fname;
    this.inputForm.controls.lastname.setValue(this.data.timeSlots[this.rid].userData[0].lname)  ;
    this.inputForm.controls.number.setValue(this.data.timeSlots[this.rid].userData[0].mnumber)  ;
    
    //console.log(this.data)
    
  }
 
  ngOnInit() {

  }

  onClick() {
    if (!this.inputForm.value.firstname) {
      alert("name is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
      return;
    }

    if (!this.inputForm.value.number) {
      alert("number is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
      return;
    }
    else {
      this.data.timeSlots[this.rid].userData[0].fname = this.inputForm.controls.firstname.value;
      this.data.timeSlots[this.rid].userData[0].lname = this.inputForm.controls.lastname.value;
      this.data.timeSlots[this.rid].userData[0].mnumber = this.inputForm.controls.number.value;





      alert("Successfully updated your data");

      this.router.navigate(['/home', { id: this.route.snapshot.paramMap.get('id') }]);
      console.log('updated user data',this.data.timeSlots);

    }
  }
}
