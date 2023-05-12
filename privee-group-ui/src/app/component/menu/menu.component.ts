import { Component, ElementRef, QueryList, ViewChildren, asNativeElements } from '@angular/core';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChildren('imageCard') imgCard!:QueryList<ElementRef>
  public triggeredValue: string = ''
  constructor(private menuService$: MenuService) {

  }
  ngOnInit(): void {
    this.menuService$.cardToDisplay.subscribe((value: string) => {
      this.triggeredValue = value
      this.imgCard.toArray().forEach((val:ElementRef) =>{
        var a:string = val.nativeElement.outerText
        if (a.split('\n').includes(value.toUpperCase()) && window.innerWidth <= 760){
          val.nativeElement.scrollIntoView({behavior: 'smooth'});
        }
      })
    })

  }
  hoveredContent(value: string): void {
    this.triggeredValue = value
    
  }

}
