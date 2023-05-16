import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-yachting',
  templateUrl: './yachting.component.html',
  styleUrls: ['./yachting.component.scss']
})
export class YachtingComponent {
  chevronRight = faChevronRight
  public yachtingObj = [
    { url: 'https://megayachtevents.gr/charter/', fieldName: 'Charter' },
    { url: 'https://megayachtevents.gr/weddings/', fieldName: 'Weddings' },
    { url: 'https://megayachtevents.gr/bachelor-parties/', fieldName: 'Bachelor Parties' },
    { url: 'https://megayachtevents.gr/vip-parties/', fieldName: 'VIP Parties' }
  ]
  
}
