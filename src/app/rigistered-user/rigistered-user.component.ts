import { TimeService } from './../shared/time.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-rigistered-user',
  templateUrl: './rigistered-user.component.html',
  styleUrls: ['./rigistered-user.component.css']
})
export class RigisteredUserComponent implements OnInit {
  rid;
  firstname;
  lastname;
  number;


  trimming_fn(x) {    
    return x ? x.replace(/\s/g,'') : '';    
  }

  constructor(public data: TimeService, public route: ActivatedRoute, public router: Router) {

    this.rid = this.route.snapshot.paramMap.get('id');
    //console.log(this.data)
    this.firstname = data.timeSlots[this.rid].userData[0].fname;
    this.lastname = data.timeSlots[this.rid].userData[0].lname;
    this.number = data.timeSlots[this.rid].userData[0].mnumber;
  }

  ngOnInit() {


  }
  onClick() {
    if (!this.firstname) {
      alert("name is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
      return;
    }

    if (!this.number) {
      alert("number is must required");
      // this.router.navigate([`/detail/${this.route.snapshot.paramMap.get('id')}`]);
      return;
    }
    else {
      this.data.timeSlots[this.rid].userData[0].fname = this.firstname;
      this.data.timeSlots[this.rid].userData[0].lname = this.lastname;
      this.data.timeSlots[this.rid].userData[0].mnumber = this.number;





      alert("Successfully updated your data");

      this.router.navigate(['/home', { id: this.route.snapshot.paramMap.get('id') }]);
      console.log(this.data.timeSlots);

    }
  }
}
