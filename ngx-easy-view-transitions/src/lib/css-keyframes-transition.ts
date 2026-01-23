import { TransitionBase } from './transition-base';

/**
 * Provide custom animation via CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) rule
 */
export interface CssKeyframesTransition extends TransitionBase {
  /**
   * Name of the CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) rule
   */
  keyframesName: string;
}
