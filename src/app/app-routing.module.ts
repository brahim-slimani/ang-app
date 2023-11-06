import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      //title: 'Home page'
  },
  {
      path: 'details',
      component: DetailsComponent,
      title: 'Details page'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
