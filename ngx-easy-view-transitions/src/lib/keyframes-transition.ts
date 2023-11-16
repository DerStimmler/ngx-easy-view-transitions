/**
 * Provide custom view transition animation via [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) objects rule
 */
export interface KeyframesTransition {
  /**
   * Animation in [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) format
   */
  keyframes: Keyframe[];
  /**
   * Duration of the transition in ms
   */
  duration: number;
  /**
   * Wether the animation should be played reversed
   */
  reverse?: boolean;
}
