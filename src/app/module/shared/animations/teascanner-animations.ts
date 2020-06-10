import {
  sequence,
  trigger,
  animate,
  style,
  group,
  query,
  transition,
  animateChild,
  state,
  animation,
  useAnimation,
  stagger
} from '@angular/animations';

export function fadeIn(selector = ':enter', duration = '400ms ease-out') {
  return [
    transition('* => *', [
      query(selector, [
        style({ opacity: 0, transform: 'translateY(-5px)'}),
        stagger('50ms', [
          animate(duration, style({
            opacity: 1,
            transform: 'translateY(0px)'
          }))
        ])
      ], {optional: true })
    ])
  ];
}

export function fadeOut(selector = ':leave', duration = 300) {
  return [
    transition('* => *', [
      query(selector, [
        style({ opacity: 1 }),
        stagger('30ms', [
          animate(duration, style({
            opacity: 0
          }))
        ])
      ], {optional: true })
    ])
  ];
}

const customAnimation = animation([
  style({
    opacity: '{{opacity}}',
    transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
  }),
  animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
  params: {
    duration: '200ms',
    delay: '0ms',
    opacity: '0',
    scale: '1',
    x: '0',
    y: '0',
    z: '0'
  }
});

export const teascannerAnimations = [

  trigger('animate', [transition('void => *', [useAnimation(customAnimation)])]),

  trigger('animateStagger', [
    state('50', style('*')),
    state('100', style('*')),
    state('200', style('*')),

    transition('void => 50',
      query('@*',
        [
          stagger('50ms', [
            animateChild()
          ])
        ], {optional: true})),
    transition('void => 100',
      query('@*',
        [
          stagger('100ms', [
            animateChild()
          ])
        ], {optional: true})),
    transition('void => 200',
      query('@*',
        [
          stagger('200ms', [
            animateChild()
          ])
        ], {optional: true}))
  ]),

  trigger('fadingInOut', [
    state('0, void', style({
      opacity: 0
    })),
    state('1, *', style({
      opacity: 1
    })),
    transition('1 => 0', animate('300ms ease-out')),
    transition('0 => 1', animate('300ms ease-in')),
    transition('void <=> *', animate('300ms ease-in'))
  ]),


  trigger('slidingInTop', [
    state('void', style({
      transform: 'translateY(-100%)',
    })),
    state('*', style({
      transform: 'translateY(0)',
    })),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),

  trigger('slidingInBottom', [
    state('void',
      style({
        transform: 'translateY(100%)',
      })),
    state('*', style({
      transform: 'translateY(0)',
    })),
    transition('void => *', animate('300ms')),
    transition('* => void', animate('300ms'))
  ]),

  trigger('expandCollapse', [
    state('void', style({
      height: '0px'
    })),
    state('*', style({
      height: '*'
    })),
    transition('void => *', animate('300ms ease-out')),
    transition('* => void', animate('300ms ease-in'))
  ]),



  trigger('TransitionFade', [

    transition('* => *', group([

      query('content > :enter, content > :leave ', [
        style({
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        })
      ], {optional: true}),

      query('content > :enter', [
        style({
          opacity: 0
        })
      ], {optional: true}),
      query('content > :leave', [
        style({
          opacity: 1
        }),
        animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          style({
            opacity: 0
          }))
      ], {optional: true}),
      query('content > :enter', [
        style({
          opacity: 0
        }),
        animate('300ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          style({
            opacity: 1
          }))
      ], {optional: true}),
      query('content > :enter', animateChild(), {optional: true}),
      query('content > :leave', animateChild(), {optional: true})
    ]))
  ])
];
