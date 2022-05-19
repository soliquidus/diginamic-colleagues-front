import {Component, Input, OnInit} from '@angular/core';
import {Colleague, Matricule} from "../../../models/colleague";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {urlParts} from "../../../enums/urlParts";

@Component({
  selector: 'app-search-colleagues',
  templateUrl: './search-colleagues.component.html',
  styleUrls: ['./search-colleagues.component.css']
})
export class SearchColleaguesComponent implements OnInit {
  matricules!: Matricule[];
  @Input('colleagues')
  colleagues!: Colleague[];
  colleaguesFiltered = new Array<Colleague>();
  matriculesFiltered = new Array<Matricule>();
  input!: string;
  mForm!: FormGroup;

  constructor(private matriculeService: ApiService<Matricule>,
              private colleagueService: ApiService<Colleague>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getMatricules()
    this.createForm()
  }

  onSubmit(): void {
    this.input = this.formValue('userInput');
    for(let colleague of this.colleagues){
      if(colleague.lastName === this.input)
        for(let matricule of this.matricules){
          if(matricule.colleagueId === colleague.id)
            this.matriculesFiltered.push(matricule)
          console.log(matricule)
        }
        this.colleaguesFiltered.push(colleague)
      console.log(colleague)
    }
  }

  createForm() {
    this.mForm = this.formBuilder.group({
      userInput: [this.input, [Validators.required, Validators.minLength(3)]]
    })
  }

  getMatricules() {
    this.matriculeService.getAllData(urlParts.matricules).subscribe({
      next: data => {
        this.matricules.splice(0, this.matricules.length);
        data.forEach(m => this.matricules.push(m))
      },
      error: err => console.log(`Error while getting data (${urlParts.matricules}): ` + err),
      complete: () => console.log(`Get all data complete (${urlParts.matricules})`)
    })
  }

  private formValue(controlName: string) {
    // @ts-ignore
    return this.angForm.get(controlName).value;
  }
}
