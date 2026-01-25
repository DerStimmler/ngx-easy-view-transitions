import { inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fnv1aHash } from './utils';

/**@internal*/
export class CssRuleManagerService {
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer: Renderer2 = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  private readonly _styleSheet: CSSStyleSheet;
  private _trackedCssRules: TrackedCssRuleEntry[] = [];

  /**
   * @param styleId The id of the <style> element to create
   * @param initialInnerHTML Optional HTML content for the style element
   */
  constructor(styleId: string, initialInnerHTML?: string) {
    const styleElement = this._document.createElement('style');
    styleElement.id = styleId;
    if (initialInnerHTML) {
      styleElement.innerHTML = initialInnerHTML;
    }
    this._renderer.appendChild(this._document.head, styleElement);
    this._styleSheet = styleElement.sheet as CSSStyleSheet;
  }

  /**
   * Add or update a CSS rule
   * @param ruleId Unique identifier for the rule
   * @param rule The CSS rule string (will be trimmed automatically)
   */
  setRule(ruleId: string, rule: string) {
    const newHashedRule = fnv1aHash(rule);

    const oldIndex = this._trackedCssRules.findIndex((entry) => entry.ruleId === ruleId);
    if (oldIndex >= 0) {
      const oldHashedRule = this._trackedCssRules[oldIndex].hashedRule;
      if (oldHashedRule === newHashedRule) return;

      this._styleSheet.deleteRule(oldIndex);
      this._trackedCssRules.splice(oldIndex, 1);
    }

    this._styleSheet.insertRule(rule, this._styleSheet.cssRules.length);
    this._trackedCssRules.push({ ruleId, hashedRule: newHashedRule });
  }
}

/**@internal*/
type TrackedCssRuleEntry = { ruleId: string; hashedRule: number };
