import {
  Directive,
  ElementRef,
  inject,
  OnInit,
  RendererFactory2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Exclude an element from view transitions
 */
@Directive({
  standalone: true,
  selector: '[noTransition]',
})
export class NoTransitionDirective implements OnInit {
  private readonly _el = inject(ElementRef);
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _renderer = this._rendererFactory.createRenderer(null, null);
  private readonly _document = inject(DOCUMENT);

  ngOnInit(): void {
    const transitionName = 'ngx-easy-view-transitions-disabled';

    this._el.nativeElement.style.viewTransitionName = transitionName;

    const elementId = 'view-transition-none';

    const styleElement =
      this._document.getElementById(elementId) ||
      this._document.createElement('style');

    styleElement.innerHTML = `
    ::view-transition-group(${transitionName}),
    ::view-transition-old(${transitionName}),
    ::view-transition-new(${transitionName}) {
      animation-duration: 0s !important;
    }
    `;
    styleElement.id = elementId;

    if (!this._document.getElementById(elementId))
      this._renderer.appendChild(this._document.head, styleElement);
  }
}
