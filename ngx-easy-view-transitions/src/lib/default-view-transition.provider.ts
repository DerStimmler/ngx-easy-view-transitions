import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { ViewTransitionDirection, ViewTransitionsService } from './view-transitions.service';
import { KeyframesService } from './keyframes.service';

/**
 * Override the default View Transition API cross-fade animation
 * @param inAnimation
 * @param outAnimation
 */
export function provideDefaultViewTransition(
  inAnimation: KeyframesTransition | CssKeyframesTransition,
  outAnimation: KeyframesTransition | CssKeyframesTransition
): EnvironmentProviders {
  const factory = (viewTransitionsService: ViewTransitionsService, keyframesService: KeyframesService) => {
    const setTransition = (
      transitionName: string,
      transition: KeyframesTransition | CssKeyframesTransition,
      direction: ViewTransitionDirection
    ) => {
      let animationName: string | null = null;

      if ('keyframesName' in transition) {
        animationName = (transition as CssKeyframesTransition).keyframesName;
      }

      if ('keyframes' in transition) {
        animationName = keyframesService.setKeyframes((transition as KeyframesTransition).keyframes);
      }

      if (!animationName) return;

      viewTransitionsService.setTransition(
        transitionName,
        {
          name: animationName,
          ...transition,
        },
        direction
      );
    };

    return () => {
      if (inAnimation) {
        setTransition('root', inAnimation, 'in');
      }

      if (outAnimation) {
        setTransition('root', outAnimation, 'out');
      }
    };
  };

  return provideAppInitializer(() => {
    const initializerFn = factory(inject(ViewTransitionsService), inject(KeyframesService));
    return initializerFn();
  });
}
