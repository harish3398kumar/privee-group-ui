import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  chevronRight = faChevronRight
  public eventObj = [
    { url: 'https://privee.gr/', fieldName: 'Weddings & Christenings' },
    { url: 'https://privee.gr/premium-privee/', fieldName: 'Corporate Events' },
    { url: 'https://privee.gr/catering-event/', fieldName: 'Catering' }
  ]
}
