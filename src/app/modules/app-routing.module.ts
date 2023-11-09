import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { DetailsComponent } from '../components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from '../components/product-form/product-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page'
  },
  {
    path: 'new-product',
    component: ProductFormComponent,
    title: 'New Product'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
