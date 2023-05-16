import { Component, ElementRef, QueryList, ViewChildren, asNativeElements } from '@angular/core';
import { Obj } from 'src/app/models/obj';
import { MenuService } from 'src/app/service/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @ViewChildren('imageCard') imgCard!:QueryList<ElementRef>
  public triggeredValue:Obj = {component:'header',headerValue:'event inquiry',value:''}
  public isEvent =false;
  public isDining = false;
  public isYachting = false;
  public isHospitality = false;
  public isHeaderIcon = false;
  constructor(private menuService$: MenuService) {

  }
  ngOnInit(): void {
    this.menuService$.cardToDisplay.subscribe((value: Obj) => {
      this.imageHoverChanges(value)
    })

  }

  public imageHoverChanges(object:Obj){

    this.triggeredValue = object
    if(object.component === 'footer'){
      this.isHeaderIcon = false
      switch (object.value) {
        case 'events':
          this.isEvent = true;
          this.isDining  = this.isYachting = this.isHospitality = false;  
          break;
          case 'dining':
            this.isDining = true;
            this.isEvent  = this.isYachting = this.isHospitality = false;  
            break;
            case 'yachting':
          this.isYachting = true;
          this.isDining  = this.isEvent = this.isHospitality = false;  
          break;
          case 'hospitality':
            this.isHospitality = true;
            this.isDining  = this.isYachting = this.isEvent = false;  
          break;
      
        default:
          this.isHospitality = this.isDining  = this.isYachting = this.isEvent = false;
          break;
      }

    }
    else if(object.component ==='header'){
      this.isHeaderIcon = true
    }
    this.imgCard.toArray().forEach((val:ElementRef) =>{
      var a:string = val.nativeElement.outerText
      if (a.split('\n').includes(object.value.toUpperCase()) && window.innerWidth <= 991){
        val.nativeElement.scrollIntoView({behavior: 'smooth'});
      }
    })
  }

  hoveredContent(value: string): void {
    console.log(value)
    console.log(this.triggeredValue)
    this.triggeredValue.value = value
    this.imageHoverChanges(this.triggeredValue)
    
  }

}
