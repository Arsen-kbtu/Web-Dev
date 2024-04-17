import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Company } from '../../models/company';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-complist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './complist.component.html',
  styleUrl: './complist.component.css'
})
export class ComplistComponent {
  companies: Company[]=[];
  constructor(private appService: AppService) { }
  ngOnInit() {
    this.appService.getCompanies().subscribe(companies => this.companies = companies);
    console.log(this.companies);
  }
}
