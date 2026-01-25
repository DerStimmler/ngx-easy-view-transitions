import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { DefaultTransitions, TransitionNameDirective } from 'ngx-easy-view-transitions';

@Component({
  selector: 'ngx-easy-view-transitions-animations-list',
  imports: [TransitionNameDirective],
  templateUrl: './animations-list.component.html',
  styleUrl: './animations-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationsListComponent {
  protected readonly duration = signal(600);
  protected readonly scaleIn = DefaultTransitions.scaleIn;
  protected readonly scaleOut = DefaultTransitions.scaleOut;
  private readonly animations = signal<Record<string, Keyframe[]>>(
    DefaultTransitions as unknown as Record<string, Keyframe[]>
  );
  protected readonly animationNames = computed(() => Object.keys(this.animations()));

  protected playAnimation(animationName: string) {
    const animation = this.animations()[animationName];
    const element = document.getElementById('demo');

    if (element) {
      element.animate(animation, this.duration());
    }
  }
}
