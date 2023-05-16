import { Component } from '@angular/core';

@Component({
  selector: 'app-event-inquiry-form',
  templateUrl: './event-inquiry-form.component.html',
  styleUrls: ['./event-inquiry-form.component.scss']
})
export class EventInquiryFormComponent {
  public isTabBtnTriggerd:boolean = true

  public tabToggleBtn(triggeredButton:string){
    if(triggeredButton === 'event'){
      this.isTabBtnTriggerd=true;
    }
    else{
      this.isTabBtnTriggerd=false
    }
  }
}
