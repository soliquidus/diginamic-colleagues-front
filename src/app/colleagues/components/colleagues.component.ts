import { Component, OnInit } from '@angular/core';
import {Colleague} from "../../models/colleague";
import {ApiService} from "../../services/api.service";
import {urlParts} from "../../enums/urlParts";

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css']
})
export class ColleaguesComponent implements OnInit {
  colleagues = new Array<Colleague>()
  matricule!: string;
  toDisplay = true;

  constructor(private colleagueService: ApiService<Colleague>) { }

  ngOnInit(): void {
    this.getColleagues()
  }

  /**
   * Get all colleagues from DB
   */
  getColleagues() {
    this.colleagueService.getAllData(urlParts.colleagues).subscribe({
      next: data => {
        this.colleagues.splice(0, this.colleagues.length);
        data.forEach(c => this.colleagues.push(c))
      },
      error: err => console.log(`Error while getting data (${urlParts.colleagues}): ` + err),
      complete: () => console.log(`Get all data complete (${urlParts.colleagues})`)
    });
  }

  editColleague(): void {
    this.toDisplay = false;
    console.log('editing colleague');
  }

  newColleague(): void {
    console.log('creating colleague')
  }

}
