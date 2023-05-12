import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public dotCircle = faDotCircle; 
 public isActive = false

 public topNavToggle():void{
this.isActive = !this.isActive;
 }
}
