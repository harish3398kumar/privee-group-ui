import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { EventsComponent } from './component/menu/events/events.component';
import { DiningComponent } from './component/menu/dining/dining.component';
import { YachtingComponent } from './component/menu/yachting/yachting.component';
import { HospitalityComponent } from './component/menu/hospitality/hospitality.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    EventsComponent,
    DiningComponent,
    YachtingComponent,
    HospitalityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
