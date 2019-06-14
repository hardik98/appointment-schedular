 import { UserdataComponent } from './userdata/userdata.component';
 import { TimeslotsComponent } from './timeslots/timeslots.component';
 import { WelcomeComponent } from './welcome/welcome.component';

export class Routing {
    appRoute= [
        {path:'detail/:id',component:UserdataComponent},
        {path:'', component:TimeslotsComponent },
        {path:'home', component:TimeslotsComponent },
        {path:'welcome', component:WelcomeComponent }
  
      ]
}