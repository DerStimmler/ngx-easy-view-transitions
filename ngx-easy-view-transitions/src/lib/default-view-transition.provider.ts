import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { KeyframesTransition } from './keyframes-transition';
import { CssKeyframesTransition } from './css-keyframes-transition';
import { ViewTransitionsService } from './view-transitions.service';
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
  const factory = (viewTransitionService: ViewTransitionsService, keyframesService: KeyframesService) => {
    return () => {
      if ('keyframesName' in inAnimation) {
        const animation = inAnimation as CssKeyframesTransition;
        viewTransitionService.setInAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          'root'
        );
      }

      if ('keyframes' in inAnimation) {
        const animation = inAnimation as KeyframesTransition;
        const keyframesName = keyframesService.setKeyframes(animation.keyframes);
        viewTransitionService.setInAnimation(
          `${animation.duration}ms ${keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          'root'
        );
      }

      if ('keyframesName' in outAnimation) {
        const animation = outAnimation as CssKeyframesTransition;
        viewTransitionService.setOutAnimation(
          `${animation.duration}ms ${animation.keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          'root'
        );
      }

      if ('keyframes' in outAnimation) {
        const animation = outAnimation as KeyframesTransition;
        const keyframesName = keyframesService.setKeyframes(animation.keyframes);
        viewTransitionService.setOutAnimation(
          `${animation.duration}ms ${keyframesName} ${animation.reverse ? 'reverse' : ''}`,
          'root'
        );
      }
    };
  };

  return provideAppInitializer(() => {
    const initializerFn = factory(inject(ViewTransitionsService), inject(KeyframesService));
    return initializerFn();
  });
}
