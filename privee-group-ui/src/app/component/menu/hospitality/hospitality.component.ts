import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.scss']
})
export class HospitalityComponent {
  chevronRight = faChevronRight
  public hospitalityObj = [
    { url: 'https://privee-santorini.gr/', fieldName: 'Santorini' },
    { url: 'https://megayachtevents.gr/', fieldName: 'Mykonos' },
    { url: 'https://chalkidiki.villas/', fieldName: 'Chalkidiki' }
  ]
}
