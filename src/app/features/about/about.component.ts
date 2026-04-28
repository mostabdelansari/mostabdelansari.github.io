import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  downloadCV(): void {
    const a = document.createElement('a');
    a.href = 'assets/cv.pdf';
    a.download = 'Mostafa_Abdel-illah_CV.pdf';
    a.click();
  }
}