import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DefaultTransitions, TransitionNameDirective } from 'ngx-easy-view-transitions';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'ngx-easy-view-transitions-color-detail',
  imports: [TransitionNameDirective, RouterLink],
  templateUrl: './color-detail.component.html',
  styleUrls: ['./color-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block'
  }
})
export class ColorDetailComponent {
  protected readonly fadeInUp = DefaultTransitions.fadeInUp;
  protected readonly fadeOutDown = DefaultTransitions.fadeOutDown;
  private readonly _colorsService = inject(ColorsService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  protected readonly color = this._colorsService.find(this._activatedRoute.snapshot.params['color']);
}
