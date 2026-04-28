import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Lang { code: string; label: string; flag: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuOpen     = false;
  langMenuOpen = false;

langs: Lang[] = [
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/24x18/gb.png' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/24x18/es.png' },
  { code: 'ca', label: 'Català',  flag: 'https://flagcdn.com/24x18/es-ct.png' }
];

  links = [
    { key: 'nav.home',     anchor: 'home'     },
    { key: 'nav.about',    anchor: 'about'    },
    { key: 'nav.skills',   anchor: 'skills'   },
    { key: 'nav.projects', anchor: 'projects' },
    { key: 'nav.resume',   anchor: 'resume'   },
    { key: 'nav.contact',  anchor: 'contact'  }
  ];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'ca']);
    translate.setDefaultLang('en');

    // Si el usuario ya eligió un idioma manualmente, usarlo
    const saved = localStorage.getItem('lang');
    if (saved) {
      translate.use(saved);
      return;
    }

    // Detectar idioma del navegador (ej: 'ca-ES', 'es-ES', 'en-US')
    const browserLang = navigator.language?.split('-')[0]; // 'ca', 'es', 'en'
    const supported   = ['en', 'es', 'ca'];
    const detected    = supported.includes(browserLang) ? browserLang : 'en';

    translate.use(detected);
  }

  get currentLang(): Lang {
    return this.langs.find(l => l.code === this.translate.currentLang) ?? this.langs[0];
  }

  setLang(code: string): void {
    this.translate.use(code);
    localStorage.setItem('lang', code);
    this.langMenuOpen = false;
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(e: MouseEvent): void {
    if (!(e.target as HTMLElement).closest('.lang-wrap')) {
      this.langMenuOpen = false;
    }
  }
}