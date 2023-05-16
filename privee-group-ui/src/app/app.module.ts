import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { EventsComponent } from './component/menu/events/events.component';
import { DiningComponent } from './component/menu/dining/dining.component';
import { YachtingComponent } from './component/menu/yachting/yachting.component';
import { HospitalityComponent } from './component/menu/hospitality/hospitality.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReservationsComponent } from './component/reservations/reservations.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EventInquiryFormComponent } from './component/event-inquiry-form/event-inquiry-form.component';
import { EventFormComponent } from './component/event-inquiry-form/event-form/event-form.component';
import { PrivateFormComponent } from './component/event-inquiry-form/private-form/private-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    EventsComponent,
    DiningComponent,
    YachtingComponent,
    HospitalityComponent,
    ReservationsComponent,
    EventInquiryFormComponent,
    EventFormComponent,
    PrivateFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
