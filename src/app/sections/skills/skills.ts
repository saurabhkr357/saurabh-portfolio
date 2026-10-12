
import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly categories = [
    {
      title: 'Frontend',
      number: '01',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS']
    },
    {
      title: 'Backend',
      number: '02',
      skills: ['C#', 'ASP.NET Core', 'Web API', 'Entity Framework Core']
    },
    {
      title: 'Database',
      number: '03',
      skills: ['SQL Server', 'T-SQL', 'Stored Procedures', 'Query Optimization']
    },
    {
      title: 'Tools & Cloud',
      number: '04',
      skills: ['Git', 'GitHub', 'Azure', 'Linux', 'Nginx']
    }
  ];
}
