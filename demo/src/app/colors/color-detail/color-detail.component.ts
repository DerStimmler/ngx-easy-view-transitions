import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DefaultTransitions,
  TransitionNameDirective,
} from 'ngx-easy-view-transitions';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'ngx-easy-view-transitions-color-detail',
  standalone: true,
  imports: [CommonModule, TransitionNameDirective],
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorDetailComponent {
  protected readonly fadeInUp = DefaultTransitions.fadeInUp;
  protected readonly fadeOutDown = DefaultTransitions.fadeOutDown;
  private _colorsService = inject(ColorsService);
  private _activatedRoute = inject(ActivatedRoute);
  protected color = this._colorsService.find(
    this._activatedRoute.snapshot.params['color']
  );
}
