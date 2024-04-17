// name = models.CharField(max_length=255)
//     description = models.TextField()
//     salary = models.FloatField()
//     company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

import { Company } from "./company";

export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: Company;
}