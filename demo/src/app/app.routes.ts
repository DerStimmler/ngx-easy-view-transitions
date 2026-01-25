import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'animations',
    loadComponent: () => import('./animations/animations-list.component').then((m) => m.AnimationsListComponent)
  },
  {
    path: 'colors',
    loadComponent: () => import('./colors/colors-list.component').then((m) => m.ColorsListComponent)
  },
  {
    path: 'colors/:color',
    loadComponent: () => import('./colors/color-detail/color-detail.component').then((m) => m.ColorDetailComponent)
  },
  {
    path: '**',
    redirectTo: 'colors'
  }
];
