import { Injectable } from '@angular/core';
import { TransitionBase } from './transition-base';
import { CssRuleManagerService } from './css-rule-manager.service';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class ViewTransitionsService {
  private readonly _cssRuleManager = new CssRuleManagerService(
    'ngx-easy-view-transitions-rules',
    `<!-- contains view transition rules of ngx-easy-view-transitions as CSS rules in stylesheet -->`
  );

  setTransition(transitionName: string, animation: TransitionAnimation, direction: ViewTransitionDirection): void {
    const ruleId = `view-transition-${direction}-${transitionName}`;

    const rule = `
    ::view-transition-${direction === 'in' ? 'new' : 'old'}(${transitionName}){
      animation-name: ${animation.name};
      animation-duration: ${animation.duration}ms;
      animation-delay: ${animation.delay ?? 0}ms;
      animation-direction: ${animation.reverse ? 'reverse' : 'normal'};
      animation-fill-mode: ${animation.fillMode ?? 'none'};
      animation-timing-function: ${animation.timingFunction ?? 'ease'};
    }
    `;

    this._cssRuleManager.setRule(ruleId, rule);
  }
}

/**@internal*/
export type TransitionAnimation = TransitionBase & {
  name: string;
};

/**@internal*/
export type ViewTransitionDirection = 'in' | 'out';
