export const none: Keyframe[] = [];

export const scaleIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'scale(0.5)',
    offset: 0,
  },
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 1,
  },
];

export const scaleOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 0,
  },
  {
    opacity: 0,
    transform: 'scale(0.5)',
    offset: 1,
  },
];

export const fadeIn: Keyframe[] = [
  {
    opacity: 0,
    offset: 0,
  },
  {
    opacity: 1,
    offset: 1,
  },
];

export const fadeOut: Keyframe[] = [
  {
    opacity: 1,
    offset: 0,
  },
  {
    opacity: 0,
    offset: 1,
  },
];

export const fadeInUp: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0, 100%)',
    offset: 0,
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1,
  },
];

export const fadeOutUp: Keyframe[] = [
  {
    opacity: 1,
    offset: 0,
  },
  {
    opacity: 0,
    transform: 'translate(0, -100%)',
    offset: 1,
  },
];

export const fadeInDown: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0, -100%)',
    offset: 0,
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1,
  },
];

export const fadeOutDown: Keyframe[] = [
  {
    opacity: 1,
    offset: 0,
  },
  {
    opacity: 0,
    transform: 'translate(0, 100%)',
    offset: 1,
  },
];

export const fadeInRight: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(100%, 0)',
    offset: 0,
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1,
  },
];

export const fadeOutRight: Keyframe[] = [
  {
    opacity: 1,
    offset: 0,
  },
  {
    opacity: 0,
    transform: 'translate(100%, 0)',
    offset: 1,
  },
];

export const fadeInLeft: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(-100%, 0)',
    offset: 0,
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1,
  },
];

export const fadeOutLeft: Keyframe[] = [
  {
    opacity: 1,
    offset: 0,
  },
  {
    opacity: 0,
    transform: 'translate(-100%, 0)',
    offset: 1,
  },
];
