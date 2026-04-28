import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { CvComponent } from './features/resume/resume.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CvComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}