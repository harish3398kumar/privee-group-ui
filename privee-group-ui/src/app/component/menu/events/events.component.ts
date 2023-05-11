import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  @Input() triggeredValue!: string;
  isEvent: boolean = false
  chevronRight = faChevronRight
  public eventObj = [
    { url: 'https://privee.gr/', fieldName: 'Weddings & Christenings' },
    { url: 'https://privee.gr/premium-privee/', fieldName: 'Corporate Events' },
    { url: 'https://privee.gr/catering-event/', fieldName: 'Catering' }
  ]
  ngOnChanges(changes: SimpleChanges): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.triggeredValue === 'events') {
      this.isEvent = true
    }
    else {
      this.isEvent = false
    }
  }
  helo(value: string): void {
    console.log(value)
  }
}
