import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColleaguesRoutingModule } from './colleagues-routing.module';
import {ColleaguesComponent} from "./components/colleagues.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchColleaguesComponent } from './components/search-colleagues/search-colleagues.component';


@NgModule({
  declarations: [
    ColleaguesComponent,
    SearchColleaguesComponent
  ],
  imports: [
    CommonModule,
    ColleaguesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ColleaguesModule { }
