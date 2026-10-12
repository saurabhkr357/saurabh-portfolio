
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Support } from './pages/support/support';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Saurabh Kumar | Full-Stack Developer'
  },
  {
    path: 'projects/employee-management',
    component: ProjectDetail,
    title: 'Employee Management System | Saurabh Kumar'
  },
  {
    path: 'support',
    component: Support,
    title: "Support Saurabh's Work"
  },
  {
    path: '**',
    redirectTo: ''
  }
];
