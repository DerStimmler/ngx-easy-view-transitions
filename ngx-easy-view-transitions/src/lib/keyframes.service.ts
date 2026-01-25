import { Injectable } from '@angular/core';
import { fnv1aHash } from './utils';
import { CssRuleManagerService } from './css-rule-manager.service';

/**@internal*/
@Injectable({ providedIn: 'root' })
export class KeyframesService {
  private readonly _cssRuleManager = new CssRuleManagerService(
    'ngx-easy-view-transitions-keyframes',
    `<!-- contains custom keyframes of ngx-easy-view-transitions as CSS rules in stylesheet -->`
  );

  setKeyframes(keyframes: Keyframe[]) {
    const keyframesAsString = JSON.stringify(keyframes);
    const hashedKeyframes = fnv1aHash(keyframesAsString);
    const keyframesName = `keyframes-${hashedKeyframes}`;

    const cssKeyframeRule = this.generateCssKeyframeRule(keyframesName, keyframes);

    this._cssRuleManager.setRule(keyframesName, cssKeyframeRule);

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
