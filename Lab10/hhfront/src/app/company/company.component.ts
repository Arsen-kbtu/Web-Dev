import { Component } from '@angular/core';
import { Vacancy } from '../../models/vacancy';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  vacancies: Vacancy[]=[];

  constructor(private appService: AppService, private route: ActivatedRoute) { }
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.appService.getCompanyVacancies(id).subscribe(vacancies => this.vacancies = vacancies);
    console.log(this.vacancies);
  }
}
