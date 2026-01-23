export interface TransitionBase {
  /**
   * Duration of the transition in ms
   */
  duration: number;
  /**
   * Whether the animation should be played reversed
   */
  reverse?: boolean;
  /**
   * How long the transition should be delayed in ms
   */
  delay?: number;
  /**
   * Animation fill-mode
   */
  fillMode?: FillMode;
  /**
   * Animations timing function
   */
  timingFunction?: string;
}
