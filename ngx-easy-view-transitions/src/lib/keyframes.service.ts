import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { fnv1aHash } from './utils';
import { DOCUMENT } from '@angular/common';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class KeyframesService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  private readonly _insertedKeyframes = new Set<string>();

  setKeyframes(keyframes: Keyframe[]) {
    const keyframesAsString = JSON.stringify(keyframes);
    const hashedKeyframes = fnv1aHash(keyframesAsString);
    const keyframesName = `keyframes-${hashedKeyframes}`;

    if (this._insertedKeyframes.has(keyframesName)) return keyframesName;

    const styleElement = this._renderer.createElement('style') as HTMLStyleElement;

    this._renderer.setAttribute(styleElement, 'id', keyframesName);

    const cssKeyframeRule = this.generateCssKeyframeRule(keyframesName, keyframes);
    this._renderer.setProperty(styleElement, 'innerHTML', cssKeyframeRule);

    this._renderer.appendChild(this._document.head, styleElement);

    this._insertedKeyframes.add(keyframesName);

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
