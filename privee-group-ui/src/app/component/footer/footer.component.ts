import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private menuService$: MenuService) { }
  public triggeredButton(value: string): void {
    let obj = {
      component: 'footer',
      value: value
    }
    this.menuService$.cardToDisplay.next(obj)
  }

}
