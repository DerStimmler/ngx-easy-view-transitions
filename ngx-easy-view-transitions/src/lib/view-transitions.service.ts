import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class ViewTransitionsService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  setOutAnimation(outAnimation: string, transitionName: string) {
    const elementId = `view-transition-out-${transitionName}`;

    const styleElement =
      this._document.getElementById(elementId) ||
      this._document.createElement('style');

    styleElement.innerHTML = `
    ::view-transition-old(${transitionName}){
      animation: ${outAnimation};
    }
    `;
    styleElement.id = elementId;

    if (!this._document.getElementById(elementId))
      this._renderer.appendChild(this._document.head, styleElement);
  }

  setInAnimation(inAnimation: string, transitionName: string) {
    const elementId = `view-transition-in-${transitionName}`;

    const styleElement =
      this._document.getElementById(elementId) ||
      this._document.createElement('style');

    styleElement.innerHTML = `
    ::view-transition-new(${transitionName}){
      animation: ${inAnimation};
    }
    `;
    styleElement.id = elementId;

    if (!this._document.getElementById(elementId))
      this._renderer.appendChild(this._document.head, styleElement);
  }
}
