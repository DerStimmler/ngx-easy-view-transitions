import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideRouter, withViewTransitions } from '@angular/router';
import { appRoutes } from './app.routes';
import { DefaultTransitions, provideDefaultViewTransition } from 'ngx-easy-view-transitions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withNoIncrementalHydration()),
    provideRouter(appRoutes, withViewTransitions({ skipInitialTransition: true })),
    provideDefaultViewTransition(
      { keyframes: DefaultTransitions.none, duration: 0 },
      { keyframes: DefaultTransitions.none, duration: 0 }
    ),
    provideZonelessChangeDetection()
  ]
};
