import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnService {

  constructor(private _http: HttpClient) { }

  // ? * З'єднання фронта з беком *
  apiUrl = 'https://localhost:7062/api/Authors/GetAll';

  getAllAuthors():Observable<any>
   {
       return this._http.get(`${this.apiUrl}`);
   }

}
