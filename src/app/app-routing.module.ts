import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrademarkComponent } from './trademark/trademark.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"trademark", component:TrademarkComponent},

  {path:'bussiness', loadChildren: ()=> import('./bussiness-module/bussiness-module.module').then( x => x.BussinessModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
