import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Restaurent } from 'src/app/models/restaurent';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {
  public listOfLocations = ['all', 'beverly hills', 'grand rapids', 'las vegas', 'london'];
  public listOfRestaurents:Restaurent[] = [
    {
      location: 'beverly hills',
      restaurents: ['cut', 'spago']
    },
    {
      location: 'grand rapids',
      restaurents: ['the kitchen & the kitchen counter']
    },
    {
      location: 'las vegas',
      restaurents: ['cucina', 'wolfgang puck bar & grill, summerlin', 'cut', 'lupo', 'wolfgang puck bar & grill, mgm']
    },
    {
      location: 'london',
      restaurents: ['cut']
    }
  ];
  public listOfRestaurentsDisplay = ['select'];
  public listOfBookingTime:string[]=[];
  public listOfPartyCount = Array(11).fill(0).map((x,i)=>i+1)
  public restaurentFormGroup!: FormGroup

  constructor(private restaurentForm: FormBuilder) { }

  ngOnInit(): void {
    for(let hour = 7; hour <= 11; hour++){
      for(let i = 0; i < 2; i++ ){
        if(i<1){
          this.listOfBookingTime.push(`${hour} : 00 PM`)
        }
        else{
          this.listOfBookingTime.push(`${hour} : 30 PM`)
        }
      }
    }
    this.restaurentFormGroup = this.restaurentForm.group({
      restaurentLocation:this.listOfLocations[0],
      restaurentName: this.listOfRestaurentsDisplay[0],
      bookingDate:'',
      bookingTime:this.listOfBookingTime[0],
      partyCount:1
    })

  }
  public setValueForRestaurant():void{
    this.listOfRestaurents.forEach((restaurent:Restaurent) => {
      if(restaurent.location === this.restaurentFormGroup.value['restaurentLocation']){
        this.listOfRestaurentsDisplay = restaurent.restaurents
        this.restaurentFormGroup.get('restaurentName')?.setValue(this.listOfRestaurentsDisplay[0])
      }

    })
  }
  public bookTheSlot():void{
    console.log(this.restaurentFormGroup.value)
  }

}
