import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { KeyframesService } from './keyframes.service';
import { ViewTransitionsService } from './view-transitions.service';

/**
 * Configure view transitions for the element
 */
@Directive({
  standalone: true,
  selector: '[transitionName]',
})
export class TransitionNameDirective {
  /**
   * Set the `view-transition-name` property to assign transitions to that element
   */
  transitionName = input.required<string>();
  /**
   * Configure the animation when the element enters the view
   */
  inAnimation = input<KeyframesTransition | CssKeyframesTransition>();
  /**
   * Configure the animation when the element leaves the view
   */
  outAnimation = input<KeyframesTransition | CssKeyframesTransition>();

  private readonly _el = inject(ElementRef);
  private readonly _keyframesService = inject(KeyframesService);
  private readonly _viewTransitionsService = inject(ViewTransitionsService);

  constructor() {
    //transitionName
    effect(() => {
      this._el.nativeElement.style.viewTransitionName = this.transitionName();
    });

    //inAnimation
    effect(async () => {
      if (!this.inAnimation()) return;

      if ('keyframesName' in this.inAnimation()!) {
        const animation = this.inAnimation() as CssKeyframesTransition;
        this._viewTransitionsService.setInAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${
            animation.reverse ? 'reverse' : ''
          }`,
          this.transitionName()
        );
      }

      if ('keyframes' in this.inAnimation()!) {
        const animation = this.inAnimation() as KeyframesTransition;
        const keyframesName = this._keyframesService.setKeyframes(
          animation.keyframes
        );
        this._viewTransitionsService.setInAnimation(
          `${animation.duration}ms ${keyframesName} ${
            animation.reverse ? 'reverse' : ''
          }`,
          this.transitionName()
        );
      }
    });

    //outAnimation
    effect(async () => {
      if (!this.outAnimation()) return;

      if ('keyframesName' in this.outAnimation()!) {
        const animation = this.outAnimation() as CssKeyframesTransition;
        this._viewTransitionsService.setOutAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${
            animation.reverse ? 'reverse' : ''
          }`,
          this.transitionName()
        );
      }

      if ('keyframes' in this.outAnimation()!) {
        const animation = this.outAnimation() as KeyframesTransition;
        const keyframesName = this._keyframesService.setKeyframes(
          animation.keyframes
        );
        this._viewTransitionsService.setOutAnimation(
          `${animation.duration}ms ${keyframesName} ${
            animation.reverse ? 'reverse' : ''
          }`,
          this.transitionName()
        );
      }
    });
  }
}
