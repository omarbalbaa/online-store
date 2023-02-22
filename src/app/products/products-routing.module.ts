import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetailsGuardGuard } from './details-guard.guard';

const routes: Routes = [
  {
    path:'', redirectTo:'list', pathMatch:'full'
  },
  {
    path:'list', component:ProductListComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'list/:id', component:ProductDetailsComponent, canActivate:[DetailsGuardGuard]
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
