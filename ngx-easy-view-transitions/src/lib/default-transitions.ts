export const none: Keyframe[] = [];

export const scaleIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'scale(0.5)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  }
];

export const scaleOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'scale(0.5)',
    offset: 1
  }
];

export const fadeIn: Keyframe[] = [
  {
    opacity: 0,
    offset: 0
  },
  {
    opacity: 1,
    offset: 1
  }
];

export const fadeOut: Keyframe[] = [
  {
    opacity: 1,
    offset: 0
  },
  {
    opacity: 0,
    offset: 1
  }
];

export const fadeInUp: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0, 100%)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1
  }
];

export const fadeOutUp: Keyframe[] = [
  {
    opacity: 1,
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translate(0, -100%)',
    offset: 1
  }
];

export const fadeInDown: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0, -100%)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1
  }
];

export const fadeOutDown: Keyframe[] = [
  {
    opacity: 1,
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translate(0, 100%)',
    offset: 1
  }
];

export const fadeInRight: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(100%, 0)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1
  }
];

export const fadeOutRight: Keyframe[] = [
  {
    opacity: 1,
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translate(100%, 0)',
    offset: 1
  }
];

export const fadeInLeft: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(-100%, 0)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1
  }
];

export const fadeOutLeft: Keyframe[] = [
  {
    opacity: 1,
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translate(-100%, 0)',
    offset: 1
  }
];

export const flipInX: Keyframe[] = [
  {
    opacity: 0,
    transform: 'rotateX(90deg)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'rotateX(0)',
    offset: 1
  }
];

export const flipOutX: Keyframe[] = [
  {
    opacity: 1,
    transform: 'rotateX(0)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'rotateX(90deg)',
    offset: 1
  }
];

export const flipInY: Keyframe[] = [
  {
    opacity: 0,
    transform: 'rotateY(90deg)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'rotateY(0)',
    offset: 1
  }
];

export const flipOutY: Keyframe[] = [
  {
    opacity: 1,
    transform: 'rotateY(0)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'rotateY(90deg)',
    offset: 1
  }
];

export const rotateIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'rotate(-180deg) scale(0.5)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'rotate(0) scale(1)',
    offset: 1
  }
];

export const rotateOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'rotate(0) scale(1)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'rotate(180deg) scale(0.5)',
    offset: 1
  }
];

export const bounceIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'scale(0.3)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'scale(1.05)',
    offset: 0.6
  },
  {
    opacity: 1,
    transform: 'scale(0.95)',
    offset: 0.8
  },
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  }
];

export const bounceOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'scale(1)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'scale(0.95)',
    offset: 0.2
  },
  {
    opacity: 1,
    transform: 'scale(1.05)',
    offset: 0.4
  },
  {
    opacity: 0,
    transform: 'scale(0.3)',
    offset: 1
  }
];

export const blurIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'scale(1.2)',
    filter: 'blur(20px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'scale(1)',
    filter: 'blur(0px)',
    offset: 1
  }
];

export const blurOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'scale(1)',
    filter: 'blur(0px)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'scale(0.8)',
    filter: 'blur(20px)',
    offset: 1
  }
];

export const perspectiveIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'perspective(1000px) rotateY(90deg)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'perspective(1000px) rotateY(0deg)',
    offset: 1
  }
];

export const perspectiveOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'perspective(1000px) rotateY(0deg)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'perspective(1000px) rotateY(-90deg)',
    offset: 1
  }
];

export const skewIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translateX(-100%) skewX(30deg)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translateX(0) skewX(0deg)',
    offset: 1
  }
];

export const skewOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'translateX(0) skewX(0deg)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translateX(100%) skewX(-30deg)',
    offset: 1
  }
];

export const revealCircleIn: Keyframe[] = [
  {
    clipPath: 'circle(0% at 50% 50%)',
    offset: 0
  },
  {
    clipPath: 'circle(150% at 50% 50%)',
    offset: 1
  }
];

export const revealCircleOut: Keyframe[] = [
  {
    clipPath: 'circle(150% at 50% 50%)',
    offset: 0
  },
  {
    clipPath: 'circle(0% at 50% 50%)',
    offset: 1
  }
];

export const parallaxIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translateZ(-300px) scale(2)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translateZ(0) scale(1)',
    offset: 1
  }
];

export const parallaxOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'translateZ(0) scale(1)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'translateZ(-300px) scale(0.8)',
    offset: 1
  }
];

export const tiltIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'rotate(-15deg) translateY(50%)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'rotate(0) translateY(0)',
    offset: 1
  }
];

export const tiltOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'rotate(0) translateY(0)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'rotate(15deg) translateY(-50%)',
    offset: 1
  }
];

export const glitchIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0, 0)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'translate(-2px, 2px)',
    offset: 0.2
  },
  {
    opacity: 1,
    transform: 'translate(2px, -2px)',
    offset: 0.4
  },
  {
    opacity: 1,
    transform: 'translate(-1px, 1px)',
    offset: 0.6
  },
  {
    opacity: 1,
    transform: 'translate(1px, -1px)',
    offset: 0.8
  },
  {
    opacity: 1,
    transform: 'translate(0, 0)',
    offset: 1
  }
];

export const curtainIn: Keyframe[] = [
  {
    clipPath: 'inset(0 50% 0 50%)',
    offset: 0
  },
  {
    clipPath: 'inset(0 0% 0 0%)',
    offset: 1
  }
];

export const curtainOut: Keyframe[] = [
  {
    clipPath: 'inset(0 0% 0 0%)',
    offset: 0
  },
  {
    clipPath: 'inset(0 50% 0 50%)',
    offset: 1
  }
];

export const depthFlipIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'perspective(1200px) rotateX(-90deg) translateZ(-200px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'perspective(1200px) rotateX(0deg) translateZ(0)',
    offset: 1
  }
];

export const depthFlipOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'perspective(1200px) rotateX(0deg) translateZ(0)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'perspective(1200px) rotateX(90deg) translateZ(-200px)',
    offset: 1
  }
];

export const distortWarpIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'skewX(20deg) scale(0.9)',
    filter: 'blur(10px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'skewX(0deg) scale(1)',
    filter: 'blur(0px)',
    offset: 1
  }
];

export const distortWarpOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'skewX(0deg) scale(1)',
    filter: 'blur(0px)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'skewX(-20deg) scale(0.9)',
    filter: 'blur(10px)',
    offset: 1
  }
];

export const coverFlipIn: Keyframe[] = [
  {
    opacity: 0,
    transform: 'perspective(800px) rotateY(-12deg) translateX(-8px)',
    offset: 0
  },
  {
    opacity: 1,
    transform: 'perspective(800px) rotateY(0deg) translateX(0)',
    offset: 1
  }
];

export const coverFlipOut: Keyframe[] = [
  {
    opacity: 1,
    transform: 'perspective(800px) rotateY(0deg) translateX(0)',
    offset: 0
  },
  {
    opacity: 0,
    transform: 'perspective(800px) rotateY(12deg) translateX(8px)',
    offset: 1
  }
];
