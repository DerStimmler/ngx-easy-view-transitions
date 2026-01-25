import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TransitionBase } from './transition-base';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class ViewTransitionsService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  setTransition(transitionName: string, animation: TransitionAnimation, direction: ViewTransitionDirection): void {
    const elementId = `view-transition-${direction}-${transitionName}`;

    if (this._document.getElementById(elementId)) return;

    const styleElement = this._document.getElementById(elementId) || this._document.createElement('style');

    styleElement.innerHTML = `
    ::view-transition-${direction === 'in' ? 'new' : 'old'}(${transitionName}){
      animation-name: ${animation.name};
      animation-duration: ${animation.duration}ms;
      animation-delay: ${animation.delay ?? 0}ms;
      animation-direction: ${animation.reverse ? 'reverse' : 'normal'};
      animation-fill-mode: ${animation.fillMode ?? 'none'};
      animation-timing-function: ${animation.timingFunction ?? 'ease'};
    }
    `;
    styleElement.id = elementId;

    this._renderer.appendChild(this._document.head, styleElement);
  }
}

/**@internal*/
export type TransitionAnimation = TransitionBase & {
  name: string;
};

/**@internal*/
export type ViewTransitionDirection = 'in' | 'out';
