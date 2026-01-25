import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TransitionBase } from './transition-base';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class ViewTransitionsService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  private readonly _styleSheet: CSSStyleSheet;
  private readonly _ruleIndexes = new Map<string, number>();

  constructor() {
    const styleElement = this._document.createElement('style');
    styleElement.id = 'ngx-easy-view-transitions-rules';
    this._renderer.appendChild(this._document.head, styleElement);
    this._styleSheet = styleElement.sheet as CSSStyleSheet;
  }

  setTransition(transitionName: string, animation: TransitionAnimation, direction: ViewTransitionDirection): void {
    const elementId = `view-transition-${direction}-${transitionName}`;

    // If already exists, remove it first
    if (this._ruleIndexes.has(elementId)) {
      const index = this._ruleIndexes.get(elementId);

      if (index) {
        this._styleSheet.deleteRule(index);
        this._ruleIndexes.delete(elementId);

        // Update indexes of rules that came after the deleted one
        for (const [key, i] of this._ruleIndexes.entries()) {
          if (i > index) this._ruleIndexes.set(key, i - 1);
        }
      }
    }

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

    // Insert the new rule and store its index
    const ruleIndex = this._styleSheet.insertRule(rule, this._styleSheet.cssRules.length);
    this._ruleIndexes.set(elementId, ruleIndex);
  }
}

/**@internal*/
export type TransitionAnimation = TransitionBase & {
  name: string;
};

/**@internal*/
export type ViewTransitionDirection = 'in' | 'out';
