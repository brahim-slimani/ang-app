import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../features/main/main.component';
import { DetailsComponent } from '../features/details/details.component';
import { ProductFormComponent } from '../features/product-form/product-form.component';
import { LoginComponent } from '../features/login/login.component';
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
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
