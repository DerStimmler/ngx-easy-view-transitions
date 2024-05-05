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
  private readonly _colorsService = inject(ColorsService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  protected readonly fadeInUp = DefaultTransitions.fadeInUp;
  protected readonly fadeOutDown = DefaultTransitions.fadeOutDown;
  protected readonly color = this._colorsService.find(
    this._activatedRoute.snapshot.params['color']
  );
}
