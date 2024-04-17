// http://127.0.0.1:8000/api/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private baseUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }
  getCompanies(): Observable<Company[]> {
    console.log(this.baseUrl + 'companies/');
    return this.http.get<Company[]>(this.baseUrl + 'companies/');
  }
  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.baseUrl + 'companies/' + id + '/vacancies/');
  }
}