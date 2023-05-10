import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public triggeredValue:string = ''
  constructor(private menuService$: MenuService){

  }
  ngOnInit(): void {
    this.menuService$.cardToDisplay.subscribe((value:string)=>{
      this.triggeredValue = value
    })
    
  }

}
