# ngx-easy-view-transitions

[![npm version](https://img.shields.io/npm/v/ngx-easy-view-transitions)](https://www.npmjs.org/package/ngx-easy-view-transitions/)
[![npm downloads](https://img.shields.io/npm/dt/ngx-easy-view-transitions)](https://www.npmjs.org/package/ngx-easy-view-transitions/)
![build](https://github.com/DerStimmler/ngx-easy-view-transitions/actions/workflows/build.yml/badge.svg)
[![GitHub license](https://img.shields.io/github/license/DerStimmler/ngx-easy-view-transitions)](https://github.com/DerStimmler/ngx-easy-view-transitions/blob/master/LICENSE.md)

Angular library for easier use of the View Transitions API

## Demo

https://derstimmler.github.io/ngx-easy-view-transitions/

## Installation

Available on [npm](https://www.npmjs.org/package/ngx-easy-view-transitions/).

```bash
npm install ngx-easy-view-transitions
```

You have to enable Angulars built-in view transitions in the Router using the [`withViewTransitions()`](https://angular.io/api/router/withViewTransitions#usage-notes) function.

```typescript
bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(appRoutes, withViewTransitions())
    ]
  }
);
```

## Usage

### Morph elements

To morph an element during navigation from the old to the new state use the `transitionName` directive and provide the same name on both pages.

```typescript
import { TransitionNameDirective } from 'ngx-easy-view-transitions';
```

`users.component.html`

```angular2html
<img transitionName="profile-picture" src="...">
```

`user.component.html`

```angular2html
<img transitionName="profile-picture" src="...">
```

Note that each `transitionName` must be unique for a page.

### Customize animations

Instead of morphing an element, you can provide custom animations for entering and leaving the view using the `inAnimation` and `outAnimation` inputs.
There are two ways to provide a custom animations: As CSS `@keyframes` rule or [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) array.

#### Using CSS @keyframes

You can simply use a CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) rule from your CSS:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

```typescript
inAnimation = { keyframeName: 'fadeIn', duration: 600 };
outAnimation = { keyframeName: 'fadeIn', duration: 600, reverse: true };
```

```angular2html
<img transitionName="profile-picture" [inAnimation]="inAnimation" [outAnimation]="outAnimation" src="...">
```

#### Using Keyframe array

When you want to use typed objects instead of CSS you can provide a [`Keyframe`](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) array:

```typescript
const fadeIn: Keyframe[] = [
  {
    opacity: 0,
    offset: 0,
  },
  {
    opacity: 1,
    offset: 1,
  },
];
```

```typescript
inAnimation = { keyframes: fadeIn, duration: 600 };
outAnimation = { keyframes: fadeIn, duration: 600, reverse: true };
```

```angular2html
<img transitionName="profile-picture" [inAnimation]="inAnimation" [outAnimation]="outAnimation" src="...">
```

### Default animations

To start faster there are some default animations available under `DefaultTransitions.*`.

```typescript
import { DefaultTransitions } from 'ngx-easy-view-transitions';

inAnimation = { keyframes: DefaultTransitions.fadeInUp, duration: 600 };
```

You can see them in the [demo](https://derstimmler.github.io/ngx-easy-view-transitions/animations) and [here](https://github.com/DerStimmler/ngx-easy-view-transitions/blob/main/ngx-easy-view-transitions/src/lib/default-transitions.ts).

### Exclude element from view transitions

When you want to exclude an element form view transitions you can add the `noTransition` directive.

```typescript
import { NoTransitionDirective } from 'ngx-easy-view-transitions';
```

```angular2html
<img noTransition src="...">
```

### Configure default transition

By default View Transitions API will perform a cross-fade animation on all elements.
But you can also provide your own in and out animations by adding the `provideDefaultViewTransition()` provider function.

In the following example the default animation gets disabled:

```typescript
bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(appRoutes, withViewTransitions()),
      provideDefaultViewTransition(
        { keyframes: DefaultTransitions.none, duration: 0 },
        { keyframes: DefaultTransitions.none, duration: 0 }
      )
    ]
  }
);
```

## Development

Install dependencies with: `pnpm install`

Run `pnpm demo` to run the demo app on a local development server.
You can access it on http://localhost:4200.

Run `pnpm test` to test all projects.

Run `pnpm lint` to lint all projects.

Run `pnpm build` to build all projects. You can find the output under `/dist`.

Since it's a nx workspace you can use the common nx commands for everything else.
