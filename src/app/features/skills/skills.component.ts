import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface SkillGroup { label: string; icon: string; skills: string[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      label: 'Back-end', icon: '⚙️',
      skills: ['C#', 'ASP.NET Core', '.NET 6/8', 'Entity Framework Core', 'PHP 8', 'Symfony 6', 'Laravel 9', 'Express', 'Java 8']
    },
    {
      label: 'Cloud & Azure', icon: '☁️',
      skills: ['Azure Functions', 'Azure Queues', 'Azure Cosmos DB', 'Azure DevOps', 'Azure Application Insights', 'Azure Blob Storage']
    },
    {
      label: 'Bases de datos', icon: '🗄️',
      skills: ['SQL Server', 'MySQL', 'MongoDB', 'CosmosDB', 'Firebase Firestore']
    },
    {
      label: 'Front-end', icon: '🖥️',
      skills: ['Angular', 'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5']
    },
    {
      label: 'Testing & Calidad', icon: '✅',
      skills: ['xUnit', 'Moq', 'Clean Architecture', 'SOLID', 'OWASP', 'Code Review']
    },
    {
      label: 'CI/CD & DevOps', icon: '🛠️',
      skills: ['Git', 'GitFlow', 'Azure DevOps Pipelines', 'Docker', 'Linux', 'Apache', 'NGINX']
    }
  ];
}