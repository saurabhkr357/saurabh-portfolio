
import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  readonly projects = [
    {
      number: '01',
      category: 'PERSONAL PROJECT',
      title: 'Employee Management System',
      description:
        'A full-stack employee management application with authentication and modules for attendance, payroll and employee information.',
      technologies: ['Angular', 'ASP.NET Core 8', 'EF Core', 'SQL Server'],
      github: 'https://github.com/saurabhkumar-d2k/EmployeeManagementSystem',
      demo: '',
      accent: 'violet',
      detailsUrl: '/projects/employee-management',
    },
    {
      number: '02',
      category: 'ENTERPRISE EXPERIENCE',
      title: 'Enterprise Web Applications',
      description:
        'Professional experience building and maintaining business applications, REST APIs, database workflows and user-facing modules.',
      technologies: ['AngularJS', '.NET', 'SQL Server', 'REST API'],
      github: '',
      demo: '',
      accent: 'cyan',
      detailsUrl: '',
    }
  ];
}
