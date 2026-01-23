import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { KeyframesService } from './keyframes.service';
import { ViewTransitionDirection, ViewTransitionsService } from './view-transitions.service';
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
      const animation = this.inAnimation();

      if (!animation) return;

      this.setTransition(this.transitionName(), animation, 'in');
    });

    //outAnimation
    effect(async () => {
      const animation = this.outAnimation();

      if (!animation) return;

      this.setTransition(this.transitionName(), animation, 'out');
    });
  }

  private setTransition(
    transitionName: string,
    transition: KeyframesTransition | CssKeyframesTransition,
    direction: ViewTransitionDirection
  ) {
    let animationName: string | null = null;

    if ('keyframesName' in transition) {
      animationName = (transition as CssKeyframesTransition).keyframesName;
    }

    if ('keyframes' in transition) {
      animationName = this._keyframesService.setKeyframes((transition as KeyframesTransition).keyframes);
    }

    if (!animationName) return;

    this._viewTransitionsService.setTransition(
      transitionName,
      {
        name: animationName,
        ...transition,
      },
      direction
    );
  }
}
