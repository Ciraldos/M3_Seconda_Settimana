import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'page2',
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
