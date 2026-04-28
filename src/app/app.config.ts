import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { routes } from './app.routes';

function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation(lang: string): Observable<TranslationObject> {
      return http.get(`assets/i18n/${lang}.json`).pipe(map(r => r as TranslationObject));
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        useDefaultLang: true,
        loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
      })
    )
  ]
};