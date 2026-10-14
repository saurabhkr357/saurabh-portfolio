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
    subtitle:
      'A full-stack workforce management platform built with Angular, ASP.NET Core 8 Web API and SQL Server.',

    overview:
      'The Employee Management System is a full-stack application that brings employee records, attendance tracking, payroll processing and dashboard insights into one centralized platform. It was designed to demonstrate practical frontend development, REST API design, database integration, authentication, authorization and scalable data-access concepts.',

    github:
      'https://github.com/saurabhkr357/EmployeeManagementSystem',

    frontend: 'Angular',
    backend: 'ASP.NET Core 8 Web API',
    database: 'Microsoft SQL Server',

    architecture: [
      {
        title: 'Frontend Layer',
        description:
          'Angular standalone components, routing, reusable UI, services and HTTP-based API communication.'
      },
      {
        title: 'API Layer',
        description:
          'ASP.NET Core Web API controllers and services for business logic, validation and data operations.'
      },
      {
        title: 'Data Layer',
        description:
          'SQL Server relational storage accessed through Entity Framework Core.'
      },
      {
        title: 'Security Layer',
        description:
          'JWT authentication, protected routes and role-based authorization.'
      }
    ],

    modules: [
      {
        title: 'Authentication & Authorization',
        description:
          'Login flow using JWT access tokens, Angular route guards and protected API endpoints.'
      },
      {
        title: 'Employee Management',
        description:
          'Create, view, update and delete employee records through integrated frontend forms and REST endpoints.'
      },
      {
        title: 'Attendance Management',
        description:
          'Track employee attendance by date and status, with the ability to review, update and delete records.'
      },
      {
        title: 'Payroll Management',
        description:
          'Maintain payroll information including basic salary, HRA, bonuses, deductions and net salary.'
      },
      {
        title: 'Dashboard',
        description:
          'Display workforce and payroll metrics, including employee totals and attendance summaries.'
      },
      {
        title: 'Role-Based Access',
        description:
          'Restrict access to selected screens and API endpoints based on the authenticated user role.'
      }
    ],

    features: [
      'JWT-based login and token validation',
      'Protected Angular routes using authentication guards',
      'Role-based access control for restricted modules',
      'Employee CRUD operations using REST APIs',
      'Attendance tracking with date and status',
      'Payroll records and salary breakdown',
      'Dashboard metrics backed by SQL queries',
      'Angular services for centralized API communication',
      'ASP.NET Core dependency injection and service-layer separation',
      'Entity Framework Core database integration',
      'Git-based development workflow with feature branches and pull requests'
    ],

    performance: [
      {
        title: 'Horizontal Sharding',
        description:
          'Demonstrate how employee records can be distributed across logical data partitions using a shard key and a shard resolver.'
      },
      {
        title: 'Efficient Data Access',
        description:
          'Use targeted database queries and avoid retrieving more data than a screen requires.'
      },
      {
        title: 'Layered Architecture',
        description:
          'Keep controllers, services and persistence responsibilities separate to make future optimization easier.'
      }
    ],

    engineeringHighlights: [
      'Designed and integrated Angular UI with ASP.NET Core REST APIs',
      'Implemented JWT authentication and protected endpoints',
      'Connected relational entities to SQL Server through Entity Framework Core',
      'Organized functionality into independent business modules',
      'Explored horizontal data partitioning as a scalability concept'
    ],

    techStack: [
      'Angular',
      'TypeScript',
      'HTML',
      'SCSS',
      'ASP.NET Core 8',
      'C#',
      'REST API',
      'Entity Framework Core',
      'SQL Server',
      'JWT',
      'Git',
      'GitHub'
    ]
  };

  constructor(private readonly route: ActivatedRoute) {}
}