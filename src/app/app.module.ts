import { Routing } from './routing';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from'@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdataComponent } from './userdata/userdata.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RigisteredUserComponent } from './rigistered-user/rigistered-user.component';
//import { AvailableComponent } from './shared/available.ts/available.component';

const Route= new Routing();


@NgModule({
  declarations: [
    AppComponent,
    TimeslotsComponent,
    UserdataComponent,
    WelcomeComponent,
    RigisteredUserComponent,
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
     Route.appRoute )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
