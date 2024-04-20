import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairDashboradComponent } from './shared/component/fair-dashborad/fair-dashborad.component';
import { FairDetailsComponent } from './shared/component/fair-details/fair-details.component';
import { FairCardComponent } from './shared/component/fair-card/fair-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDashboradComponent,
    FairDetailsComponent,
    FairCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
