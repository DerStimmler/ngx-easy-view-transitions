import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { hashCode } from './utils';
import { DOCUMENT } from '@angular/common';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class KeyframesService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  setKeyframes(keyframes: Keyframe[]) {
    const keyframesAsString = JSON.stringify(keyframes);
    const hashedKeyframes = hashCode(keyframesAsString);
    const keyframesName = `keyframes-${hashedKeyframes}`;

    const elementId = keyframesName;

    const styleElement = this._document.getElementById(elementId) || this._document.createElement('style');

    styleElement.innerHTML = this.generateCssKeyframeRule(keyframesName, keyframes);
    styleElement.id = elementId;

    if (!this._document.getElementById(elementId)) this._renderer.appendChild(this._document.head, styleElement);

    return keyframesName;
  }

  private generateCssKeyframeRule(animationName: string, keyframes: Keyframe[]): string {
    const cssKeyframes: string[] = [];

    keyframes.forEach((keyframe, index) => {
      const offset = keyframe.offset ? `${keyframe.offset * 100}%` : '';

      const keyframeDeclaration = `${
        index === 0 ? 'from' : offset ? offset : index === keyframes.length - 1 ? 'to' : ''
      }`;

      const cssProperties = Object.entries(keyframe)
        .filter(([property]) => property !== 'offset')
        .map(([property, value]) => `${property}: ${value};`)
        .join('');

      cssKeyframes.push(`${keyframeDeclaration} { ${cssProperties} }`);
    });

    return `@keyframes ${animationName} { ${cssKeyframes.join(' ')} }`;
  }
}
