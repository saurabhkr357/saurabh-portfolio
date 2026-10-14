
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
      github: 'https://github.com/saurabhkr357/EmployeeManagementSystem',
      demo: '',
      accent: 'violet',
      detailsUrl: '/projects/employee-management',
    },
    {
      number: '02',
      category: 'PERSONAL PROJECT',
      title: 'PathFinding-Visualizer',
      description:
        'A visualizer for demonstrating various pathfinding algorithms like A* and Dijkstra in an interactive environment.',
      technologies: ['Angular', 'TypeScript'],
      github: 'https://github.com/saurabhkr357/PathFinding-Visualizer',
      demo: 'https://path-finding-visualizer-iota.vercel.app/',
      accent: 'cyan',
      detailsUrl: '',
    },
    {
      number: '03',
      category: 'PERSONAL PROJECT',
      title: 'pdf-chatbot',
      description:
        'A chatbot for interacting with PDF documents, providing seamless integration and user-friendly interface.',
      technologies: ['Python', 'HTML', 'AI', 'RAG'],
      github: 'https://github.com/saurabhkr357/pdf-chatbot',
      demo: 'https://pdf-chatbot-l5io.onrender.com/',
      accent: 'violet',
      detailsUrl: '',
    }

  ];
}
