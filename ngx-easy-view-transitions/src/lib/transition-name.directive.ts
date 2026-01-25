import { computed, Directive, effect, ElementRef, inject, input, Renderer2, untracked } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { KeyframesService } from './keyframes.service';
import { ViewTransitionDirection, ViewTransitionsService } from './view-transitions.service';
import { fnv1aHash, isValidViewTransitionName } from './utils';

/**
 * Configure view transitions for the element
 */
@Directive({
  standalone: true,
  selector: '[transitionName]'
})
export class TransitionNameDirective {
  /**
   * Set the `view-transition-name` property to assign transitions to that element
   */
  originalTransitionName = input.required<string>({ alias: 'transitionName' });
  /**
   * Configure the animation when the element enters the view
   */
  inAnimation = input<KeyframesTransition | CssKeyframesTransition>();
  /**
   * Configure the animation when the element leaves the view
   */
  outAnimation = input<KeyframesTransition | CssKeyframesTransition>();
  /**
   * Whether to keep the original transition name or apply hashing for CSS safety.
   * Defaults to `false`. Set to `true` to use the name as provided without hashing.
   */
  preserveName = input<boolean>(false);
  /**
   * Whether to show the `data-original-view-transition-name` containing the provided transition name. Useful for debugging when hashing is enabled. Defaults to `false`.
   */
  showOriginalNameAttr = input<boolean>(false);

  private readonly _el = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);
  private readonly _keyframesService = inject(KeyframesService);
  private readonly _viewTransitionsService = inject(ViewTransitionsService);

  private readonly _transitionName = computed(() => {
    const originalTransitionName = this.originalTransitionName();

    return this.preserveName() ? originalTransitionName : `vtn-${fnv1aHash(originalTransitionName)}`;
  });

  constructor() {
    //transitionName
    effect(() => {
      this._renderer.setStyle(this._el.nativeElement, 'view-transition-name', this._transitionName());
    });

    //originalNameAttr
    effect(() => {
      queueMicrotask(() => {
        if (this.showOriginalNameAttr()) {
          this._renderer.setAttribute(
            this._el.nativeElement,
            'data-original-view-transition-name',
            untracked(this.originalTransitionName)
          );
        }
      });
    });

    //warn if invalid transition name
    effect(() => {
      queueMicrotask(() => {
        if (!this.preserveName()) return;

        const transitionName = this._transitionName();

        if (isValidViewTransitionName(transitionName)) return;

        console.warn(
          `The provided transition name "${transitionName}" is potentially invalid. Please use a valid CSS <custom-ident> value and avoid forbidden values like "unset", "initial", "inherit" and "none". Or use hashing by setting "preserveName" to false.`
        );
      });
    });
    //inAnimation
    effect(async () => {
      const animation = this.inAnimation();

      if (!animation) return;

      this.setTransition(this._transitionName(), animation, 'in');
    });

    //outAnimation
    effect(async () => {
      const animation = this.outAnimation();

      if (!animation) return;

      this.setTransition(this._transitionName(), animation, 'out');
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
        ...transition
      },
      direction
    );
  }
}
