import { Route } from '@angular/router';
import { ColorDetailComponent } from './colors/color-detail/color-detail.component';
import { ColorsListComponent } from './colors/colors-list.component';
import { AnimationsListComponent } from './animations/animations-list.component';

export const appRoutes: Route[] = [
  {
    path: 'animations',
    component: AnimationsListComponent,
  },
  {
    path: 'colors',
    component: ColorsListComponent,
  },
  {
    path: 'colors/:color',
    component: ColorDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'colors',
  },
];
