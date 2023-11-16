import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DefaultTransitions,
  TransitionNameDirective,
} from 'ngx-easy-view-transitions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngx-easy-view-transitions-animations-list',
  standalone: true,
  imports: [CommonModule, TransitionNameDirective, RouterLink],
  templateUrl: './animations-list.component.html',
  styleUrl: './animations-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationsListComponent {
  animations = signal<Record<string, Keyframe[]>>(
    DefaultTransitions as unknown as Record<string, Keyframe[]>
  );
  animationNames = computed(() => Object.keys(this.animations()));
  duration = signal(600);

  playAnimation(animationName: string) {
    const animation = this.animations()[animationName];
    const element = document.getElementById('demo');

    if (element) {
      element.animate(animation, this.duration());
    }
  }
}
