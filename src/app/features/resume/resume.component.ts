import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Experience { role: string; company: string; period: string; description: string; }
interface Education  { degree: string; institution: string; period: string; }

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  experiences: Experience[] = [
    {
      role: 'Back-end Developer',
      company: 'Raona · Barcelona',
      period: '12/2023 – Presente',
      description: 'APIs RESTful y microservicios con ASP.NET Core (.NET 6/8). Optimización con LINQ, EF Core y Cosmos DB. Azure Functions, Azure Queues, JWT, xUnit, Moq, Azure DevOps CI/CD y Application Insights.'
    },
    {
      role: 'Full-stack Developer',
      company: 'Soficat Xerox · Barcelona',
      period: '09/2023 – 12/2023',
      description: 'APIs REST con PHP 8 y Symfony 6. Bases de datos MySQL con Doctrine ORM. Autenticación JWT. Frontend responsive con Twig y Bootstrap. Metodología Scrum.'
    }
  ];

  education: Education[] = [
    { degree: 'Inglés B2 – Cambridge First',           institution: 'Academia Challenge',      period: '10/2025 – Presente' },
    { degree: 'CFGS Desarrollo de Aplicaciones Web',   institution: 'Ins Provençana',          period: '09/2021 – 06/2023' },
    { degree: 'Bootcamp Java & SQL (215h)',             institution: 'Fundación Esplai – ICT',  period: '09/2019 – 12/2019' },
    { degree: 'Bachillerato Social LOE',               institution: 'Ins Eduard Fontseré',     period: '09/2012 – 05/2014' }
  ];

  certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      issued: 'Verificar en Microsoft Learn',
      badge: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/MostafaAbdelillahElAnsari-7255/D594234A6D2D6EF9?sharingId'
    },
    {
      name: 'Foundational C# with Microsoft',
      code: 'C#',
      issuer: 'freeCodeCamp & Microsoft',
      issued: 'Verificar en freeCodeCamp',
      badge: 'https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg',
      url: 'https://freecodecamp.org/certification/mostabdel07/foundational-c-sharp-with-microsoft'
    }
  ];

  downloadCV(): void {
    const a = document.createElement('a');
    a.href = 'assets/cv.pdf';
    a.download = 'Mostafa_Abdel-illah_CV.pdf';
    a.click();
  }
}