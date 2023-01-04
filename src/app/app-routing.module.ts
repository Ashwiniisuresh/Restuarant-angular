import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './add-component/add-component.component';
import { DeleteResturantComponent } from './delete-resturant/delete-resturant.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';

const routes: Routes = [
  // path for  restaurentList Component
  {
    path:'',component:RestaurentsComponent 
  },
  // path for view resatuent
  {
    path:'View Restaurent/:id',component:ViewRestaurentComponent
  },
  // path for add restaurnt
  {
    path:'Add Restaurent',component:AddComponentComponent 
  },

  // path for update restuarant component
  {
    path:'update-restuarant/:id',component:UpdateRestuarantComponent
  },
  // path for delete restuarant component
  {
    path:'delete-restuarant/:id',component:DeleteResturantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
