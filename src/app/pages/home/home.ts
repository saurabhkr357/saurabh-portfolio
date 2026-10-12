
import { Component } from '@angular/core';
import { Experience } from '../../sections/experience/experience';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Experience, Skills, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly technologies = [
    'Angular',
    'ASP.NET Core',
    'C#',
    'SQL Server',
    'TypeScript'
  ];
}
