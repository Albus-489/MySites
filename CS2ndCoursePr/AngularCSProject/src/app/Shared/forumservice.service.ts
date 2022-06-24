import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ForumserviceService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURL = 'https://localhost:7063';

  getAllBranches(){
    return this.http.get(this.BaseURL + '/Branches/GetAllBranches')
  }

  getAllThemes(){
    return this.http.get(this.BaseURL + '/Themes/GetAllThemes')
  }

  addTheme(model:any){
    return this.http.post(this.BaseURL + '/Themes/Create', model)
  }
}
