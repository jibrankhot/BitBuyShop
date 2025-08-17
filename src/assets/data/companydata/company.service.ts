import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Company } from './company.model';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private jsonUrl = 'assets/data/companydata/company.json';

    constructor(private http: HttpClient) { }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.jsonUrl);
    }

}
