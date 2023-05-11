import { Component, Input, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent {
  @Input() triggeredValue!: string;
  isDining: boolean = false
  chevronRight = faChevronRight
  public diningObj = [
    { url: 'https://privee.gr/rest/', fieldName: 'International Cuisine' },
    { url: 'https://oshu.gr/', fieldName: 'Japanese Cuisine' }
  ]
  ngOnChanges(changes: SimpleChanges): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.triggeredValue === 'dining') {
      this.isDining = true;
    }
    else {
      this.isDining = false;
    }
  }


}
