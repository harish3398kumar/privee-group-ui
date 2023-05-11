import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.scss']
})
export class HospitalityComponent {
  @Input() triggeredValue!: string;
  isHospitality: boolean = false
  chevronRight = faChevronRight
  public hospitalityObj = [
    { url: 'https://privee-santorini.gr/', fieldName: 'Santorini' },
    { url: 'https://megayachtevents.gr/', fieldName: 'Mykonos' },
    { url: 'https://chalkidiki.villas/', fieldName: 'Chalkidiki' }
  ]
  ngOnChanges(changes: SimpleChanges): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.triggeredValue === "hospitality") {
      this.isHospitality = true
    }
    else {
      this.isHospitality = false
    }
  }
}
