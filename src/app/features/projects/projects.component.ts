import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'GymApp',
      description: 'SPA con Angular 15 y Tailwind CSS, backend en Node.js (Express) con autenticación JWT. Desplegada en servidor Apache con configuración HTTPS.',
      technologies: ['Angular 15', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'Apache'],
      githubUrl: 'https://github.com/mostabdelansari/gym-app'
    },
    {
      title: 'Learn Code Path',
      description: 'Aplicación web completa con API REST en Laravel y autenticación JWT, frontend SSR con Next.js e integración de pagos con Stripe. Desplegada con NGINX y SSL.',
      technologies: ['Laravel', 'Next.js', 'JWT', 'Stripe', 'NGINX', 'MySQL'],
      githubUrl: 'https://github.com/mostabdelansari/learn-code-path'
    },
    {
      title: 'Thelements',
      description: 'SPA con Angular 15 y Tailwind CSS, backend en Node.js (Express) con autenticación JWT. Desplegada en servidor Apache con configuración HTTPS.',
      technologies: ['Angular 15', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'Apache'],
      githubUrl: 'https://github.com/mostabdelansari/the-elements'
    }
  ];
}