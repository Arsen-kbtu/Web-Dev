import { Routes } from '@angular/router';
import { ComplistComponent } from './complist/complist.component';
import { CompanyComponent } from './company/company.component';

export const routes: Routes = [
    {path: '', redirectTo: 'companies', pathMatch: 'full'},
    {path: 'companies', component: ComplistComponent},
    {path: 'companies/:id', component: CompanyComponent}
];
