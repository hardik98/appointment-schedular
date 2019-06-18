import { Routes } from '@angular/router';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { RigisteredUserComponent } from './rigistered-user/rigistered-user.component';
import { UserdataComponent } from './userdata/userdata.component';
import { WelcomeComponent } from './welcome/welcome.component';


 export const routes:Routes =
 [
        {path:'detail/:id',component:UserdataComponent},
        {path:'', component:TimeslotsComponent },
        {path:'home', component:TimeslotsComponent },
        {path:'welcome', component:WelcomeComponent },
        {path:'user/:id',component:RigisteredUserComponent}
  
      ]

