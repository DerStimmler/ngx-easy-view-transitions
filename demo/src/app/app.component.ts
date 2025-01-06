import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NoTransitionDirective,
  TransitionNameDirective,
} from 'ngx-easy-view-transitions';
import { NgOptimizedImage } from '@angular/common';

@Component({
    imports: [
        RouterModule,
        NoTransitionDirective,
        TransitionNameDirective,
        NgOptimizedImage,
    ],
    selector: 'ngx-easy-view-transitions-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly repoUrl =
    'https://github.com/DerStimmler/ngx-easy-view-transitions';
}
