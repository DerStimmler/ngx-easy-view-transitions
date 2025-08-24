import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { KeyframesService } from './keyframes.service';
import { ViewTransitionsService } from './view-transitions.service';
import { isValidViewTransitionName } from './utils';

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
  private readonly _renderer = inject(Renderer2);
  private readonly _keyframesService = inject(KeyframesService);
  private readonly _viewTransitionsService = inject(ViewTransitionsService);

  constructor() {
    //transitionName
    effect(() => {
      const transitionName = this.transitionName();

      this._renderer.setStyle(this._el.nativeElement, 'view-transition-name', transitionName);

      queueMicrotask(() => {
        if (!isValidViewTransitionName(transitionName))
          console.warn(
            `The transition name "${transitionName}" is potentially invalid. Please use a valid CSS <custom-ident> value and avoid forbidden values like "unset", "initial", "inherit" and "none".`
          );
      });
    });

    //inAnimation
    effect(async () => {
      const inAnimation = this.inAnimation();

      if (!inAnimation) return;

      if ('keyframesName' in inAnimation) {
        const animation = inAnimation as CssKeyframesTransition;
        this._viewTransitionsService.setInAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          this.transitionName()
        );
      }

      if ('keyframes' in inAnimation) {
        const animation = inAnimation as KeyframesTransition;
        const keyframesName = this._keyframesService.setKeyframes(animation.keyframes);
        this._viewTransitionsService.setInAnimation(
          `${animation.duration}ms ${keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          this.transitionName()
        );
      }
    });

    //outAnimation
    effect(async () => {
      const outAnimation = this.outAnimation();

      if (!outAnimation) return;

      if ('keyframesName' in outAnimation) {
        const animation = outAnimation as CssKeyframesTransition;
        this._viewTransitionsService.setOutAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          this.transitionName()
        );
      }

      if ('keyframes' in outAnimation) {
        const animation = outAnimation as KeyframesTransition;
        const keyframesName = this._keyframesService.setKeyframes(animation.keyframes);
        this._viewTransitionsService.setOutAnimation(
          `${animation.duration}ms ${keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          this.transitionName()
        );
      }
    });
  }
}
