/**
 * Provide custom animation via CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) rule
 */
export interface CssKeyframesTransition {
  /**
   * Name of the CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) rule
   */
  keyframesName: string;
  /**
   * Duration of the transition in ms
   */
  duration: number;
  /**
   * Wether the animation should be played reversed
   */
  reverse?: boolean;
}
