import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { Obj } from 'src/app/models/obj';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 public dotCircle = faDotCircle; 
 public isActive = false
 constructor(private menuService$: MenuService){}

 public topNavToggle():void{
this.isActive = !this.isActive;
 }
 public buttonTriggerd(value:string):void{
  let obj:Obj = {
    component: 'header',
    headerValue:value,
    value:''
  }
  this.menuService$.cardToDisplay.next(obj)

 }
}
