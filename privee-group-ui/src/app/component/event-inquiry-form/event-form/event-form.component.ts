import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {
  public eventFormGroup!: FormGroup;
  constructor(private eventFormBuilder:FormBuilder){}
  ngOnInit(): void {
    this.eventFormGroup = this.eventFormBuilder.group({
      firstName:'',
      lastName:'',
      email:'',
      phone: '',
      eventType: '',
      location: '',
      venue: '',
      eventDate: '',
      estimatedAttendence: '',
    })
  }

}
