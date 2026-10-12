
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetail {
  readonly project = {
    title: 'Employee Management System',
    subtitle: 'A full-stack employee management application',
    overview:
      'A personal project designed to bring employee information, attendance and payroll workflows together in one application.',
    frontend: 'Angular',
    backend: 'ASP.NET Core 8 Web API',
    database: 'SQL Server',
    features: [
      'JWT-based authentication',
      'Employee information management',
      'Attendance management',
      'Payroll module',
      'REST API integration'
    ],
    github:
      'https://github.com/saurabhkumar-d2k/EmployeeManagementSystem'
  };

  constructor(private readonly route: ActivatedRoute) {}
}
