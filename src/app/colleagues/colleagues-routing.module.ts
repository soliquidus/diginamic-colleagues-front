import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ColleaguesComponent} from "./components/colleagues.component";

const routes: Routes = [
  {path: '', redirectTo: 'colleagues', pathMatch:'full'},
  {path: 'colleagues', component:ColleaguesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColleaguesRoutingModule { }
