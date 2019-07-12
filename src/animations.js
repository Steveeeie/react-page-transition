import { keyframes } from 'styled-components';

export default {
  moveToLeft: {
    keyframes: keyframes`
      from { }
      to { transform: translateX(-100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveFromLeft: {
    keyframes: keyframes`
      from {  transform: translateX(-100%) };
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveToRight: {
    keyframes: keyframes`
      from { }
      to { transform: translateX(100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveFromRight: {
    keyframes: keyframes`
      from { transform: translateX(100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveToTop: {
    keyframes: keyframes`
      from { }
      to { transform: translateY(-100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveFromTop: {
    keyframes: keyframes`
      from { transform: translateY(-100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveToBottom: {
    keyframes: keyframes`
      from { }
      to { transform: translateY(100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveFromBottom: {
    keyframes: keyframes`
      from { transform: translateY(100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  fade: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveToLeftFade: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateX(-100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveFromLeftFade: {
    keyframes: keyframes`
      from { opacity: 0.3;  transform: translateX(-100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveToRightFade: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3;  transform: translateX(100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveFromRightFade: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateX(100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveToTopFade: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateY(-100%); }
    `,
    duration: 600,
    timing: 'ease',
    fill: 'both'
  },
  moveFromTopFade: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(-100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveToBottomFade: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3;  transform: translateY(100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  moveFromBottomFade: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(100%); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  scaleDown: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: scale(0.8); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  scaleUp: {
    keyframes: keyframes`
	    from { opacity: 0;  transform: scale(0.8); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both'
  },
  scaleUpDown: {
    keyframes: keyframes`
      from { opacity: 0; transform: scale(1.2); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both'
  },
  scaleDownUp: {
    keyframes: keyframes`
	    from { }
	    to { opacity: 0; transform: scale(1.2); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both'
  },
  scaleDownCenter: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: scale(0.7); }
    `,
    duration: 400,
    timing: 'ease',
    fill: 'both'
  },
  scaleUpCenter: {
    keyframes: keyframes`
      from { opacity: 0;  transform: scale(0.7); }
    `,
    duration: 400,
    timing: 'ease',
    fill: 'both'
  },
  rotateRightSideFirst: {
    keyframes: keyframes`
      0% { }
      40% { transform: rotateY(15deg); opacity: 0.8; animation-timing-function: ease-out; }
      100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
    `,
    duration: 800,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateLeftSideFirst: {
    keyframes: keyframes`
      0% { }
      40% { transform: rotateY(-15deg); opacity: 0.8; animation-timing-function: ease-out; }
      100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
    `,
    duration: 800,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateTopSideFirst: {
    keyframes: keyframes`
      0% { }
      40% { transform: rotateX(15deg); opacity: 0.8; animation-timing-function: ease-out; }
      100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
    `,
    duration: 800,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateBottomSideFirst: {
    keyframes: keyframes`
      0% { }
      40% { transform: rotateX(-15deg); opacity: 0.8; animation-timing-function: ease-out; }
      100% {transform: scale(0.8) translateZ(-200px); opacity:0; }
    `,
    duration: 800,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  flipOutRight: {
    keyframes: keyframes`
      from { }
      to { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 50%'
  },
  flipInLeft: {
    keyframes: keyframes`
      from { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-out',
    fill: 'both',
    origin: '50% 50%'
  },
  flipOutLeft: {
    keyframes: keyframes`
      from { }
      to { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 50%'
  },
  flipInRight: {
    keyframes: keyframes`
      from { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-out',
    fill: 'both',
    origin: '50% 50%'
  },
  flipOutTop: {
    keyframes: keyframes`
      from { }
      to { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 50%'
  },
  flipInBottom: {
    keyframes: keyframes`
      from { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-out',
    fill: 'both',
    origin: '50% 50%'
  },
  flipOutBottom: {
    keyframes: keyframes`
      from { }
      to { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 50%'
  },
  flipInTop: {
    keyframes: keyframes`
      from { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
    `,
    duration: 500,
    timing: 'ease-out',
    fill: 'both',
    origin: '50% 50%'
  },
  rotateFall: {
    keyframes: keyframes`
      0% { transform: rotateZ(0deg); }
      20% { transform: rotateZ(10deg); animation-timing-function: ease-out; }
      40% { transform: rotateZ(17deg); }
      60% { transform: rotateZ(16deg); }
      100% { transform: translateY(100%) rotateZ(17deg); }
    `,
    duration: 1000,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 0%'
  },
  rotateOutNewspaper: {
    keyframes: keyframes`
      from { }
      to { transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 50%'
  },
  rotateInNewspaper: {
    keyframes: keyframes`
      from { transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
    `,
    duration: 500,
    timing: 'ease-out',
    fill: 'both',
    origin: '50% 50%'
  },
  rotatePushLeft: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: rotateY(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotatePushRight: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: rotateY(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotatePushTop: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: rotateX(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotatePushBottom: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: rotateX(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotatePullRight: {
    keyframes: keyframes`
      from { opacity: 0; transform: rotateY(-90deg); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotatePullLeft: {
    keyframes: keyframes`
      from { opacity: 0; transform: rotateY(90deg); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotatePullTop: {
    keyframes: keyframes`
      from { opacity: 0; transform: rotateX(-90deg); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotatePullBottom: {
    keyframes: keyframes`
      from { opacity: 0; transform: rotateX(90deg); }
    `,
    duration: 500,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateFoldRight: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: translateX(100%) rotateY(90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateFoldLeft: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateFoldTop: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateFoldBottom: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateUnfoldLeft: {
    keyframes: keyframes`
      from { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateUnfoldRight: {
    keyframes: keyframes`
      from { opacity: 0;  transform: translateX(100%) rotateY(90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateUnfoldTop: {
    keyframes: keyframes`
      from { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateUnfoldBottom: {
    keyframes: keyframes`
      from { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
    `,
    duration: 700,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateRoomLeftOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateX(-100%) rotateY(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateRoomLeftIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateX(100%) rotateY(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateRoomRightOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateX(100%) rotateY(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateRoomRightIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateX(-100%) rotateY(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateRoomTopOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateY(-100%) rotateX(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateRoomTopIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(100%) rotateX(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateRoomBottomOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateY(100%) rotateX(90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateRoomBottomIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(-100%) rotateX(-90deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateCubeLeftOut: {
    keyframes: keyframes`
      0% { }
      50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
      100% { opacity: 0.3; transform: translateX(-100%) rotateY(-90deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateCubeLeftIn: {
    keyframes: keyframes`
      0% { opacity: 0.3; transform: translateX(100%) rotateY(90deg); }
      50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateCubeRightOut: {
    keyframes: keyframes`
      0% { }
      50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
      100% { opacity: 0.3; transform: translateX(100%) rotateY(90deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateCubeRightIn: {
    keyframes: keyframes`
      0% { opacity: 0.3; transform: translateX(-100%) rotateY(-90deg); }
      50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateCubeTopOut: {
    keyframes: keyframes`
      0% {}
      50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
      100% { opacity: 0.3; transform: translateY(-100%) rotateX(90deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateCubeTopIn: {
    keyframes: keyframes`
      0% { opacity: 0.3; transform: translateY(100%) rotateX(-90deg); }
      50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateCubeBottomOut: {
    keyframes: keyframes`
      0% { }
      50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
      100% { opacity: 0.3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateCubeBottomIn: {
    keyframes: keyframes`
      0% { opacity: 0.3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
      50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
    `,
    duration: 600,
    timing: 'ease-in',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateCarouselLeftOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateX(-150%) scale(0.4) rotateY(-65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateCarouselLeftIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateX(200%) scale(0.4) rotateY(65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateCarouselRightOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateX(200%) scale(0.4) rotateY(65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '0% 50%'
  },
  rotateCarouselRightIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateX(-200%) scale(0.4) rotateY(-65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '100% 50%'
  },
  rotateCarouselTopOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateY(-200%) scale(0.4) rotateX(65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateCarouselTopIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(200%) scale(0.4) rotateX(-65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateCarouselBottomOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0.3; transform: translateY(200%) scale(0.4) rotateX(-65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 0%'
  },
  rotateCarouselBottomIn: {
    keyframes: keyframes`
      from { opacity: 0.3; transform: translateY(-200%) scale(0.4) rotateX(65deg); }
    `,
    duration: 800,
    timing: 'ease',
    fill: 'both',
    origin: '50% 100%'
  },
  rotateSidesOut: {
    keyframes: keyframes`
      from { }
      to { opacity: 0; transform: translateZ(-500px) rotateY(90deg); }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '-50% 50%'
  },
  rotateSidesIn: {
    keyframes: keyframes`
      from { opacity: 0; transform: translateZ(-500px) rotateY(-90deg); }
    `,
    duration: 500,
    timing: 'ease-in',
    fill: 'both',
    origin: '150% 50%'
  },
  rotateSlideOut: {
    keyframes: keyframes`
      0% { }
      25% { opacity: 0.5; transform: translateZ(-500px); }
      75% { opacity: 0.5; transform: translateZ(-500px) translateX(-200%); }
      100% { opacity: 0.5; transform: translateZ(-500px) translateX(-200%); }
    `,
    duration: 1000,
    timing: 'ease',
    fill: 'both'
  },
  rotateSlideIn: {
    keyframes: keyframes`
      0%, 25% { opacity: 0.5; transform: translateZ(-500px) translateX(200%); }
      75% { opacity: 0.5; transform: translateZ(-500px); }
      100% { opacity: 1; transform: translateZ(0) translateX(0); }
    `,
    duration: 1000,
    timing: 'ease',
    fill: 'both'
  }
};
