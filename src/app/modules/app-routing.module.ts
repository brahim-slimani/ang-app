import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { DetailsComponent } from '../components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../services/auth.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  },
  {
    path: '',
    component: MainComponent,
    title: 'Home page',
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page',
    canActivate: [AuthGuard]
  },
  {
    path: 'new-product',
    component: ProductFormComponent,
    title: 'New Product',
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
