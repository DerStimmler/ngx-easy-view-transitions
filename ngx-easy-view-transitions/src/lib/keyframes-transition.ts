import { TransitionBase } from './transition-base';

/**
 * Provide custom view transition animation via [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) objects rule
 */
export interface KeyframesTransition extends TransitionBase {
  /**
   * Animation in [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) format
   */
  keyframes: Keyframe[];
}
