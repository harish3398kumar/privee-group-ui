import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { ReservationsComponent } from './component/reservations/reservations.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'reservations', component: ReservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
