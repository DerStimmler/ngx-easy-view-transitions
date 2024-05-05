import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransitionNameDirective } from 'ngx-easy-view-transitions';
import { ColorsService } from './colors.service';

@Component({
  selector: 'ngx-easy-view-transitions-colors-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TransitionNameDirective],
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsListComponent {
  private readonly _colorsService = inject(ColorsService);

  protected readonly colors = this._colorsService.getAll();
}
